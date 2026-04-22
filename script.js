const i18n = {
    zh: {
        title: "高端利率计算器 | Interest Calculator",
        h1: "财富增长模拟器",
        p: "专业的单利与复利计算工具，洞见时间的力量。",
        principal: "起始本金 (P)",
        rate: "年化利率 (r)",
        years: "投资期限 (t)",
        interestType: "计息方式",
        frequency: "复利频率 (n)",
        simple: "单利",
        compound: "复利",
        annually: "每年 (Annually)",
        semiAnnually: "每半年 (Semi-annually)",
        quarterly: "每季度 (Quarterly)",
        monthly: "每月 (Monthly)",
        daily: "每天 (Daily)",
        amount: "期末总金额",
        interest: "累计赚取利息",
        yearPrefix: "第 ",
        yearSuffix: " 年",
        chartPrincipal: "本金 (Principal)",
        chartInterest: "累计利息 (Interest)",
        currencyIcon: "¥",
        yearIcon: "年",
        currency: "CNY"
    },
    en: {
        title: "Premium Interest Calculator",
        h1: "Wealth Growth Simulator",
        p: "Professional simple and compound interest calculator. Discover the power of time.",
        principal: "Initial Principal (P)",
        rate: "Annual Rate (r)",
        years: "Investment Duration (t)",
        interestType: "Interest Type",
        frequency: "Compound Frequency (n)",
        simple: "Simple",
        compound: "Compound",
        annually: "Annually",
        semiAnnually: "Semi-annually",
        quarterly: "Quarterly",
        monthly: "Monthly",
        daily: "Daily",
        amount: "Total Amount",
        interest: "Total Interest Earned",
        yearPrefix: "Year ",
        yearSuffix: "",
        chartPrincipal: "Principal",
        chartInterest: "Accumulated Interest",
        currencyIcon: "$",
        yearIcon: "Y",
        currency: "USD"
    },
    ja: {
        title: "プレミアム金利計算機",
        h1: "資産形成シミュレーター",
        p: "プロフェッショナルな単利・複利計算ツール。時間の力を発見しましょう。",
        principal: "初期元本 (P)",
        rate: "年利 (r)",
        years: "投資期間 (t)",
        interestType: "金利タイプ",
        frequency: "複利頻度 (n)",
        simple: "単利",
        compound: "複利",
        annually: "年次",
        semiAnnually: "半年ごと",
        quarterly: "四半期ごと",
        monthly: "月次",
        daily: "日次",
        amount: "期末総額",
        interest: "累計受取利息",
        yearPrefix: "第 ",
        yearSuffix: " 年",
        chartPrincipal: "元本",
        chartInterest: "累計利息",
        currencyIcon: "¥",
        yearIcon: "年",
        currency: "JPY"
    },
    ko: {
        title: "프리미엄 이자 계산기",
        h1: "자산 성장 시뮬레이터",
        p: "전문적인 단리 및 복리 계산 도구. 시간의 힘을 확인하세요.",
        principal: "초기 원금 (P)",
        rate: "연 이자율 (r)",
        years: "투자 기간 (t)",
        interestType: "이자 방식",
        frequency: "복리 주기 (n)",
        simple: "단리",
        compound: "복리",
        annually: "매년",
        semiAnnually: "반년마다",
        quarterly: "분기마다",
        monthly: "매월",
        daily: "매일",
        amount: "만기 총액",
        interest: "누적 이자 수익",
        yearPrefix: "",
        yearSuffix: "년차",
        chartPrincipal: "원금",
        chartInterest: "누적 이자",
        currencyIcon: "₩",
        yearIcon: "년",
        currency: "KRW"
    },
    es: {
        title: "Calculadora de Interés Premium",
        h1: "Simulador de Crecimiento de Riqueza",
        p: "Herramienta profesional de interés simple y compuesto. Descubre el poder del tiempo.",
        principal: "Capital Inicial (P)",
        rate: "Tasa Anual (r)",
        years: "Duración de Inversión (t)",
        interestType: "Tipo de Interés",
        frequency: "Frecuencia de Capitalización (n)",
        simple: "Simple",
        compound: "Compuesto",
        annually: "Anual",
        semiAnnually: "Semestral",
        quarterly: "Trimestral",
        monthly: "Mensual",
        daily: "Diario",
        amount: "Monto Total",
        interest: "Interés Total Ganado",
        yearPrefix: "Año ",
        yearSuffix: "",
        chartPrincipal: "Capital",
        chartInterest: "Interés Acumulado",
        currencyIcon: "€",
        yearIcon: "A",
        currency: "EUR"
    }
};

let currentLang = 'zh';
let currencyFormatter;

function updateFormatter() {
    currencyFormatter = new Intl.NumberFormat(currentLang === 'zh' ? 'zh-CN' : (currentLang === 'en' ? 'en-US' : (currentLang === 'ja' ? 'ja-JP' : (currentLang === 'ko' ? 'ko-KR' : 'es-ES'))), {
        style: 'currency',
        currency: i18n[currentLang].currency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}
updateFormatter();

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const principalInput = document.getElementById('principal');
    const rateInput = document.getElementById('rate');
    const rateSlider = document.getElementById('rateSlider');
    const yearsInput = document.getElementById('years');
    const yearSlider = document.getElementById('yearSlider');
    const frequencyGroup = document.getElementById('frequencyGroup');
    const frequencySelect = document.getElementById('frequency');
    const totalAmountEl = document.getElementById('totalAmount');
    const totalInterestEl = document.getElementById('totalInterest');
    const radioInputs = document.querySelectorAll('input[name="interestType"]');
    const langSwitch = document.getElementById('langSwitch');
    
    // I18N apply
    function applyTranslations() {
        const t = i18n[currentLang];
        document.getElementById('i18n-title').textContent = t.title;
        document.getElementById('i18n-h1').textContent = t.h1;
        document.getElementById('i18n-p').textContent = t.p;
        document.getElementById('i18n-principal').textContent = t.principal;
        document.getElementById('i18n-rate').textContent = t.rate;
        document.getElementById('i18n-years').textContent = t.years;
        document.getElementById('i18n-interestType').textContent = t.interestType;
        document.getElementById('i18n-frequency').textContent = t.frequency;
        document.getElementById('i18n-simple').textContent = t.simple;
        document.getElementById('i18n-compound').textContent = t.compound;
        document.getElementById('i18n-annually').textContent = t.annually;
        document.getElementById('i18n-semiAnnually').textContent = t.semiAnnually;
        document.getElementById('i18n-quarterly').textContent = t.quarterly;
        document.getElementById('i18n-monthly').textContent = t.monthly;
        document.getElementById('i18n-daily').textContent = t.daily;
        document.getElementById('i18n-amount').textContent = t.amount;
        document.getElementById('i18n-interest').textContent = t.interest;
        
        document.getElementById('currency-icon-1').textContent = t.currencyIcon;
        document.getElementById('i18n-yearIcon').textContent = t.yearIcon;

        updateFormatter();
        
        if (growthChart) {
            growthChart.data.datasets[0].label = t.chartPrincipal;
            growthChart.data.datasets[1].label = t.chartInterest;
        }

        calculate();
    }

    langSwitch.addEventListener('change', (e) => {
        currentLang = e.target.value;
        applyTranslations();
    });

    // Sync Sliders and Inputs
    function syncInputSlider(inputEl, sliderEl) {
        inputEl.addEventListener('input', () => {
            sliderEl.value = inputEl.value;
            calculate();
        });
        sliderEl.addEventListener('input', () => {
            inputEl.value = sliderEl.value;
            calculate();
        });
    }

    syncInputSlider(rateInput, rateSlider);
    syncInputSlider(yearsInput, yearSlider);
    principalInput.addEventListener('input', calculate);
    frequencySelect.addEventListener('change', calculate);

    // Interest Type Toggle (Hide/Show Compounding Frequency)
    radioInputs.forEach(radio => {
        radio.addEventListener('change', (e) => {
            if (e.target.value === 'simple') {
                frequencyGroup.classList.add('hidden');
            } else {
                frequencyGroup.classList.remove('hidden');
            }
            calculate();
        });
    });

    // Chart Instance
    let growthChart = null;

    function calculate() {
        const p = parseFloat(principalInput.value) || 0;
        const r = parseFloat(rateInput.value) / 100 || 0;
        const t = parseInt(yearsInput.value) || 0;
        const isCompound = document.querySelector('input[name="interestType"]:checked').value === 'compound';
        const n = parseInt(frequencySelect.value) || 1;
        const langPack = i18n[currentLang];

        let totalAmount = 0;
        // Data arrays for Chart
        let labels = [];
        let principalData = [];
        let interestData = [];

        // Build details year by year for the chart
        for (let year = 0; year <= t; year++) {
            labels.push(`${langPack.yearPrefix}${year}${langPack.yearSuffix}`);
            let accumulatedAmount = 0;

            if (year === 0) {
                accumulatedAmount = p;
            } else {
                if (isCompound) {
                    // Compound formulas: A = P(1 + r/n)^(n*t)
                    accumulatedAmount = p * Math.pow((1 + r / n), n * year);
                } else {
                    // Simple formulas: A = P(1 + rt)
                    accumulatedAmount = p * (1 + r * year);
                }
            }

            principalData.push(p);
            interestData.push(Math.max(0, accumulatedAmount - p));
            
            if (year === t) {
                totalAmount = accumulatedAmount;
            }
        }

        const totalInterest = totalAmount - p;

        // Update DOM
        totalAmountEl.textContent = currencyFormatter.format(totalAmount);
        totalInterestEl.textContent = currencyFormatter.format(totalInterest);

        // Update Chart
        updateChart(labels, principalData, interestData);
    }

    function initChart() {
        const ctx = document.getElementById('growthChart').getContext('2d');
        const langPack = i18n[currentLang];

        Chart.defaults.color = '#9a9cad';
        Chart.defaults.font.family = "'Outfit', sans-serif";

        growthChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [],
                datasets: [
                    {
                        label: langPack.chartPrincipal,
                        data: [],
                        backgroundColor: 'rgba(123, 97, 255, 0.7)',
                        borderWidth: 0,
                    },
                    {
                        label: langPack.chartInterest,
                        data: [],
                        backgroundColor: 'rgba(0, 210, 255, 0.7)',
                        borderWidth: 0,
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        stacked: true,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.05)',
                            drawBorder: false,
                        }
                    },
                    y: {
                        stacked: true,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.05)',
                            drawBorder: false,
                        },
                        ticks: {
                            callback: function(value) {
                                if (currentLang === 'zh' || currentLang === 'ja') {
                                    if (value >= 10000) {
                                        return (value / 10000) + '万';
                                    }
                                } else {
                                    if (value >= 1000) {
                                        return (value / 1000) + 'k';
                                    }
                                }
                                return value;
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            usePointStyle: true,
                            padding: 20
                        }
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                        backgroundColor: 'rgba(30, 33, 48, 0.9)',
                        titleColor: '#fff',
                        bodyColor: '#e2e8f0',
                        borderColor: 'rgba(255,255,255,0.1)',
                        borderWidth: 1,
                        padding: 12,
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                if (context.parsed.y !== null) {
                                    label += currencyFormatter.format(context.parsed.y);
                                }
                                return label;
                            }
                        }
                    }
                },
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                }
            }
        });
    }

    function updateChart(labels, principalData, interestData) {
        if (!growthChart) {
            initChart();
        }
        growthChart.data.labels = labels;
        growthChart.data.datasets[0].data = principalData;
        growthChart.data.datasets[1].data = interestData;
        growthChart.update();
    }

    // Initial calculation on load
    applyTranslations();
});
