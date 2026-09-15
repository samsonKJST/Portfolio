import { readFile, mkdir, writeFile } from 'node:fs/promises'
import { PDFParse } from 'pdf-parse'

const source = new URL('../public/CV_KOUAME_JUDE_SAMSON_TANOH.pdf', import.meta.url)
const destination = new URL('../netlify/data/cv-content.js', import.meta.url)
const pdf = new Uint8Array(await readFile(source))
const parser = new PDFParse({ data: pdf })

try {
  const result = await parser.getText()
  const text = result.text.replace(/\u0000/g, '').replace(/\r\n/g, '\n').trim()
  if (!text) throw new Error('No text could be extracted from the CV PDF')

  await mkdir(new URL('../netlify/data/', import.meta.url), { recursive: true })
  await writeFile(destination, `// Generated from public/CV_KOUAME_JUDE_SAMSON_TANOH.pdf. Do not edit manually.\nexport const cvContext = ${JSON.stringify(text)}\n`, 'utf8')
  console.info(`[extract-cv] Extracted ${text.length} characters from the CV.`)
} finally {
  await parser.destroy()
}
