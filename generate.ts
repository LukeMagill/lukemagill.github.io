import * as path from "https://deno.land/std@0.223.0/path/mod.ts";
import puppeteer from "https://deno.land/x/puppeteer@16.2.0/mod.ts";
import { DOMParser,  } from "https://deno.land/x/deno_dom@v0.1.45/deno-dom-wasm.ts";
import { PersonalInfo } from "./personal-info.ts";


async function main(): Promise<void> {
  const command = Deno.args[0];
  if (command === "build") {
    await generateFull();
    await generatePdf("magill-luke");
    await generatePdf("magill-luke-resume");
  } else {
    console.log(`Must provide a valid command: ${JSON.stringify(Deno.args)}`)
  }
}

/**
 * Generates the full resume.
 * 
 * Basically just adds in phone and email, which I don't want in the default
 * resume so the default resume can be posted online.
 */
async function generateFull(): Promise<void> {
  const pathname = path.resolve("magill-luke.html");
  const documentText = await Deno.readTextFile(pathname);
  const personalInfoPathname = path.resolve("personal-info.json");
  const personalInfo: PersonalInfo =
    JSON.parse(await Deno.readTextFile(personalInfoPathname));
  
  const document = new DOMParser().parseFromString(documentText, "text/html");
  if (!document) {
    throw new Error("Error parsing document.");
  }

  const personalInfoElement = document.getElementById("personal-info");
  if (!personalInfoElement) {
    throw new Error("Error: element with class 'personal-info' not found.");
  }

  const addHTML = (elementName: string, html: string) => {
    const element = document.createElement(elementName);
    element.innerHTML = html;
    personalInfoElement.appendChild(element);
  }

  const { phoneNumber, emailAddress } = personalInfo;
  const cleanPhoneNumber = phoneNumber.replaceAll(/\D/g, "");

  addHTML("dt", "Phone");
  addHTML("dd", `<a href="tel:${cleanPhoneNumber}">${phoneNumber}</a>`);
  addHTML("dt", "Email");
  addHTML(
    "dd", `<a href="mailto:${emailAddress}">${emailAddress}</a>`);

  const outputPathname = path.resolve("magill-luke-resume.html");
  const content = [
    "<!DOCTYPE html>", document.body.parentElement?.outerHTML || ""].join("\n");
  await Deno.writeTextFile(outputPathname, content);
}

async function generatePdf(name: string): Promise<void> {
  const pathname = path.resolve(`${name}.html`);
  const pathUrl = path.toFileUrl(pathname);
  const outputPathname = path.resolve(`${name}.pdf`);

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(pathUrl.toString(), { waitUntil: "networkidle2", });
  await page.pdf({ path: outputPathname, format: "Letter" });
  await browser.close();
}

await main();