// Dark/Light Mode Toggle
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Load saved theme
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        if (themeToggle) themeToggle.textContent = '☀';
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            if (body.classList.contains('dark-mode')) {
                themeToggle.textContent = '☀';
                localStorage.setItem('theme', 'dark');
            } else {
                themeToggle.textContent = '🌙';
                localStorage.setItem('theme', 'light');
            }
        });
    }

    // Collapsible sections (Concepts page)
    const collapsibles = document.querySelectorAll('.collapsible');
    collapsibles.forEach(btn => {
        btn.addEventListener('click', () => {
            const content = btn.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });

    // TLC Rf Calculator
    const rfForm = document.getElementById('rf-form');
    if (rfForm) {
        rfForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const spot = parseFloat(document.getElementById('spot-distance').value);
            const solvent = parseFloat(document.getElementById('solvent-distance').value);
            const result = document.getElementById('rf-result');

            if (isNaN(spot) || isNaN(solvent) || spot <= 0 || solvent <= 0 || spot >= solvent) {
                result.textContent = "Invalid input. Ensure values are positive and spot < solvent front.";
                return;
            }

            const rf = (spot / solvent).toFixed(3);
            let interpretation = "";

            if (rf < 0.1) interpretation = "Very polar compound (remains near origin).";
            else if (rf > 0.9) interpretation = "Very non-polar compound.";
            else interpretation = "Rf value indicates good separation.";

            result.textContent = `Rf Value = ${rf} — ${interpretation}`;
        });
    }

    // Resolution Calculator
    const resForm = document.getElementById('resolution-form');
    if (resForm) {
        resForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const tr1 = parseFloat(document.getElementById('tr1').value);
            const tr2 = parseFloat(document.getElementById('tr2').value);
            const w1 = parseFloat(document.getElementById('w1').value);
            const w2 = parseFloat(document.getElementById('w2').value);
            const result = document.getElementById('resolution-result');

            if ([tr1, tr2, w1, w2].some(v => isNaN(v) || v <= 0) || tr2 <= tr1) {
                result.textContent = "Invalid input. Ensure tR₂ > tR₁ and all values are positive.";
                return;
            }

            const rs = (2 * (tr2 - tr1)) / (w1 + w2);
            let interpretation = "";

            if (rs > 1.5) interpretation = "Excellent baseline separation.";
            else if (rs > 1.0) interpretation = "Acceptable separation.";
            else interpretation = "Poor separation (peaks overlap).";

            result.textContent = `Resolution (Rs) = ${rs.toFixed(2)} — ${interpretation}`;
        });
    }
});
