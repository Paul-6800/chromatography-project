document.addEventListener('DOMContentLoaded', () => { 
    // TLC Spot Simulator 
    const tlcCtx = document.getElementById('tlcChart'); 
    if (tlcCtx) { 
        new Chart(tlcCtx, { 
            type: 'scatter', 
            data: { 
                datasets: [{ 
                    label: 'Compound A (Rf = 0.25)', 
                    data: [{x: 0, y: 2.5}], 
                    backgroundColor: '#ff6384', 
                    pointRadius: 12 
                }, { 
                    label: 'Compound B (Rf = 0.60)', 
                    data: [{x: 0, y: 6.0}], 
                    backgroundColor: '#36a2eb', 
                    pointRadius: 12 
                }, { 
                    label: 'Compound C (Rf = 0.85)', 
                    data: [{x: 0, y: 8.5}], 
                    backgroundColor: '#ffce56', 
                    pointRadius: 12 
                }, { 
                    label: 'Solvent Front', 
                    data: [{x: -1, y: 10}, {x: 1, y: 10}], 
                    borderColor: '#999', 
                    borderWidth: 2, 
                    type: 'line', 
                    pointRadius: 0 
                }] 
            }, 
            options: { 
                responsive: true, 
                plugins: { 
                    title: { display: true, text: 'TLC Plate Simulation (Distance in cm)' } 
                }, 
                scales: { 
                    x: { display: false, min: -2, max: 2 }, 
                    y: { title: { display: true, text: 'Distance from Origin (cm)' }, min: 0, max: 11 } 
                } 
            } 
        }); 
    } 
 
    // HPLC Chromatogram 
    const hplcCtx = document.getElementById('hplcChart'); 
    if (hplcCtx) { 
        new Chart(hplcCtx, { 
            type: 'line', 
            data: { 
                labels: [0, 2, 4, 6, 8, 10, 12, 14, 16], 
                datasets: [{ 
                    label: 'Peak 1 (Caffeine)', 
                    data: [0, 0, 0, 80, 20, 0, 0, 0, 0], 
                    borderColor: '#ff6384', 
                    tension: 0.4, 
                    fill: false 
                }, { 
                    label: 'Peak 2 (Aspirin)', 
                    data: [0, 0, 0, 0, 0, 100, 30, 0, 0], 
                    borderColor: '#36a2eb', 
                    tension: 0.4 
                }, { 
                    label: 'Peak 3 (Unknown)', 
                    data: [0, 0, 60, 10, 0, 0, 0, 70, 10], 
                    borderColor: '#ffce56', 
                    tension: 0.4 
                }] 
            }, 
            options: { 
                responsive: true, 
                plugins: { title: { display: true, text: 'HPLC Chromatogram Example' } }, 
                scales: { 
                    x: { title: { display: true, text: 'Retention Time (min)' } }, 
                    y: { title: { display: true, text: 'Detector Signal' } } 
                } 
            } 
        }); 
    } 
 
    // GC Chromatogram 
    const gcCtx = document.getElementById('gcChart'); 
    if (gcCtx) { 
        new Chart(gcCtx, { 
            type: 'line', 
            data: { 
                labels: Array.from({length: 20}, (_, i) => i), 
                datasets: [{ 
                    label: 'Methane', 
                    data: [0,0,80,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
                    borderColor: '#4bc0c0', 
                    tension: 0.3 
                }, { 
                    label: 'Ethanol', 
                    data: [0,0,0,0,0,0,0,100,20,0,0,0,0,0,0,0,0,0,0,0], 
                    borderColor: '#ff9f40', 
                    tension: 0.3 
                }, { 
                    label: 'Acetone', 
                    data: [0,0,0,0,0,0,0,0,0,0,0,0,90,15,0,0,0,0,0,0], 
                    borderColor: '#9966ff', 
                    tension: 0.3 
                }] 
            }, 
            options: { 
                responsive: true, 
                plugins: { title: { display: true, text: 'Gas Chromatography (GC) Example' } }, 
                scales: { 
                    x: { title: { display: true, text: 'Time (min)' } }, 
                    y: { title: { display: true, text: 'FID Signal' } } 
                } 
            } 
        }); 
    } 
 
    // Calibration Curve 
    const calCtx = document.getElementById('calibrationChart'); 
    if (calCtx) { 
        new Chart(calCtx, { 
            type: 'line', 
            data: { 
                labels: [0, 10, 25, 50, 100], 
                datasets: [{ 
                    label: 'Peak Area vs Concentration', 
                    data: [0, 120, 300, 600, 1200], 
                    borderColor: '#00cc99', 
                    backgroundColor: 'rgba(0,204,153,0.2)', 
                    fill: true, 
                    tension: 0.1 
                }] 
            }, 
            options: { 
                responsive: true, 
                plugins: { title: { display: true, text: 'Calibration Curve (Quantitative Analysis)' } }, 
                scales: { 
                    x: { title: { display: true, text: 'Concentration (ppm)' } }, 
                    y: { title: { display: true, text: 'Peak Area' } } 
                } 
            } 
        }); 
    } 
}); 