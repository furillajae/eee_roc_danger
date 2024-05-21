// script.js
function calculateRisk() {
    const age = parseFloat(document.getElementById('age').value);
    const sex01 = parseFloat(document.getElementById('sex01').value);
    const incm = parseFloat(document.getElementById('incm').value);
    const smk = parseFloat(document.getElementById('smk').value);
    const dm = parseFloat(document.getElementById('dm').value);
    const bp = parseFloat(document.getElementById('bp').value);
    const cholesterol = parseFloat(document.getElementById('cholesterol').value);
    const bmi = parseFloat(document.getElementById('BMI').value);
    const no_toothbrush = parseFloat(document.getElementById('no_toothbrush').value);
    const bite = parseFloat(document.getElementById('bite').value);
    const flos_inter = parseFloat(document.getElementById('flos_inter').value);

    let incm_1 = 0, incm_2 = 0, incm_3 = 0;
    if (incm === 1) incm_1 = 1;
    else if (incm === 2) incm_2 = 1;
    else if (incm === 3) incm_3 = 1;

    let smk_1 = 0, smk_2 = 0;
    if (smk === 1) smk_1 = 1;
    else if (smk === 2) smk_2 = 1;

    let dm_1 = 0, dm_2 = 0;
    if (dm === 1) dm_1 = 1;
    else if (dm === 2) dm_2 = 1;

    const bp_2 = bp === 1 ? 1 : 0;
    const chole_2 = cholesterol === 1 ? 1 : 0;

    const Y = age * 0.048 + sex01 * 0.308 + incm_1 * 0.264 + incm_2 * 0.192 + incm_3 * 0.081 +
              smk_1 * 0.846 + smk_2 * 0.206 + dm_1 * 0.385 + dm_2 * 0.096 + bp_2 * 0.013 +
              chole_2 * 0.092 + bmi * 0.043 + no_toothbrush * 0.001 + bite * 0.479 + flos_inter * 0.228 - 5.206;

    document.getElementById('result').innerText = `계산된 치주염 위험 점수: ${Y.toFixed(2)}`;
}
