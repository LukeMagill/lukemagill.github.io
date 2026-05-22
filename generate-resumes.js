const fs = require('fs');
const path = require('path');
const { mdToPdf } = require('md-to-pdf');

async function generate() {
  if (!fs.existsSync('personal-info.json')) {
    throw new Error('personal-info.json not found. Please create it with phoneNumber, emailAddress, and address.');
  }
  const info = JSON.parse(fs.readFileSync('personal-info.json', 'utf-8'));

  const resumes = [
    'luke_magill_resume_full_stack',
    'luke_magill_resume_infrastructure',
  ];

  for (const name of resumes) {
    const mdPath = path.resolve(`${name}.md`);
    if (!fs.existsSync(mdPath)) {
      console.warn(`Skipping ${name} because ${mdPath} does not exist.`);
      continue;
    }
    const source = fs.readFileSync(mdPath, 'utf-8');

    // --- Full version (with private info) ---
    const fullMd = source
      .replace(/\{\{phoneNumber\}\}/g, info.phoneNumber)
      .replace(/\{\{emailAddress\}\}/g, info.emailAddress)
      .replace(/\{\{address\}\}/g, info.address);

    const fullMdPath = path.resolve(`${name}_full.md`);
    fs.writeFileSync(fullMdPath, fullMd);
    console.log(`Written ${fullMdPath}`);

    const fullPdfPath = path.resolve(`${name}_full.pdf`);
    const fullResult = await mdToPdf({ content: fullMd }, { pdf_options: { format: 'Letter' } });
    fs.writeFileSync(fullPdfPath, fullResult.content);
    console.log(`Written ${fullPdfPath}`);

    // --- Contact-free version ---
    const contactFreeMd = source.split('\n').filter(line => {
      const trimmed = line.trim();
      return !(trimmed.includes('Email:') && trimmed.includes('Phone:') && trimmed.includes('Location:'));
    }).join('\n');

    const contactFreePdfPath = path.resolve(`${name}_contact_free.pdf`);
    const contactFreeResult = await mdToPdf({ content: contactFreeMd }, { pdf_options: { format: 'Letter' } });
    fs.writeFileSync(contactFreePdfPath, contactFreeResult.content);
    console.log(`Written ${contactFreePdfPath}`);
  }

  // --- Public site resume (contact-free HTML+PDF) from infrastructure ---
  const infraPath = path.resolve('luke_magill_resume_infrastructure.md');
  const infraSource = fs.readFileSync(infraPath, 'utf-8');
  const publicMd = infraSource.split('\n').filter(line => {
    const trimmed = line.trim();
    return !(trimmed.includes('Email:') && trimmed.includes('Phone:') && trimmed.includes('Location:'));
  }).join('\n');

  const publicHtmlPath = path.resolve('magill-luke.html');
  const htmlResult = await mdToPdf({ content: publicMd }, { as_html: true });
  fs.writeFileSync(publicHtmlPath, htmlResult.content);
  console.log(`Written ${publicHtmlPath}`);

  const publicPdfPath = path.resolve('magill-luke.pdf');
  const publicResult = await mdToPdf({ content: publicMd }, { pdf_options: { format: 'Letter' } });
  fs.writeFileSync(publicPdfPath, publicResult.content);
  console.log(`Written ${publicPdfPath}`);
}

generate().catch(err => {
  console.error(err);
  process.exit(1);
});
