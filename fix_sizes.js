const fs = require('fs');

let css = fs.readFileSync('styles.css', 'utf8');

// Revert Theme Variables
css = css.replace(/--bg: #f7f7f6;/g, '--bg: #060609;');
css = css.replace(/--bg2: #e8eae9;/g, '--bg2: #0D0D14;');
css = css.replace(/--card: #ffffff;/g, '--card: #0F0F18;');
css = css.replace(/--card2: #f9fafb;/g, '--card2: #14141F;');
css = css.replace(/--border: rgba\(0,0,0,0\.1\);/g, '--border: rgba(255,255,255,0.06);');
css = css.replace(/--border-em: rgba\(16,185,129,0\.4\);/g, '--border-em: rgba(16,185,129,0.25);');
css = css.replace(/--text: #333333;/g, '--text: #D1D5DB;');
css = css.replace(/--muted: #666666;/g, '--muted: #4B5563;');

css = css.replace(/::selection \{ background: rgba\(16,185,129,0\.25\); color: #111; \}/g, '::selection { background: rgba(16,185,129,0.25); color: #fff; }');
css = css.replace(/background: rgba\(247,247,246,0\.72\);/g, 'background: rgba(6,6,9,0.72);');

// Color Reversions
css = css.replace(/\.nav-link:hover \{ color: #111; \}/g, '.nav-link:hover { color: #fff; }');
css = css.replace(/\.hero-headline \{\n  font-size: clamp\(3rem, 7\.5vw, 6rem\);\n  font-weight: 900;\n  letter-spacing: -0\.04em;\n  line-height: 1\.04;\n  color: #111;\n\}/g, '.hero-headline {\n  font-size: clamp(3rem, 7.5vw, 6rem);\n  font-weight: 900;\n  letter-spacing: -0.04em;\n  line-height: 1.04;\n  color: #fff;\n}');
css = css.replace(/\.btn-ghost:hover \{\n  border-color: rgba\(16,185,129,0\.4\);\n  color: #111;\n  background: rgba\(16,185,129,0\.06\);\n\}/g, '.btn-ghost:hover {\n  border-color: rgba(16,185,129,0.4);\n  color: #fff;\n  background: rgba(16,185,129,0.06);\n}');
css = css.replace(/\.section-heading \{\n  font-size: clamp\(1\.9rem, 4vw, 3rem\);\n  font-weight: 800;\n  color: #111;\n  letter-spacing: -0\.03em;\n  line-height: 1\.12;\n\}/g, '.section-heading {\n  font-size: clamp(1.9rem, 4vw, 3rem);\n  font-weight: 800;\n  color: #fff;\n  letter-spacing: -0.03em;\n  line-height: 1.12;\n}');
css = css.replace(/\.form-field \{\n  width: 100%;\n  background: rgba\(0,0,0,0\.03\);\n  border: 1px solid var\(--border\);\n  border-radius: 0\.875rem;\n  padding: 0\.875rem 1\.125rem;\n  color: #111;/g, '.form-field {\n  width: 100%;\n  background: rgba(255,255,255,0.03);\n  border: 1px solid var(--border);\n  border-radius: 0.875rem;\n  padding: 0.875rem 1.125rem;\n  color: #fff;');

// Increase base font size by default to scale all rem units uniformly by 115%
css = css.replace(/html \{ scroll-behavior: smooth; \}/g, 'html { scroll-behavior: smooth; font-size: 110%; }');

fs.writeFileSync('styles.css', css);
console.log('Fixed css theme and sized up');
