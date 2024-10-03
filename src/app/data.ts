export const categories = [
    'Gender Equality Goals',
    'Climate Action Goals',
    'Gender Equality in Management Positions',
    'Gender Discrimination',
    'Parliament Representation',
    'Marriage and Family',
    'Free Care and Housework',
    'Agricultural Lands',
    'Mobile Phone Ownership',
    'Allocating Resources to Gender Equality',
    'Work',
    'Reproductive Health',
    'Maternity Leave',
    'Violence Against',
    'Natural Disasters',
    'National Disaster Risk Reduction Strategies',
    'Greenhouse Gas Emissions and Temperature Increases',
    'Progress in Climate Change Education',
    'Climate Finance',
];

export const categoryDescriptions: Record<string, string> = {
    'Gender Equality Goals': 'This category encompasses the specific targets set for achieving gender equality, including legislative, social, and economic measures designed to eliminate gender disparities in various sectors and promote equal opportunities for all genders.',
    'Climate Action Goals': 'This category includes the objectives and commitments made by nations and organizations to combat climate change, focusing on reducing greenhouse gas emissions, enhancing resilience to climate impacts, and fostering sustainable practices to protect the environment.',
    'Gender Equality in Management Positions': 'This category examines the representation of different genders in management roles across various industries. It highlights the challenges and progress made towards achieving gender parity in leadership positions, emphasizing the importance of diversity for organizational success.',
    'Gender Discrimination': 'This category addresses the various forms of gender discrimination that individuals face in society, including unequal treatment in the workplace, educational institutions, and social settings. It seeks to identify patterns of discrimination and promote strategies to combat gender bias.',
    'Parliament Representation': 'This category provides insights into the representation of women and marginalized genders in parliamentary bodies. It assesses progress over time and examines the impact of representation on policy-making and gender-sensitive governance.',
    'Marriage and Family': 'This category explores the dynamics of marriage and family structures, focusing on issues such as marital age, family responsibilities, and the socio-economic factors influencing family formation and stability. It seeks to understand how these dynamics affect gender roles and equality.',
    'Free Care and Housework': 'This category investigates the distribution of unpaid care work and domestic responsibilities between genders. It highlights the implications of these dynamics on economic participation and well-being, advocating for equitable sharing of care responsibilities.',
    'Agricultural Lands': 'This category analyzes the access and ownership of agricultural lands among different genders. It discusses the barriers to land ownership and the implications of land rights on food security and economic empowerment.',
    'Mobile Phone Ownership': 'This category examines the disparities in mobile phone ownership between genders. It evaluates how access to mobile technology can influence economic opportunities, education, and social inclusion for marginalized groups.',
    'Allocating Resources to Gender Equality': 'This category focuses on the allocation of financial and social resources aimed at promoting gender equality. It evaluates the effectiveness of these resources in addressing gender disparities and enhancing womens empowerment.',
    'Work': 'This category addresses issues related to gender equality in the workforce, including wage gaps, employment opportunities, and workplace policies. It emphasizes the need for equitable work environments that support all genders.',
    'Reproductive Health': 'This category covers the access to reproductive health services and education. It examines how reproductive health impacts gender equality and the challenges faced by individuals in accessing necessary health care.',
    'Maternity Leave': 'This category evaluates the policies and practices surrounding maternity leave across different regions and sectors. It emphasizes the importance of maternity leave for womens health, economic stability, and family well-being.',
    'Violence Against': 'This category addresses the various forms of violence faced by individuals based on gender. It highlights the prevalence of gender-based violence, its consequences, and the strategies required for prevention and support.',
    'Natural Disasters': 'This category examines the impact of natural disasters on different genders, focusing on the vulnerabilities and resilience strategies adopted by communities. It emphasizes the need for gender-sensitive disaster management and recovery efforts.',
    'National Disaster Risk Reduction Strategies': 'This category analyzes the strategies implemented by governments to reduce disaster risks and enhance preparedness. It highlights the importance of integrating gender perspectives into national disaster planning and response efforts.',
    'Greenhouse Gas Emissions and Temperature Increases': 'This category investigates the relationship between greenhouse gas emissions and global temperature changes. It discusses the implications of these changes for climate policy and gender equality.',
    'Progress in Climate Change Education': 'This category assesses the advancements in climate change education and awareness. It highlights the role of education in empowering individuals to take action against climate change and promote sustainable practices.',
    'Climate Finance': 'This category explores the funding mechanisms available for climate-related projects and initiatives. It evaluates how climate finance is allocated and its impact on both climate action and gender equality.',
};

// Gender Equality Goals

export const progressTowardsGoals = {
    title: 'Progress Towards Goals',
    description: 'This dataset outlines the progress towards specified goals, including overall progress, equitable progress, stagnation or regression, and data insufficiency for the years 2021, 2023, and 2024.',
    category: 'Gender Equality Goals',
    data: [
        {
            "Year": 2024,
            "Progress Towards Goals (%)": 20,
            "Equitable Progress (%)": 60,
            "Stagnation or Regression (%)": 20,
            "Insufficient Data": "-"
        },
        {
            "Year": 2023,
            "Progress Towards Goals (%)": 10,
            "Equitable Progress (%)": 55,
            "Stagnation or Regression (%)": 0,
            "Insufficient Data (%)": 35
        },
        {
            "Year": 2021,
            "Progress Towards Goals (%)": 71, // General Success
            "Equitable Progress (%)": 29, // Success Gap
            "Stagnation or Regression": "-",
            "Insufficient Data": "-"
        },
    ]
}

export const genderEqualityRegionalDifferences = {
    title: 'Gender Equality Regional Differences',
    description: 'This dataset outlines the success and gaps in gender equality across different regions, represented in percentages.',
    category: 'Gender Equality Goals',
    data: [
        {
            "Region": "Avustralya ve Yeni Zelanda",
            "Success (%)": 75,
            "Gap (%)": 25,
        },
        {
            "Region": "Orta ve Güney Asya",
            "Success (%)": 68,
            "Gap (%)": 32,
        },
        {
            "Region": "Doğu ve Güneydoğu Asya",
            "Success (%)": 61,
            "Gap (%)": 39,
        },
        {
            "Region": "Avrupa ve Kuzey Amerika",
            "Success (%)": 80,
            "Gap (%)": 20,
        },
        {
            "Region": "Latin Amerika ve Karayipler",
            "Success (%)": 71,
            "Gap (%)": 29,
        },
        {
            "Region": "Kuzey Afrika ve Batı Asya",
            "Success (%)": 54,
            "Gap (%)": 46,
        },
        {
            "Region": "Sahra Altı Afrika",
            "Success (%)": 65,
            "Gap (%)": 35,
        },
    ]
}

// Climate Action Goals

export const climateActionGoals = {
    title: 'Climate Action Goals',
    description: 'This dataset outlines the progress towards climate action goals, including overall progress, equitable progress, stagnation or regression, and insufficient data for the years 2023 and 2024.',
    category: 'Climate Action Goals',
    data: [
        {
            "Year": 2024,
            "Progress Towards Goals": "-",
            "Equitable Progress (%)": 65,
            "Stagnation or Regression (%)": 35,
            "Insufficient Data": "-"
        },
        {
            "Year": 2023,
            "Progress Towards Goals (%)": 0,
            "Equitable Progress (%)": 60,
            "Stagnation or Regression (%)": 20,
            "Insufficient Data (%)": 20
        },
    ]
}

// Gender Equality in Management Positions

export const representationOfWomenInManagerialPositionsByRegion = {
    title: 'Representation of Women in Managerial Positions by Region',
    description: 'This dataset presents the representation rates of women in managerial positions across different regions of the world. It highlights significant disparities in female leadership, with regions such as Sub-Saharan Africa, Latin America and the Caribbean, and Europe and North America showing higher representation rates, while North Africa, West Asia, and South Asia exhibit much lower rates. The data provides valuable insights into regional gender gaps in management roles, helping to inform policy discussions on promoting gender equality and empowering women in leadership positions globally.',
    category: 'Gender Equality in Management Positions',
    data: [
        {
            "Region": "North Africa",
            "Representation Rate": 7.9
        },
        {
            "Region": "West Asia",
            "Representation Rate": 11.9
        },
        {
            "Region": "South Asia",
            "Representation Rate": 12.7
        },
        {
            "Region": "North Africa and West Asia",
            "Representation Rate": 11.82
        },
        {
            "Region": "Sub-Saharan Africa",
            "Representation Rate": 38.2
        },
        {
            "Region": "East and Southeast Asia",
            "Representation Rate": 30.72
        },
        {
            "Region": "Oceania (excluding AUS and NZ)",
            "Representation Rate": 27.43
        },
        {
            "Region": "AUS and NZ",
            "Representation Rate": 37.39
        },
        {
            "Region": "Europe and North America",
            "Representation Rate": 37.49
        },
        {
            "Region": "Latin America and the Caribbean",
            "Representation Rate": 38.51
        },
    ]
}

export const timeToAchieveGenderEqualityInManagerialPositionsByYear = {
    title: 'Time to Achieve Gender Equality in Managerial Positions by Year',
    description: 'This dataset tracks the estimated number of years required to achieve gender equality in managerial positions, with data spanning from 2021 to 2024. Despite consistency in the estimated time from 2021 to 2023, a significant increase is observed in 2024, where the time to achieve gender parity rises from 140 years to 176 years. These projections reflect global challenges in closing the gender gap in leadership roles, underscoring the need for accelerated efforts and policies to promote gender equality in management positions.',
    category: 'Gender Equality in Management Positions',
    data: [
        {
            'Year': 2021,
            'Time to Achieve (Year)': 140,
        },
        {
            'Year': 2022,
            'Time to Achieve (Year)': 140,
        },
        {
            'Year': 2023,
            'Time to Achieve (Year)': 140,
        },
        {
            'Year': 2024,
            'Time to Achieve (Year)': 176,
        },
    ],
}

export const increaseInRepresentationRatesOfWomenInExecutivePositionsFrom2015To2024 = {
    title: 'Increase in Representation Rates of Women in Executive Positions from 2015 to 2024',
    description: 'This dataset illustrates the annual increase in the representation rates of women in executive positions from 2015 to 2024. The data tracks the percentage of female representation in leadership roles and the corresponding rate of increase or decrease each year. While there have been incremental gains in female representation in certain years, such as 2017 and 2019, there are also periods of slight decline, particularly in 2018, 2021, and 2023. This dataset provides insights into the fluctuating progress towards gender equality in executive roles, emphasizing the need for sustained efforts to promote female leadership in high-level positions.',
    category: 'Gender Equality in Management Positions',
    data: [
        {
            "Year": 2000,
            "Representation Rate": 25.3,
            "Rate of Increase": '-',
        },
        {
            "Year": 2015,
            "Representation Rate": 26.0,
            "Rate of Increase": 0.7,
        },
        {
            "Year": 2017,
            "Representation Rate": 27.15,
            "Rate of Increase": 1.15
        },
        {
            "Year": 2018,
            "Representation Rate": 27.0,
            "Rate of Increase": -0.15,
        },
        {
            "Year": 2019,
            "Representation Rate": 28.0,
            "Rate of Increase": 1,
        },
        {
            "Year": 2020,
            "Representation Rate": 28.3,
            "Rate of Increase": 0.3,
        },
        {
            "Year": 2021,
            "Representation Rate": 28.2,
            "Rate of Increase": -0.1,
        },
        {
            "Year": 2022,
            "Representation Rate": 28.3,
            "Rate of Increase": 0.1,
        },
        {
            "Year": 2023,
            "Representation Rate": 28.2,
            "Rate of Increase": -0.1,
        },
    ],
}

export const globalLaborForceParticipationAndFemaleRepresentationInManagerialPositionsComparisonByYear = {
    title: 'Global Labor Force Participation and Female Representation in Managerial Positions Comparison by Year',
    description: 'This dataset provides a year-by-year comparison of global female labor force participation and female representation in managerial positions from 2018 to 2023. It highlights the overall participation rate of women in the global workforce alongside their representation in leadership roles. While global workforce participation shows a gradual increase over the years, the representation of women in managerial positions fluctuates slightly, indicating that higher participation in the labor force does not always correlate with proportional increases in leadership representation. This comparison underscores the ongoing challenge of closing the gender gap in managerial positions despite a steady presence of women in the global labor market.',
    category: 'Gender Equality in Management Positions',
    data: [
        {
            "Year": 2018,
            "Global Workforce Participation": 39.0,
            "Representation Rate": 27.0,
        },
        {
            "Year": 2019,
            "Global Workforce Participation": 39.0,
            "Representation Rate": 28.0,
        },
        {
            "Year": 2020,
            "Global Workforce Participation": 39.0,
            "Representation Rate": 28.3,
        },
        {
            "Year": 2021,
            "Global Workforce Participation": 39.3,
            "Representation Rate": 28.2,
        },
        {
            "Year": 2022,
            "Global Workforce Participation": 39.4,
            "Representation Rate": 28.3,
        },
        {
            "Year": 2023,
            "Global Workforce Participation": 40,
            "Representation Rate": 28.2,
        },
    ]
}

export const theEffectOfThePandemicOnTheRepresentationOfWomenInTheWorkforceFrom2020to2022 = {
    title: 'The Effect of the Pandemic on the Representation of Women in the Workforce from 2020 to 2022',
    description: 'This dataset examines the impact of the COVID-19 pandemic on the representation of women in the global workforce from 2020 to 2022. It captures both the percentage of women in the workforce and their disproportionate share of workforce losses due to the pandemic. While data for 2021 remains incomplete, the increase in workforce losses for women in 2022, when compared to their overall share in the workforce, highlights the disproportionate effects the pandemic had on female employment. This dataset emphasizes the long-term challenges women face in recovering from pandemic-induced job losses, despite gradual gains in workforce representation.',
    category: 'Gender Equality in Management Positions',
    data: [
        {
            "Year": 2020,
            "Women's Share in the Workforce": 39,
            "Women's Share in Workforce Losses": '-',
        },
        {
            "Year": 2021,
            "Women's Share in the Workforce": '-',
            "Women's Share in Workforce Losses": '-',
        },
        {
            "Year": 2022,
            "Women's Share in the Workforce": 39.4,
            "Women's Share in Workforce Losses": 45,
        },
    ]
}

export const countriesWithAndWithoutParliamentaryQuotasForWomen2024 = {
    title: 'Countries with and without Parliamentary Quotas for Women 2024',
    description: 'This dataset provides a snapshot of the global distribution of countries with and without parliamentary quotas for women in 2024. It shows that 50% of countries have implemented gender quotas to ensure female representation in parliaments, while the remaining 50% have no such measures in place. Parliamentary quotas are an important mechanism for promoting gender equality in political representation, and this dataset highlights the global divide in adopting these practices. The data serves as a basis for analyzing the impact of quotas on female political participation and the ongoing challenges in achieving gender parity in legislative bodies.',
    category: 'Gender Equality in Management Positions',
    data : [
         {
            "Year": 2024,
            "Countries with parliamentary quotas for women (%)": 50,
            "Countries without parliamentary quotas for women (%)": 50,
        },
    ],
}

// Gender Discrimination

export const countriesThatBanDiscriminationAgainstWomenByYear = {
    title: 'Countries That Ban Discrimination Against Women by Year',
    description: 'This dataset highlights the percentage of countries that have implemented laws to ban discrimination against women as of 2022. The data shows that 45% of countries globally have enacted legal measures to prohibit gender-based discrimination. While this represents significant progress, it also underscores the fact that more than half of the world\'s nations have yet to implement such legislation. The dataset serves as a key indicator for evaluating global advancements in women\'s rights and gender equality, emphasizing the need for continued efforts to promote legal protections for women worldwide.',
    category: 'Gender Discrimination',
    data: [
        {
            "Year": 2022,
            "Rate of Countries That Ban Discrimination Against Women (%)": 45,
        },
        {
            "Year": 2022,
            "Rate of Countries That Ban Discrimination Against Women (%)": 45,
        },
        {
            "Year": 2022,
            "Rate of Countries That Ban Discrimination Against Women (%)": 45,
        },
    ]
}

export const timeRequiredToCloseLegalProtectionsByYear = {
    title: 'Time Required to Close Legal Protections by Year',
    description: 'This dataset tracks the estimated number of years required to close the gap in legal protections for women globally from 2021 to 2023. The consistent estimate of 286 years over this period highlights the slow pace of progress in achieving comprehensive legal protections for women. The data underscores the significant legal barriers that still exist in many countries, and emphasizes the urgent need for policy reforms and global cooperation to accelerate the process of ensuring gender equality in legal frameworks. This dataset serves as a stark reminder of the long-term challenges in addressing legal discrimination against women.',
    category: 'Gender Discrimination',
    data: [
        {
            "Year": 2021,
            "Time Required to Close Legal Protections (Years)": 286,
        },
        {
            "Year": 2022,
            "Time Required to Close Legal Protections (Years)": 286,
        },
        {
            "Year": 2023,
            "Time Required to Close Legal Protections (Years)": 286,
        },
    ]
}

export const regionalAchievementAndAchievementGapEmploymentAndEconomicRights2021 = {
    title: 'Regional Achievement and Achievement Gap (Employment and Economic Rights) 2021',
    description: 'This dataset presents the regional achievements and achievement gaps in employment and economic rights for women across various global regions in 2021. The \'Achievement\' percentage reflects the level of progress made in ensuring women\'s employment and economic rights, while the \'Achievement Gap\' highlights the remaining disparity in achieving full equality. Regions like Australia and New Zealand, and Europe and North America show high levels of achievement with smaller gaps, whereas regions such as Middle and South Asia and North Africa and West Asia have much larger gaps, indicating significant room for improvement. This data is crucial for understanding regional disparities in women\'s economic rights and for shaping policies to address these gaps.',
    category: 'Gender Discrimination',
    data: [
        {
            "Region": "Australia and New Zealand",
            "Achievement": 95,
            "Achievement Gap": 5,
        },
        {
            "Region": "Middle and South Asia",
            "Achievement": 42,
            "Achievement Gap": 58,
        },
        {
            "Region": "East and Southeast Asia",
            "Achievement": 68,
            "Achievement Gap": 32,
        },
        {
            "Region": "Europe and North America",
            "Achievement": 92,
            "Achievement Gap": 8,
        },
        {
            "Region": "Latin America and the Caribbean",
            "Achievement": 75,
            "Achievement Gap": 25,
        },
        {
            "Region": "North Africa and West Asia",
            "Achievement": 63,
            "Achievement Gap": 37,
        },
        {
            "Region": "Sub-Saharan Africa",
            "Achievement": 66,
            "Achievement Gap": 34,
        },
    ]
}

export const legalProtectionGapsFrom2018To2019 = {
    title: 'Legal Protection Gaps from 2018 to 2019',
    description: 'This dataset highlights the legal protection gaps across various legal areas from 2018 to 2019, with a focus on countries lacking comprehensive legal frameworks. It tracks the percentage of countries with gaps in areas such as violence against women, employment and economic rights, and marriage and family. Notably, there is a significant increase in the percentage of countries with gaps in legal protections related to violence against women and economic rights between 2018 and 2019. The data underscores persistent legal challenges and the slow pace of progress in closing these gaps, emphasizing the need for stronger legal protections in key areas affecting women\'s rights.',
    category: 'Gender Discrimination',
    data: [
        {
            "Legal Area": "General Legal Framework",
            "Rate of Countries with Gaps (%) (2018)": 33,
            "Rate of Countries with Gaps (%) (2019)": '-',
        },
        {
            "Legal Area": "Violence Against Women",
            "Rate of Countries with Gaps (%) (2018)": 25,
            "Rate of Countries with Gaps (%) (2019)": 68,
        },
        {
            "Legal Area": "Employment and Economic Rights",
            "Rate of Countries with Gaps (%) (2018)": 29,
            "Rate of Countries with Gaps (%) (2019)": 58,
        },
        {
            "Legal Area": "Marriage and Family",
            "Rate of Countries with Gaps (%) (2018)": 24,
            "Rate of Countries with Gaps (%) (2019)": '-',
        },
    ]
}

export const countriesWithLackOfLawsDefiningRapeBasedOnConsentByYear = {
    title: 'Countries with Lack of Laws Defining Rape Based on Consent by Year',
    description: 'This dataset tracks the percentage of countries that lack laws defining rape based on consent from 2018 to 2023. It highlights a gradual decrease in the number of countries without such laws, from 68% in 2018 to 60% in 2023. Despite this improvement, the data shows that a significant proportion of countries still do not define rape based on the lack of consent, leaving a critical gap in legal protections for survivors. This dataset underscores the ongoing global need for comprehensive legal reforms to ensure that rape laws align with international human rights standards and protect the rights of women and girls',
    category: 'Gender Discrimination',
    data: [
        {
            "Year": 2018,
            "Rate of Countries with Lack of Rape Laws (%)": 68,
        },
        {
            "Year": 2019,
            "Rate of Countries with Lack of Rape Laws (%)": 66,
        },
        {
            "Year": 2023,
            "Rate of Countries with Lack of Rape Laws (%)": 60,
        },
    ]
}

export const countriesThatApplyAndDoNotApplyTheEqualPayPrinciple2023 = {
    title: 'Countries That Apply and Do Not Apply the Equal Pay Principle 2023',
    description: 'This dataset presents the global distribution of countries that apply and do not apply the equal pay principle in 2019 and 2023. In 2019, half of the countries had implemented the equal pay principle, while the other half had not. By 2023, there was a slight improvement, with 55% of countries applying equal pay measures and 45% still lacking such policies. This data highlights progress in the adoption of equal pay legislation over time, yet underscores that a significant number of countries continue to fall short in enforcing wage equality between men and women, signaling the need for ongoing advocacy and policy reform.',
    category: 'Gender Discrimination',
    data: [
        {
            "Year": 2019,
            "Rate of Countries That Apply the Equal Pay Principle (%)": 50,
            "Rate of Countries That Do Not Apply the Equal Pay Principle (%)": 50,
        },
        {
            "Year": 2023,
            "Rate of Countries That Apply the Equal Pay Principle (%)": 55,
            "Rate of Countries That Do Not Apply the Equal Pay Principle (%)": 45,
        },
    ]
}

export const countriesThatBanMarriagesUnder182023 = {
    title: 'Countries That Ban Marriages Under 18 (2023)',
    description: 'This dataset provides an overview of the global stance on banning marriages under the age of 18 in 2023. It reveals that only 28% of countries have enacted laws prohibiting child marriages, while a significant 72% of countries still allow marriages under the age of 18. This data highlights the widespread persistence of child marriages across the globe, underscoring the urgent need for stronger legal frameworks and international efforts to protect the rights of young girls and boys. The dataset serves as a critical tool for tracking progress in ending child marriages and promoting the welfare and rights of children.',
    category: 'Gender Discrimination',
    data: [
        {
            "Year": 2023,
            "Rate of Countries That Ban Marriages Under 18 (%)": 28,
            "Rate of Countries That Do Not Ban Marriages Under 18 (%)": 72,
        },
    ]
}

export const regionalLegalAchievementAndGapEmploymentAndEconomicRights2021 = {
    title: 'Regional Legal Achievement and Gap (Employment and Economic Rights) 2021',
    description: 'This dataset provides an overview of the legal achievements and gaps in employment and economic rights across various regions in 2021. The legal achievement rate reflects the percentage of progress made in ensuring women’s employment and economic rights, while the legal achievement gap shows the remaining disparity to be addressed. The data highlights significant variations between regions, with Australia and New Zealand showing the highest legal achievement, while regions like Middle and South Asia exhibit larger gaps.',
    category: 'Gender Discrimination',
    data: [
        {
            "Region": "Australia and New Zealand",
            "Legal Achievement Rate (%)": 95,
            "Legal Achievement Gap (%)": 5,
        },
        {
            "Region": "Middle and South Asia",
            "Legal Achievement Rate (%)": 42,
            "Legal Achievement Gap (%)": 58,
        },
        {
            "Region": "East and Southeast Asia",
            "Legal Achievement Rate (%)": 68,
            "Legal Achievement Gap (%)": 32,
        },
        {
            "Region": "Europe and North America",
            "Legal Achievement Rate (%)": 92,
            "Legal Achievement Gap (%)": 8,
        },
        {
            "Region": "Latin America and the Caribbean",
            "Legal Achievement Rate (%)": 75,
            "Legal Achievement Gap (%)": 25,
        },
        {
            "Region": "North Africa and West Asia",
            "Legal Achievement Rate (%)": 63,
            "Legal Achievement Gap (%)": 37,
        },
        {
            "Region": "Sub-Saharan Africa",
            "Legal Achievement Rate (%)": 66,
            "Legal Achievement Gap (%)": 34,
        },
    ]
}

export const legalGapsInWomenRights2019 = {
    title: 'Legal Gaps in Women’s Rights (2019 Data)',
    description: 'This dataset outlines the legal gaps in women’s rights across various legal areas in 2019. It presents the percentage of countries with gaps in essential legal protections for women, covering areas such as violence against women, employment and economic rights, and equal pay laws. Notably, certain areas like consent-based rape laws and equal pay laws show significant gaps, underscoring the need for continued legal reforms to promote gender equality globally.',
    category: 'Gender Discrimination',
    data: [
        {
            "Legal Area": "General Legal Framework",
            "Rate of Countries with Gaps (%)": 33,
        },
        {
            "Legal Area": "Violence Against Women",
            "Rate of Countries with Gaps (%)": "25+",
        },
        {
            "Legal Area": "Employment and Economic Rights",
            "Rate of Countries with Gaps (%)": 29,
        },
        {
            "Legal Area": "Marriage and Family",
            "Rate of Countries with Gaps (%)": 24,
        },
        {
            "Legal Area": "Consent-Based Rape Laws",
            "Rate of Countries with Gaps (%)": 68,
        },
        {
            "Legal Area": "Equal Pay Laws",
            "Rate of Countries with Gaps (%)": "50+",
        },
    ]
}

export const annualInvestmentGapForGenderEquality2023 = {
    title: 'Annual Investment Gap Required to Achieve Gender Equality for Women (2023 Data)',
    description: 'This dataset highlights the estimated annual investment gap required to achieve gender equality for women as of 2023. The data indicates that a $6.4 trillion investment is needed globally to close the gender equality gap. This figure underscores the substantial financial resources required to address disparities in various areas such as education, employment, healthcare, and political participation, emphasizing the urgency for increased global investment in women’s rights and equality initiatives.',
    category: 'Gender Discrimination',
    data: [
        {
            "Year": 2023,
            "Required Annual Investment Gap (Trillion USD)": 6.4,
        },
    ]
}

export const legalStatusOfCountriesRegardingWomenRights2016 = {
    title: 'Legal Status of Countries Regarding Women’s Rights (2016 Data)',
    description: 'This dataset provides an overview of the legal status of countries in relation to women’s rights for the years 2014 and 2016. It shows the number of countries that have legal frameworks guaranteeing gender equality, as well as those that do not. Between 2014 and 2016, there was a decrease in the number of countries guaranteeing equality, indicating potential setbacks in the progress toward achieving gender equality in legal systems globally. This data serves as a benchmark for tracking the development of women’s rights legislation over time.',
    category: 'Gender Discrimination',
    data: [
        {
            "Year": 2014,
            "Number of Countries Guaranteeing Equality": 143,
            "Number of Countries Not Guaranteeing Equality": 52,
        },
        {
            "Year": 2016,
            "Number of Countries Guaranteeing Equality": 132,
            "Number of Countries Not Guaranteeing Equality": 63,
        },
    ]
}

// Parliament Representation

export const femaleRepresentationInNationalParliaments2000To2024 = {
    title: 'Female Representation in National Parliaments by Year (2000-2024)',
    description: 'This dataset tracks the percentage of female representation in national parliaments from 2000 to 2024. The data shows a steady increase in women’s representation over the years, starting from 13.4% in 2000 and rising to an estimated 26.9% by 2024. This upward trend reflects the gradual progress being made toward gender equality in political representation, though it also highlights the continued underrepresentation of women in legislative bodies. The dataset provides important insights for evaluating the effectiveness of policies aimed at increasing female participation in politics globally.',
    category: 'Parliament Representation',
    data: [
        {
            "Year": 2000,
            "Female Representation Rate (%)": 13.4,
        },
        {
            "Year": 2010,
            "Female Representation Rate (%)": 19,
        },
        {
            "Year": 2015,
            "Female Representation Rate (%)": 22.3,
        },
        {
            "Year": 2016,
            "Female Representation Rate (%)": 23,
        },
        {
            "Year": 2017,
            "Female Representation Rate (%)": 23.4,
        },
        {
            "Year": 2018,
            "Female Representation Rate (%)": 23,
        },
        {
            "Year": 2019,
            "Female Representation Rate (%)": 24.2,
        },
        {
            "Year": 2020,
            "Female Representation Rate (%)": 24.9,
        },
        {
            "Year": 2021,
            "Female Representation Rate (%)": 25.6,
        },
        {
            "Year": 2022,
            "Female Representation Rate (%)": 26.2,
        },
        {
            "Year": 2023,
            "Female Representation Rate (%)": 26.5,
        },
        {
            "Year": 2024,
            "Female Representation Rate (%)": 26.9,
        },
    ]
}

export const femaleRepresentationInLocalGovernments2019To2024 = {
    title: 'Female Representation in Local Governments (2019-2024)',
    description: 'This dataset tracks the percentage of female representation in local governments from 2019 to 2024. The data shows a relatively stable trend in women’s representation, with slight fluctuations. Starting at 36% in 2019, the rate remains consistent through 2021, before experiencing a small decline in subsequent years, reaching 35.4% in 2023 and a modest increase to 35.5% in 2024. This data provides insight into the challenges and progress in promoting gender equality at the local government level, highlighting areas for further policy improvement.',
    category: 'Parliament Representation',
    data: [
        {
            "Year": 2019,
            "Female Representation Rate (%)": 36,
        },
        {
            "Year": 2020,
            "Female Representation Rate (%)": 36,
        },
        {
            "Year": 2021,
            "Female Representation Rate (%)": 36.3,
        },
        {
            "Year": 2022,
            "Female Representation Rate (%)": 35.9,
        },
        {
            "Year": 2023,
            "Female Representation Rate (%)": 35.4,
        },
        {
            "Year": 2024,
            "Female Representation Rate (%)": 35.5,
        },
    ]
}

export const regionalFemaleRepresentation2021 = {
    title: 'Regional Female Representation (2021 Data)',
    description: 'This dataset provides an overview of female representation in both national parliaments and local governments across various regions in 2021. The data highlights significant regional differences, with some regions, such as Latin America & the Caribbean and Europe & North America, showing higher female representation in parliaments, while others like North Africa & West Asia lag behind. Local government representation also varies greatly, with South Asia leading at 41.3% and North Africa & West Asia showing the lowest representation at 17.7%. This dataset offers critical insights into the regional disparities in political gender equality.',
    category: 'Parliament Representation',
    data: [
        {
            "Region": "Oceania",
            "Parliamentary Female Representation (%)": 18,
            "Local Government Female Representation (%)": 32.4,
        },
        {
            "Region": "North Africa & West Asia",
            "Parliamentary Female Representation (%)": 19,
            "Local Government Female Representation (%)": 17.7,
        },
        {
            "Region": "South Asia",
            "Parliamentary Female Representation (%)": 18.9,
            "Local Government Female Representation (%)": 41.3,
        },
        {
            "Region": "East & Southeast Asia",
            "Parliamentary Female Representation (%)": 21.6,
            "Local Government Female Representation (%)": 25.6,
        },
        {
            "Region": "Sub-Saharan Africa",
            "Parliamentary Female Representation (%)": 25,
            "Local Government Female Representation (%)": 29.8,
        },
        {
            "Region": "Europe & North America",
            "Parliamentary Female Representation (%)": 31.5,
            "Local Government Female Representation (%)": 35.1,
        },
        {
            "Region": "Latin America & the Caribbean",
            "Parliamentary Female Representation (%)": 33,
            "Local Government Female Representation (%)": 24.9,
        },
    ]
}

export const timeRequiredForFemaleRepresentationInNationalParliaments = {
    title: 'Time Required to Achieve Female Representation in National Parliaments (2016-2024 Data)',
    description: 'This dataset tracks the estimated number of years required to achieve gender parity in national parliaments from 2016 to 2024. The data reveals fluctuating projections, with the required time decreasing to 40 years in 2022 but increasing again to 47 years by 2023. These changes indicate the complex and nonlinear progress toward gender equality in political representation. The dataset serves as a critical resource for evaluating global efforts to accelerate female representation in legislative bodies and highlights the challenges that remain.',
    category: 'Parliament Representation',
    data: [
        {
            "Year": 2016,
            "Time Required (Years)": 50,
        },
        {
            "Year": 2022,
            "Time Required (Years)": 40,
        },
        {
            "Year": 2023,
            "Time Required (Years)": 47,
        },
    ]
}

export const effectOfGenderQuotasOnFemaleRepresentation2023 = {
    title: 'Effect of Gender Quotas on Female Representation (2023 Data)',
    description: 'This dataset highlights the impact of gender quotas on female representation in national parliaments in 2023. The data shows a significant difference in female representation between countries that have implemented gender quotas and those that have not. Countries with quotas see an average representation rate of 30.9%, while countries without quotas have a significantly lower rate of 21.2%. This data underscores the effectiveness of gender quotas as a policy tool for improving female participation in political leadership and closing the gender gap in legislative bodies.',
    category: 'Parliament Representation',
    data: [
        {
            "Quota Status": "Countries with Gender Quotas",
            "Female Representation Rate (%)": 30.9,
        },
        {
            "Quota Status": "Countries without Gender Quotas",
            "Female Representation Rate (%)": 21.2,
        },
    ]
}

export const femaleParliamentaryRepresentationByRegion2000To2024 = {
    title: 'Female Parliamentary Representation by Region (2000-2024 Data)',
    description: 'This dataset tracks the percentage of female representation in national parliaments across different regions from 2000 to 2024. The data highlights the regional disparities in gender representation, with some regions such as Latin America and the Caribbean, and Europe and North America showing substantial increases over time. Other regions, such as North Africa and West Asia, and Oceania (excluding Australia and New Zealand), exhibit slower progress. This data provides a valuable benchmark for assessing regional progress in promoting gender equality in political representation.',
    category: 'Parliament Representation',
    data: [
        {
            "Year": 2000,
            "Region": "Australia and New Zealand",
            "Female Representation Rate (%)": 25.5,
        },
        {
            "Year": 2000,
            "Region": "Latin America and the Caribbean",
            "Female Representation Rate (%)": 15.2,
        },
        {
            "Year": 2000,
            "Region": "Europe and North America",
            "Female Representation Rate (%)": 16.8,
        },
        {
            "Year": 2000,
            "Region": "Sub-Saharan Africa",
            "Female Representation Rate (%)": 11.5,
        },
        {
            "Year": 2000,
            "Region": "East and Southeast Asia",
            "Female Representation Rate (%)": 16.4,
        },
        {
            "Year": 2000,
            "Region": "South Asia",
            "Female Representation Rate (%)": 6.9,
        },
        {
            "Year": 2000,
            "Region": "North Africa and West Asia",
            "Female Representation Rate (%)": 4.9,
        },
        {
            "Year": 2000,
            "Region": "Oceania (excluding Australia and NZ)",
            "Female Representation Rate (%)": 3.6,
        },
        {
            "Year": 2017,
            "Region": "Australia and New Zealand",
            "Female Representation Rate (%)": 31.1,
        },
        {
            "Year": 2017,
            "Region": "Latin America and the Caribbean",
            "Female Representation Rate (%)": 29.4,
        },
        {
            "Year": 2017,
            "Region": "Europe and North America",
            "Female Representation Rate (%)": 27.6,
        },
        {
            "Year": 2017,
            "Region": "Sub-Saharan Africa",
            "Female Representation Rate (%)": 23.7,
        },
        {
            "Year": 2017,
            "Region": "East and Southeast Asia",
            "Female Representation Rate (%)": 20.1,
        },
        {
            "Year": 2017,
            "Region": "South Asia",
            "Female Representation Rate (%)": 18.5,
        },
        {
            "Year": 2017,
            "Region": "North Africa and West Asia",
            "Female Representation Rate (%)": 18.4,
        },
        {
            "Year": 2017,
            "Region": "Oceania (excluding Australia and NZ)",
            "Female Representation Rate (%)": 6.0,
        },
        {
            "Year": 2021,
            "Region": "Oceania",
            "Female Representation Rate (%)": 18.0,
        },
        {
            "Year": 2021,
            "Region": "North Africa and West Asia",
            "Female Representation Rate (%)": 19.0,
        },
        {
            "Year": 2021,
            "Region": "South Asia",
            "Female Representation Rate (%)": 18.9,
        },
        {
            "Year": 2021,
            "Region": "East and Southeast Asia",
            "Female Representation Rate (%)": 21.6,
        },
        {
            "Year": 2021,
            "Region": "Sub-Saharan Africa",
            "Female Representation Rate (%)": 25.0,
        },
        {
            "Year": 2021,
            "Region": "Europe and North America",
            "Female Representation Rate (%)": 31.5,
        },
        {
            "Year": 2021,
            "Region": "Latin America and the Caribbean",
            "Female Representation Rate (%)": 33.0,
        },
        {
            "Year": 2023,
            "Region": "Sub-Saharan Africa",
            "Female Representation Rate (%)": 25.0,
        },
        {
            "Year": 2023,
            "Region": "North Africa and West Asia",
            "Female Representation Rate (%)": 19.0,
        },
    ]
}

export const femaleRepresentationInLocalGovernmentsByRegion2021 = {
    title: 'Female Representation in Local Governments by Region (2021 Data)',
    description: 'This dataset provides the percentage of female representation in local governments across various regions in 2021. The data highlights significant regional disparities in local governance, with South Asia leading at 41.3% and North Africa & West Asia showing the lowest representation at 17.7%. Regions such as Oceania, Europe & North America, and Sub-Saharan Africa show moderate levels of female representation. This dataset is valuable for assessing the progress and challenges in achieving gender equality in local government structures globally.',
    category: 'Parliament Representation',
    data: [
        {
            "Region": "Oceania",
            "Female Representation in Local Government (%)": 32.4,
        },
        {
            "Region": "North Africa and West Asia",
            "Female Representation in Local Government (%)": 17.7,
        },
        {
            "Region": "South Asia",
            "Female Representation in Local Government (%)": 41.3,
        },
        {
            "Region": "East and Southeast Asia",
            "Female Representation in Local Government (%)": 25.6,
        },
        {
            "Region": "Sub-Saharan Africa",
            "Female Representation in Local Government (%)": 29.8,
        },
        {
            "Region": "Europe and North America",
            "Female Representation in Local Government (%)": 35.1,
        },
        {
            "Region": "Latin America and the Caribbean",
            "Female Representation in Local Government (%)": 24.9,
        },
    ]
}

export const changeInFemaleRepresentationInParliaments2010To2024 = {
    title: 'Change in Female Representation in Parliaments (2010-2024 Data)',
    description: 'This dataset tracks the change in the percentage of female representation in national parliaments from 2010 to 2024. Over this period, there has been a steady increase in women’s representation, rising from 19% in 2010 to an estimated 26.9% by 2024. The data highlights the gradual but consistent progress made toward gender equality in political leadership. This trend offers important insights for evaluating the effectiveness of policies and initiatives aimed at increasing female participation in legislative bodies globally.',
    category: 'Parliament Representation',
    data: [
        {
            "Year": 2010,
            "Female Representation Rate (%)": 19,
        },
        {
            "Year": 2015,
            "Female Representation Rate (%)": 22.3,
        },
        {
            "Year": 2016,
            "Female Representation Rate (%)": 23,
        },
        {
            "Year": 2017,
            "Female Representation Rate (%)": 23.4,
        },
        {
            "Year": 2018,
            "Female Representation Rate (%)": 23,
        },
        {
            "Year": 2019,
            "Female Representation Rate (%)": 24.2,
        },
        {
            "Year": 2020,
            "Female Representation Rate (%)": 24.9,
        },
        {
            "Year": 2021,
            "Female Representation Rate (%)": 25.6,
        },
        {
            "Year": 2022,
            "Female Representation Rate (%)": 26.2,
        },
        {
            "Year": 2023,
            "Female Representation Rate (%)": 26.5,
        },
        {
            "Year": 2024,
            "Female Representation Rate (%)": 26.9,
        },
    ]
}

// Marriage and Family

export const childMarriageRatesByYear1990To2024 = {
    title: 'Child Marriage Rates Below 18 Years by Year (1990-2024)',
    description: 'This dataset tracks the percentage of child marriages (marriages below the age of 18) from 1990 to 2024. The data shows a significant decline in child marriage rates over the decades, with a notable drop from 32% in 1990 to 19% in 2024. However, the data also indicates that progress has stagnated in recent years, with rates remaining at 19% from 2021 to 2024. This dataset provides essential insights into the ongoing challenges in combating child marriage and highlights the need for continued advocacy and legal reforms to protect the rights of children.',
    category: 'Marriage and Family',
    data: [
        {
            "Year": 1990,
            "Child Marriage Rate (%)": 32,
        },
        {
            "Year": 2000,
            "Child Marriage Rate (%)": 21.6,
        },
        {
            "Year": 2015,
            "Child Marriage Rate (%)": 19.2,
        },
        {
            "Year": 2020,
            "Child Marriage Rate (%)": 20.2,
        },
        {
            "Year": 2021,
            "Child Marriage Rate (%)": 19.5,
        },
        {
            "Year": 2022,
            "Child Marriage Rate (%)": 19,
        },
        {
            "Year": 2023,
            "Child Marriage Rate (%)": 19,
        },
        {
            "Year": 2024,
            "Child Marriage Rate (%)": 19,
        },
    ]
}

export const childMarriageRatesUnder15ByYear1990To2024 = {
    title: 'Child Marriage Rates Under 15 Years by Year (1990-2024)',
    description: 'This dataset tracks the percentage of child marriages (marriages below the age of 15) from 1990 to 2024. The data shows a significant decline in child marriage rates among this age group, with a drop from 12% in 1990 to a low of 4.9% in 2019. Although there has been a slight increase to 5% in the years following 2019, the overall trend demonstrates a positive decrease in early marriages. This dataset highlights the importance of continued efforts to combat child marriage and protect the rights of young girls.',
    category: 'Marriage and Family',
    data: [
        {
            "Year": 1990,
            "Child Marriage Rate Under 15 (%)": 12,
        },
        {
            "Year": 2000,
            "Child Marriage Rate Under 15 (%)": 11,
        },
        {
            "Year": 2015,
            "Child Marriage Rate Under 15 (%)": 7,
        },
        {
            "Year": 2019,
            "Child Marriage Rate Under 15 (%)": 4.9,
        },
        {
            "Year": 2020,
            "Child Marriage Rate Under 15 (%)": 5,
        },
        {
            "Year": 2021,
            "Child Marriage Rate Under 15 (%)": 5,
        },
        {
            "Year": 2022,
            "Child Marriage Rate Under 15 (%)": 5,
        },
        {
            "Year": 2023,
            "Child Marriage Rate Under 15 (%)": 5,
        },
    ]
}

export const childMarriageRatesByRegion2000To2024 = {
    title: 'Child Marriage Rates Below 18 by Region (2000-2024 Data)',
    description: 'This dataset provides an overview of child marriage rates (marriages below the age of 18) by region from 2000 to 2024. The data reveals significant regional disparities, with South Asia consistently showing the highest rates, peaking at 31.7% in 2000 and remaining high through 2023. Sub-Saharan Africa also displays concerning rates, particularly with an increase to 35% in 2021. The dataset highlights the ongoing challenges and the need for targeted interventions to combat child marriage across different regions.',
    category: 'Marriage and Family',
    data: [
        {
            "Year": 2000,
            "Region": "South Asia",
            "Child Marriage Rate (%)": 31.7,
        },
        {
            "Year": 2000,
            "Region": "Sub-Saharan Africa",
            "Child Marriage Rate (%)": 27.0,
        },
        {
            "Year": 2000,
            "Region": "Latin America and the Caribbean",
            "Child Marriage Rate (%)": 21.4,
        },
        {
            "Year": 2000,
            "Region": "Oceania (excluding AUS and NZ)",
            "Child Marriage Rate (%)": 24.2,
        },
        {
            "Year": 2000,
            "Region": "North Africa and West Asia",
            "Child Marriage Rate (%)": 18.1,
        },
        {
            "Year": 2000,
            "Region": "East and Southeast Asia",
            "Child Marriage Rate (%)": 11.7,
        },
        {
            "Year": 2015,
            "Region": "South Asia",
            "Child Marriage Rate (%)": 27.5,
        },
        {
            "Year": 2015,
            "Region": "Sub-Saharan Africa",
            "Child Marriage Rate (%)": 25.3,
        },
        {
            "Year": 2015,
            "Region": "Latin America and the Caribbean",
            "Child Marriage Rate (%)": 22.1,
        },
        {
            "Year": 2015,
            "Region": "Oceania (excluding AUS and NZ)",
            "Child Marriage Rate (%)": 18.8,
        },
        {
            "Year": 2015,
            "Region": "North Africa and West Asia",
            "Child Marriage Rate (%)": 14.1,
        },
        {
            "Year": 2015,
            "Region": "East and Southeast Asia",
            "Child Marriage Rate (%)": 7.4,
        },
        {
            "Year": 2020,
            "Region": "Sub-Saharan Africa",
            "Child Marriage Rate (%)": 34.5,
        },
        {
            "Year": 2020,
            "Region": "South Asia",
            "Child Marriage Rate (%)": 28,
        },
        {
            "Year": 2020,
            "Region": "Latin America and the Caribbean",
            "Child Marriage Rate (%)": 22,
        },
        {
            "Year": 2020,
            "Region": "Oceania (excluding AUS and NZ)",
            "Child Marriage Rate (%)": 19,
        },
        {
            "Year": 2020,
            "Region": "North Africa and West Asia",
            "Child Marriage Rate (%)": 14,
        },
        {
            "Year": 2020,
            "Region": "East and Southeast Asia",
            "Child Marriage Rate (%)": 7.5,
        },
        {
            "Year": 2021,
            "Region": "Sub-Saharan Africa",
            "Child Marriage Rate (%)": 35,
        },
        {
            "Year": 2021,
            "Region": "South Asia",
            "Child Marriage Rate (%)": 28,
        },
        {
            "Year": 2021,
            "Region": "Latin America and the Caribbean",
            "Child Marriage Rate (%)": 23,
        },
        {
            "Year": 2021,
            "Region": "Oceania (excluding AUS and NZ)",
            "Child Marriage Rate (%)": 19,
        },
        {
            "Year": 2021,
            "Region": "North Africa and West Asia",
            "Child Marriage Rate (%)": 14.5,
        },
        {
            "Year": 2021,
            "Region": "East and Southeast Asia",
            "Child Marriage Rate (%)": 7.6,
        },
        {
            "Year": 2022,
            "Region": "Sub-Saharan Africa",
            "Child Marriage Rate (%)": 35,
        },
        {
            "Year": 2022,
            "Region": "South Asia",
            "Child Marriage Rate (%)": 28,
        },
        {
            "Year": 2022,
            "Region": "Latin America and the Caribbean",
            "Child Marriage Rate (%)": 23,
        },
        {
            "Year": 2022,
            "Region": "Oceania (excluding AUS and NZ)",
            "Child Marriage Rate (%)": 19,
        },
        {
            "Year": 2022,
            "Region": "North Africa and West Asia",
            "Child Marriage Rate (%)": 14.5,
        },
        {
            "Year": 2022,
            "Region": "East and Southeast Asia",
            "Child Marriage Rate (%)": 7.6,
        },
        {
            "Year": 2023,
            "Region": "Sub-Saharan Africa",
            "Child Marriage Rate (%)": 32,
        },
        {
            "Year": 2023,
            "Region": "South Asia",
            "Child Marriage Rate (%)": 26,
        },
        {
            "Year": 2023,
            "Region": "Latin America and the Caribbean",
            "Child Marriage Rate (%)": 23.5,
        },
        {
            "Year": 2023,
            "Region": "Oceania (excluding AUS and NZ)",
            "Child Marriage Rate (%)": 19.2,
        },
        {
            "Year": 2023,
            "Region": "North Africa and West Asia",
            "Child Marriage Rate (%)": 15,
        },
        {
            "Year": 2023,
            "Region": "East and Southeast Asia",
            "Child Marriage Rate (%)": 7.8,
        },
    ]
}

export const childMarriageRatesUnder15ByRegion2000To2024 = {
    title: 'Child Marriage Rates Under 15 by Region (2000-2024 Data)',
    description: 'This dataset provides an overview of child marriage rates (marriages below the age of 15) by region from 2000 to 2024. The data highlights significant disparities in child marriage rates, with South Asia consistently showing the highest rates, starting at 27.8% in 2000 and decreasing to 7.4% by 2023. In contrast, regions like Oceania (excluding Australia and New Zealand) show markedly lower rates, indicating the need for targeted interventions in high-prevalence areas. This dataset underscores the importance of continued efforts to combat child marriage globally.',
    category: 'Marriage and Family',
    data: [
        {
            "Year": 2000,
            "Region": "South Asia",
            "Child Marriage Rate Under 15 (%)": 27.8,
        },
        {
            "Year": 2000,
            "Region": "Sub-Saharan Africa",
            "Child Marriage Rate Under 15 (%)": 14.9,
        },
        {
            "Year": 2000,
            "Region": "Latin America and the Caribbean",
            "Child Marriage Rate Under 15 (%)": 6.1,
        },
        {
            "Year": 2000,
            "Region": "Oceania (excluding Australia and NZ)",
            "Child Marriage Rate Under 15 (%)": 2.5,
        },
        {
            "Year": 2000,
            "Region": "North Africa and West Asia",
            "Child Marriage Rate Under 15 (%)": 6.0,
        },
        {
            "Year": 2000,
            "Region": "East and Southeast Asia",
            "Child Marriage Rate Under 15 (%)": 0.9,
        },
        {
            "Year": 2015,
            "Region": "South Asia",
            "Child Marriage Rate Under 15 (%)": 15.7,
        },
        {
            "Year": 2015,
            "Region": "Sub-Saharan Africa",
            "Child Marriage Rate Under 15 (%)": 11.3,
        },
        {
            "Year": 2015,
            "Region": "Latin America and the Caribbean",
            "Child Marriage Rate Under 15 (%)": 6.8,
        },
        {
            "Year": 2015,
            "Region": "Oceania (excluding Australia and NZ)",
            "Child Marriage Rate Under 15 (%)": 2.1,
        },
        {
            "Year": 2015,
            "Region": "North Africa and West Asia",
            "Child Marriage Rate Under 15 (%)": 3.5,
        },
        {
            "Year": 2015,
            "Region": "East and Southeast Asia",
            "Child Marriage Rate Under 15 (%)": 0.2,
        },
        {
            "Year": 2020,
            "Region": "Sub-Saharan Africa",
            "Child Marriage Rate Under 15 (%)": 10.5,
        },
        {
            "Year": 2020,
            "Region": "South Asia",
            "Child Marriage Rate Under 15 (%)": 7.6,
        },
        {
            "Year": 2020,
            "Region": "Latin America and the Caribbean",
            "Child Marriage Rate Under 15 (%)": 6.8,
        },
        {
            "Year": 2020,
            "Region": "Oceania (excluding Australia and NZ)",
            "Child Marriage Rate Under 15 (%)": 2.0,
        },
        {
            "Year": 2020,
            "Region": "North Africa and West Asia",
            "Child Marriage Rate Under 15 (%)": 3.2,
        },
        {
            "Year": 2020,
            "Region": "East and Southeast Asia",
            "Child Marriage Rate Under 15 (%)": 0.3,
        },
        {
            "Year": 2021,
            "Region": "Sub-Saharan Africa",
            "Child Marriage Rate Under 15 (%)": 11,
        },
        {
            "Year": 2021,
            "Region": "South Asia",
            "Child Marriage Rate Under 15 (%)": 7.5,
        },
        {
            "Year": 2021,
            "Region": "Latin America and the Caribbean",
            "Child Marriage Rate Under 15 (%)": 6.9,
        },
        {
            "Year": 2021,
            "Region": "Oceania (excluding Australia and NZ)",
            "Child Marriage Rate Under 15 (%)": 2.0,
        },
        {
            "Year": 2021,
            "Region": "North Africa and West Asia",
            "Child Marriage Rate Under 15 (%)": 3.3,
        },
        {
            "Year": 2021,
            "Region": "East and Southeast Asia",
            "Child Marriage Rate Under 15 (%)": 0.3,
        },
        {
            "Year": 2022,
            "Region": "Sub-Saharan Africa",
            "Child Marriage Rate Under 15 (%)": 11,
        },
        {
            "Year": 2022,
            "Region": "South Asia",
            "Child Marriage Rate Under 15 (%)": 7.5,
        },
        {
            "Year": 2022,
            "Region": "Latin America and the Caribbean",
            "Child Marriage Rate Under 15 (%)": 6.9,
        },
        {
            "Year": 2022,
            "Region": "Oceania (excluding Australia and NZ)",
            "Child Marriage Rate Under 15 (%)": 2.0,
        },
        {
            "Year": 2022,
            "Region": "North Africa and West Asia",
            "Child Marriage Rate Under 15 (%)": 3.3,
        },
        {
            "Year": 2022,
            "Region": "East and Southeast Asia",
            "Child Marriage Rate Under 15 (%)": 0.3,
        },
        {
            "Year": 2023,
            "Region": "Sub-Saharan Africa",
            "Child Marriage Rate Under 15 (%)": 10.5,
        },
        {
            "Year": 2023,
            "Region": "South Asia",
            "Child Marriage Rate Under 15 (%)": 7.4,
        },
        {
            "Year": 2023,
            "Region": "Latin America and the Caribbean",
            "Child Marriage Rate Under 15 (%)": 6.8,
        },
        {
            "Year": 2023,
            "Region": "Oceania (excluding Australia and NZ)",
            "Child Marriage Rate Under 15 (%)": 2.0,
        },
        {
            "Year": 2023,
            "Region": "North Africa and West Asia",
            "Child Marriage Rate Under 15 (%)": 3.2,
        },
        {
            "Year": 2023,
            "Region": "East and Southeast Asia",
            "Child Marriage Rate Under 15 (%)": 0.3,
        },
    ]
}

export const childMarriageRateChange2009To2024 = {
    title: 'Change in Child Marriage Rates (2009-2024 Data)',
    description: 'This dataset provides an overview of child marriage rates, specifically focusing on marriages under 15 years old and those between 15-18 years old, from 2009 to 2024. The data reveals significant regional differences, with Sub-Saharan Africa and South Asia showing notably high rates in both age categories. Over the years, there have been fluctuations in the rates, indicating the complexities involved in addressing child marriage. This dataset emphasizes the ongoing challenges and the need for effective interventions to reduce child marriage globally.',
    category: 'Marriage and Family',
    data: [
        {
            "Year": 2009,
            "Region": "Sub-Saharan Africa",
            "Child Marriage Rate Under 15 (%)": 13.7,
            "Child Marriage Rate (15-18 years) (%)": 25.2,
        },
        {
            "Year": 2009,
            "Region": "South Asia",
            "Child Marriage Rate Under 15 (%)": 17.2,
            "Child Marriage Rate (15-18 years) (%)": 29.9,
        },
        {
            "Year": 2009,
            "Region": "World",
            "Child Marriage Rate Under 15 (%)": 7.4,
            "Child Marriage Rate (15-18 years) (%)": 16.4,
        },
        {
            "Year": 2009,
            "Region": "Latin America and the Caribbean",
            "Child Marriage Rate Under 15 (%)": 6.1,
            "Child Marriage Rate (15-18 years) (%)": 21.4,
        },
        {
            "Year": 2009,
            "Region": "Oceania (excluding AUS and NZ)",
            "Child Marriage Rate Under 15 (%)": 2.5,
            "Child Marriage Rate (15-18 years) (%)": 24.2,
        },
        {
            "Year": 2009,
            "Region": "North Africa and West Asia",
            "Child Marriage Rate Under 15 (%)": 6.0,
            "Child Marriage Rate (15-18 years) (%)": 18.1,
        },
        {
            "Year": 2009,
            "Region": "East and Southeast Asia",
            "Child Marriage Rate Under 15 (%)": 0.9,
            "Child Marriage Rate (15-18 years) (%)": 11.7,
        },
        {
            "Year": 2019,
            "Region": "Sub-Saharan Africa",
            "Child Marriage Rate Under 15 (%)": 10.5,
            "Child Marriage Rate (15-18 years) (%)": 24,
        },
        {
            "Year": 2019,
            "Region": "South Asia",
            "Child Marriage Rate Under 15 (%)": 7.6,
            "Child Marriage Rate (15-18 years) (%)": 21.6,
        },
        {
            "Year": 2019,
            "Region": "World",
            "Child Marriage Rate Under 15 (%)": 4.9,
            "Child Marriage Rate (15-18 years) (%)": 15.3,
        },
        {
            "Year": 2019,
            "Region": "Latin America and the Caribbean",
            "Child Marriage Rate Under 15 (%)": 6.8,
            "Child Marriage Rate (15-18 years) (%)": 22.1,
        },
        {
            "Year": 2019,
            "Region": "Oceania (excluding AUS and NZ)",
            "Child Marriage Rate Under 15 (%)": 2.1,
            "Child Marriage Rate (15-18 years) (%)": 18.8,
        },
        {
            "Year": 2019,
            "Region": "North Africa and West Asia",
            "Child Marriage Rate Under 15 (%)": 3.5,
            "Child Marriage Rate (15-18 years) (%)": 14.1,
        },
        {
            "Year": 2019,
            "Region": "East and Southeast Asia",
            "Child Marriage Rate Under 15 (%)": 0.2,
            "Child Marriage Rate (15-18 years) (%)": 7.4,
        },
        {
            "Year": 2020,
            "Region": "Sub-Saharan Africa",
            "Child Marriage Rate Under 15 (%)": 10.5,
            "Child Marriage Rate (15-18 years) (%)": 24,
        },
        {
            "Year": 2020,
            "Region": "South Asia",
            "Child Marriage Rate Under 15 (%)": 7.6,
            "Child Marriage Rate (15-18 years) (%)": 21.6,
        },
        {
            "Year": 2020,
            "Region": "Latin America and the Caribbean",
            "Child Marriage Rate Under 15 (%)": 6.8,
            "Child Marriage Rate (15-18 years) (%)": 22.1,
        },
        {
            "Year": 2020,
            "Region": "Oceania (excluding AUS and NZ)",
            "Child Marriage Rate Under 15 (%)": 2.1,
            "Child Marriage Rate (15-18 years) (%)": 18.8,
        },
        {
            "Year": 2020,
            "Region": "North Africa and West Asia",
            "Child Marriage Rate Under 15 (%)": 3.5,
            "Child Marriage Rate (15-18 years) (%)": 14.1,
        },
        {
            "Year": 2020,
            "Region": "East and Southeast Asia",
            "Child Marriage Rate Under 15 (%)": 0.2,
            "Child Marriage Rate (15-18 years) (%)": 7.4,
        },
        {
            "Year": 2021,
            "Region": "Sub-Saharan Africa",
            "Child Marriage Rate Under 15 (%)": 11,
            "Child Marriage Rate (15-18 years) (%)": 25,
        },
        {
            "Year": 2021,
            "Region": "South Asia",
            "Child Marriage Rate Under 15 (%)": 7.5,
            "Child Marriage Rate (15-18 years) (%)": 21.5,
        },
        {
            "Year": 2021,
            "Region": "Latin America and the Caribbean",
            "Child Marriage Rate Under 15 (%)": 6.9,
            "Child Marriage Rate (15-18 years) (%)": 22.2,
        },
        {
            "Year": 2021,
            "Region": "Oceania (excluding AUS and NZ)",
            "Child Marriage Rate Under 15 (%)": 2.0,
            "Child Marriage Rate (15-18 years) (%)": 18.5,
        },
        {
            "Year": 2021,
            "Region": "North Africa and West Asia",
            "Child Marriage Rate Under 15 (%)": 3.3,
            "Child Marriage Rate (15-18 years) (%)": 14.0,
        },
        {
            "Year": 2021,
            "Region": "East and Southeast Asia",
            "Child Marriage Rate Under 15 (%)": 0.3,
            "Child Marriage Rate (15-18 years) (%)": 7.6,
        },
        {
            "Year": 2022,
            "Region": "Sub-Saharan Africa",
            "Child Marriage Rate Under 15 (%)": 11,
            "Child Marriage Rate (15-18 years) (%)": 25,
        },
        {
            "Year": 2022,
            "Region": "South Asia",
            "Child Marriage Rate Under 15 (%)": 7.5,
            "Child Marriage Rate (15-18 years) (%)": 21.5,
        },
        {
            "Year": 2022,
            "Region": "Latin America and the Caribbean",
            "Child Marriage Rate Under 15 (%)": 6.9,
            "Child Marriage Rate (15-18 years) (%)": 22.2,
        },
        {
            "Year": 2022,
            "Region": "Oceania (excluding AUS and NZ)",
            "Child Marriage Rate Under 15 (%)": 2.0,
            "Child Marriage Rate (15-18 years) (%)": 18.5,
        },
        {
            "Year": 2022,
            "Region": "North Africa and West Asia",
            "Child Marriage Rate Under 15 (%)": 3.3,
            "Child Marriage Rate (15-18 years) (%)": 14.0,
        },
        {
            "Year": 2022,
            "Region": "East and Southeast Asia",
            "Child Marriage Rate Under 15 (%)": 0.3,
            "Child Marriage Rate (15-18 years) (%)": 7.6,
        },
        {
            "Year": 2023,
            "Region": "Sub-Saharan Africa",
            "Child Marriage Rate Under 15 (%)": 10.5,
            "Child Marriage Rate (15-18 years) (%)": 24,
        },
        {
            "Year": 2023,
            "Region": "South Asia",
            "Child Marriage Rate Under 15 (%)": 7.4,
            "Child Marriage Rate (15-18 years) (%)": 21.4,
        },
        {
            "Year": 2023,
            "Region": "Latin America and the Caribbean",
            "Child Marriage Rate Under 15 (%)": 6.8,
            "Child Marriage Rate (15-18 years) (%)": 22.1,
        },
        {
            "Year": 2023,
            "Region": "Oceania (excluding AUS and NZ)",
            "Child Marriage Rate Under 15 (%)": 2.0,
            "Child Marriage Rate (15-18 years) (%)": 18.5,
        },
        {
            "Year": 2023,
            "Region": "North Africa and West Asia",
            "Child Marriage Rate Under 15 (%)": 3.2,
            "Child Marriage Rate (15-18 years) (%)": 14.0,
        },
        {
            "Year": 2023,
            "Region": "East and Southeast Asia",
            "Child Marriage Rate Under 15 (%)": 0.3,
            "Child Marriage Rate (15-18 years) (%)": 7.5,
        },
    ]
}

export const regionalSuccessAndAchievementGapInChildMarriage2021 = {
    title: 'Regional Success and Achievement Gap in Child Marriage (2021 Data)',
    description: 'This dataset presents the success rates and achievement gaps related to child marriage across different regions in 2021. The data reveals significant disparities, with regions like Latin America and the Caribbean, and Europe and North America showing high success rates of 85% and 83%, respectively. In contrast, North Africa and West Asia exhibit a much lower success rate of 59%, highlighting a substantial achievement gap of 41%. This dataset underscores the varying levels of progress in combating child marriage and the need for targeted interventions in regions with higher achievement gaps.',
    category: 'Marriage and Family',
    data: [
        {
            "Region": "Australia and New Zealand",
            "Success Rate (%)": 82,
            "Achievement Gap (%)": 18,
        },
        {
            "Region": "Middle and South Asia",
            "Success Rate (%)": 74,
            "Achievement Gap (%)": 26,
        },
        {
            "Region": "East and Southeast Asia",
            "Success Rate (%)": 77,
            "Achievement Gap (%)": 23,
        },
        {
            "Region": "Europe and North America",
            "Success Rate (%)": 83,
            "Achievement Gap (%)": 17,
        },
        {
            "Region": "Latin America and the Caribbean",
            "Success Rate (%)": 85,
            "Achievement Gap (%)": 15,
        },
        {
            "Region": "North Africa and West Asia",
            "Success Rate (%)": 59,
            "Achievement Gap (%)": 41,
        },
        {
            "Region": "Sub-Saharan Africa",
            "Success Rate (%)": 76,
            "Achievement Gap (%)": 24,
        },
    ]
}

export const marriageAgeEqualityAndWomenRights2021To2024 = {
    title: 'Marriage Age Equality and Women’s Rights (2021-2024 Data)',
    description: 'This dataset provides insights into the percentage of countries that ensure marriage age equality and the percentage of countries where women do not have equal rights to marriage and divorce compared to men from 2021 to 2024. The data indicates that 77% of countries maintained marriage age equality in both 2021 and 2022, while a slight decline to 75% is noted in 2023 and 2024. Concurrently, the percentage of countries where women lack equal rights in marriage and divorce increased from 23% in 2021 and 2022 to 25% in 2023 and 2024, highlighting ongoing challenges in achieving gender equality in marital rights.',
    category: 'Marriage and Family',
    data: [
        {
            "Year": 2021,
            "Countries Ensuring Marriage Age Equality (%)": 77,
            "Countries Where Women Lack Equal Rights to Marriage and Divorce (%)": 23,
        },
        {
            "Year": 2022,
            "Countries Ensuring Marriage Age Equality (%)": 77,
            "Countries Where Women Lack Equal Rights to Marriage and Divorce (%)": 23,
        },
        {
            "Year": 2023,
            "Countries Ensuring Marriage Age Equality (%)": 75,
            "Countries Where Women Lack Equal Rights to Marriage and Divorce (%)": 25,
        },
        {
            "Year": 2024,
            "Countries Ensuring Marriage Age Equality (%)": 75,
            "Countries Where Women Lack Equal Rights to Marriage and Divorce (%)": 25,
        },
    ]
}

export const reductionInChildMarriageRates2010To2024 = {
    title: 'Reduction in Child Marriage Rates (2010-2024 Data)',
    description: 'This dataset tracks the reduction rates of child marriage across various regions from 2010 to 2024. The data reflects significant progress in certain areas, particularly in South Asia, where a notable reduction of over 40% was recorded in 2015. The dataset also highlights global trends, with varying reduction rates; for example, the global reduction rate in 2021 reached 15%, and in 2022, it increased to 20%. However, challenges remain, especially in regions like Sub-Saharan Africa where progress has been slower. This dataset serves as an important indicator for understanding the effectiveness of global initiatives aimed at reducing child marriage.',
    category: 'Marriage and Family',
    data: [
        {
            "Year": 2010,
            "Region": "World",
            "Child Marriage Reduction Rate (%)": null,
        },
        {
            "Year": 2013,
            "Region": "South Asia",
            "Child Marriage Reduction Rate (%)": 25,
        },
        {
            "Year": 2015,
            "Region": "World",
            "Child Marriage Reduction Rate (%)": 6,
        },
        {
            "Year": 2015,
            "Region": "South Asia",
            "Child Marriage Reduction Rate (%)": 40,
        },
        {
            "Year": 2015,
            "Region": "North Africa",
            "Child Marriage Reduction Rate (%)": 29,
        },
        {
            "Year": 2017,
            "Region": "South Asia",
            "Child Marriage Reduction Rate (%)": 25,
        },
        {
            "Year": 2018,
            "Region": "South Asia",
            "Child Marriage Reduction Rate (%)": 25,
        },
        {
            "Year": 2018,
            "Region": "World",
            "Child Marriage Reduction Rate (%)": null,
        },
        {
            "Year": 2019,
            "Region": "South Asia",
            "Child Marriage Reduction Rate (%)": 25,
        },
        {
            "Year": 2019,
            "Region": "Sub-Saharan Africa",
            "Child Marriage Reduction Rate (%)": "Slow",
        },
        {
            "Year": 2020,
            "Region": "World",
            "Child Marriage Reduction Rate (%)": 3.6,
        },
        {
            "Year": 2021,
            "Region": "World",
            "Child Marriage Reduction Rate (%)": 15,
        },
        {
            "Year": 2022,
            "Region": "World",
            "Child Marriage Reduction Rate (%)": 20,
        },
        {
            "Year": 2023,
            "Region": "World",
            "Child Marriage Reduction Rate (%)": 15,
        },
        {
            "Year": 2024,
            "Region": "World",
            "Child Marriage Reduction Rate (%)": 20,
        },
    ]
}

export const atRiskGirlsForChildMarriage2021To2023 = {
    title: 'At-Risk Girls for Child Marriage (2021-2023 Data)',
    description: 'This dataset provides information on the number of at-risk girls for child marriage from 2021 to 2023. The data indicates that there are consistently 100 million girls at risk each year during this period. Additionally, the dataset highlights the impact of COVID-19, which has introduced an extra risk factor for 10 million girls in each year. This data underscores the ongoing challenges faced by young girls globally and emphasizes the need for targeted interventions to protect their rights and well-being.',
    category: 'Marriage and Family',
    data: [
        {
            "Year": 2021,
            "Number of At-Risk Girls (Millions)": 100,
            "Additional Risk from COVID-19 (Millions)": 10,
        },
        {
            "Year": 2022,
            "Number of At-Risk Girls (Millions)": 100,
            "Additional Risk from COVID-19 (Millions)": 10,
        },
        {
            "Year": 2023,
            "Number of At-Risk Girls (Millions)": 100,
            "Additional Risk from COVID-19 (Millions)": 10,
        },
    ]
}

export const regionalChildMarriageRates2020To2024 = {
    title: 'Regional Child Marriage Rates (2020-2024 Data)',
    description: 'This dataset provides an overview of child marriage rates by region from 2020 to 2024. The data highlights significant disparities in child marriage rates, with Sub-Saharan Africa showing the highest rates throughout the years. In 2020, the rate was 34.5%, increasing to 35% in 2021 and remaining at that level in 2022. Meanwhile, South Asia and Latin America and the Caribbean also exhibit notable rates, emphasizing the ongoing challenge of child marriage in these regions. The dataset serves as an important indicator for evaluating the effectiveness of policies aimed at reducing child marriage globally.',
    category: 'Marriage and Family',
    data: [
        {
            "Year": 2020,
            "Region": "Sub-Saharan Africa",
            "Child Marriage Rate (%)": 34.5,
        },
        {
            "Year": 2020,
            "Region": "South Asia",
            "Child Marriage Rate (%)": 28,
        },
        {
            "Year": 2020,
            "Region": "Latin America and the Caribbean",
            "Child Marriage Rate (%)": 22,
        },
        {
            "Year": 2020,
            "Region": "Oceania (excluding AUS and NZ)",
            "Child Marriage Rate (%)": 19,
        },
        {
            "Year": 2020,
            "Region": "North Africa and West Asia",
            "Child Marriage Rate (%)": 14,
        },
        {
            "Year": 2020,
            "Region": "East and Southeast Asia",
            "Child Marriage Rate (%)": 7.5,
        },
        {
            "Year": 2021,
            "Region": "Sub-Saharan Africa",
            "Child Marriage Rate (%)": 35,
        },
        {
            "Year": 2021,
            "Region": "South Asia",
            "Child Marriage Rate (%)": 28,
        },
        {
            "Year": 2021,
            "Region": "Latin America and the Caribbean",
            "Child Marriage Rate (%)": 23,
        },
        {
            "Year": 2021,
            "Region": "Oceania (excluding AUS and NZ)",
            "Child Marriage Rate (%)": 19,
        },
        {
            "Year": 2021,
            "Region": "North Africa and West Asia",
            "Child Marriage Rate (%)": 14.5,
        },
        {
            "Year": 2021,
            "Region": "East and Southeast Asia",
            "Child Marriage Rate (%)": 7.6,
        },
        {
            "Year": 2022,
            "Region": "Sub-Saharan Africa",
            "Child Marriage Rate (%)": 35,
        },
        {
            "Year": 2022,
            "Region": "South Asia",
            "Child Marriage Rate (%)": 28,
        },
        {
            "Year": 2022,
            "Region": "Latin America and the Caribbean",
            "Child Marriage Rate (%)": 23,
        },
        {
            "Year": 2022,
            "Region": "Oceania (excluding AUS and NZ)",
            "Child Marriage Rate (%)": 19,
        },
        {
            "Year": 2022,
            "Region": "North Africa and West Asia",
            "Child Marriage Rate (%)": 14.5,
        },
        {
            "Year": 2022,
            "Region": "East and Southeast Asia",
            "Child Marriage Rate (%)": 7.6,
        },
        {
            "Year": 2023,
            "Region": "Sub-Saharan Africa",
            "Child Marriage Rate (%)": 32,
        },
        {
            "Year": 2023,
            "Region": "South Asia",
            "Child Marriage Rate (%)": 26,
        },
        {
            "Year": 2023,
            "Region": "Latin America and the Caribbean",
            "Child Marriage Rate (%)": 23.5,
        },
        {
            "Year": 2023,
            "Region": "Oceania (excluding AUS and NZ)",
            "Child Marriage Rate (%)": 19.2,
        },
        {
            "Year": 2023,
            "Region": "North Africa and West Asia",
            "Child Marriage Rate (%)": 15,
        },
        {
            "Year": 2023,
            "Region": "East and Southeast Asia",
            "Child Marriage Rate (%)": 7.8,
        },
        {
            "Year": 2024,
            "Region": "World",
            "Child Marriage Rate (%)": 19,
        },
    ]
}

export const childMarriageEndingProjection2023 = {
    title: 'Child Marriage Rate Decline Projection (2023 Data)',
    description: 'This dataset presents the projected time required to end child marriages globally as of 2023. The data indicates that it would take an estimated 300 years to completely eliminate child marriages if current trends continue. This projection underscores the urgency of implementing effective strategies and policies to combat child marriage and protect the rights of young girls, highlighting the long-term challenges faced in achieving gender equality and safeguarding children’s rights.',
    category: 'Marriage and Family',
    data: [
        {
            "Year": 2023,
            "Years Required to End Child Marriages": 300,
        },
    ]
}

// Free Care and Housework

export const distributionOfUnpaidCareAndHouseworkHoursByYear = {
    title: 'Distribution of Unpaid Care and Housework Hours by Year',
    description: 'This dataset presents the distribution of unpaid care and housework hours for women and men over the years. The data indicates a significant increase in the number of hours women dedicate to unpaid care and housework, rising from 3 hours per day in 2000 to 7.5 hours in 2021 and maintaining that level through 2024. In contrast, men’s contributions have remained relatively stable, with only a slight increase from 1 hour in 2000 to 3 hours by 2021 and beyond. This dataset highlights the persistent gender disparities in unpaid labor and the need for policies that promote equitable sharing of household responsibilities.',
    category: 'Free Care and Housework',
    data: [
        {
            "Year": 2000,
            "Womens Hours (hours/day)": 3,
            "Mens Hours (hours/day)": 1
        },
        {
            "Year": 2010,
            "Womens Hours (hours/day)": 3,
            "Mens Hours (hours/day)": 1,
        },
        {
            "Year": 2016,
            "Womens Hours (hours/day)": 4.56,
            "Mens Hours (hours/day)": 1.92,
        },
        {
            "Year": 2021,
            "Womens Hours (hours/day)": 7.5,
            "Mens Hours (hours/day)": 3,
        },
        {
            "Year": 2022,
            "Womens Hours (hours/day)": 7.5,
            "Mens Hours (hours/day)": 3,
        },
        {
            "Year": 2024,
            "Womens Hours (hours/day)": 7.5,
            "Mens Hours (hours/day)": 3,
        },
    ]
}

export const womenChildcareHours2010To2024 = {
    title: 'Women’s Childcare Hours at Home (2010-2024)',
    description: 'This dataset outlines the number of hours women spend on childcare at home from 2010 to 2024. The data indicates a significant increase in childcare hours, particularly noted in 2020 and 2021, where the hours rose to 26 and subsequently increased to 31 hours per week following the pandemic. However, data for 2010, 2023, and 2024 remains unavailable. This dataset emphasizes the changing dynamics of childcare responsibilities among women, especially during extraordinary circumstances such as the COVID-19 pandemic.',
    category: 'Free Care and Housework',
    data: [
        {
            "Year": 2010,
            "Childcare Hours (hours/week)": null,
        },
        {
            "Year": 2016,
            "Childcare Hours (hours/week)": 19,
        },
        {
            "Year": 2020,
            "Childcare Hours (hours/week)": 26,
        },
        {
            "Year": 2021,
            "Childcare Hours (hours/week)": 26,
        },
        {
            "Year": 2021,
            "Childcare Hours (hours/week)": 31,  // Post-pandemic
        },
        {
            "Year": 2022,
            "Childcare Hours (hours/week)": 31,
        },
        {
            "Year": 2023,
            "Childcare Hours (hours/week)": '-',
        },
        {
            "Year": 2024,
            "Childcare Hours (hours/week)": '-',
        },
    ]
}

export const preAndPostPandemicUnpaidCareAndHouseworkHours = {
    title: 'Unpaid Care and Housework Hours Pre- and Post-Pandemic',
    description: 'This dataset compares the hours spent on unpaid care and housework by women and men before and after the COVID-19 pandemic. The data indicates that women increased their daily care and housework hours from 26 hours per day before the pandemic to 31 hours afterward. Meanwhile, men also saw an increase in their contributions, from 20 hours to 24 hours per day. This dataset highlights the shifting dynamics of household responsibilities during the pandemic and the need for continued focus on gender equality in domestic labor.',
    category: 'Free Care and Housework',
    data: [
        {
            "Period": "Pre-Pandemic",
            "Womens Hours (hours/day)": 26,
            "Mens Hours (hours/day)": 20,
        },
        {
            "Period": "Post-Pandemic",
            "Womens Hours (hours/day)": 31,
            "Mens Hours (hours/day)": 24,
        },
    ]
}

export const womenUnpaidCareAndHouseworkTime2010To2024 = {
    title: 'Time Women Spend on Unpaid Care and Housework (2010-2024)',
    description: 'This dataset provides the percentage of time women dedicate to unpaid care and housework from 2010 to 2024. The data indicates that, while specific figures for 2010, 2023, and 2024 are unavailable, the percentage of time spent on unpaid work has remained constant at 19% from 2016 through 2022. This consistency highlights the ongoing challenges faced by women in balancing unpaid labor with other responsibilities, emphasizing the need for policies that address gender disparities in domestic work.',
    category: 'Free Care and Housework',
    data: [
        {
            "Year": 2010,
            "Unpaid Work Time (%)": null,
        },
        {
            "Year": 2016,
            "Unpaid Work Time (%)": 19,
        },
        {
            "Year": 2020,
            "Unpaid Work Time (%)": 19,
        },
        {
            "Year": 2021,
            "Unpaid Work Time (%)": 19,
        },
        {
            "Year": 2022,
            "Unpaid Work Time (%)": 19,
        },
        {
            "Year": 2023,
            "Unpaid Work Time (%)": null,
        },
        {
            "Year": 2024,
            "Unpaid Work Time (%)": null,
        },
    ]
}

export const paidAndUnpaidWorkHoursByGenderAndRegion = {
    title: 'Women’s Paid and Unpaid Work Hours (Developing and Developed Countries)',
    description: 'This dataset provides insights into the percentages of paid and unpaid work hours for women and men across developing and developed countries. The data highlights that women in developing countries dedicate a significant portion of their time to unpaid work, with 19% allocated to unpaid tasks, compared to 10% in paid work. In contrast, men in the same regions contribute more to paid work, with 21%, while their unpaid work time is significantly lower at 5%. The dataset reflects the gender disparities in labor contributions, emphasizing the need for policies that promote equality in both paid and unpaid labor.',
    category: 'Free Care and Housework',
    data: [
        {
            "Region": "30 Developing Countries",
            "Gender": "Women",
            "Paid Work (%)": 10,
            "Unpaid Work (%)": 19,
            "Total Work Hours (%)": 30,
        },
        {
            "Region": "30 Developing Countries",
            "Gender": "Men",
            "Paid Work (%)": 21,
            "Unpaid Work (%)": 5,
            "Total Work Hours (%)": 26,
        },
        {
            "Region": "29 Developed Countries",
            "Gender": "Women",
            "Paid Work (%)": 10,
            "Unpaid Work (%)": 18,
            "Total Work Hours (%)": 29,
        },
        {
            "Region": "29 Developed Countries",
            "Gender": "Men",
            "Paid Work (%)": 16,
            "Unpaid Work (%)": 10,
            "Total Work Hours (%)": 26,
        },
        {
            "Region": "59 Countries (Overall)",
            "Gender": "Women",
            "Paid Work (%)": 10,
            "Unpaid Work (%)": 19,
            "Total Work Hours (%)": 29,
        },
        {
            "Region": "59 Countries (Overall)",
            "Gender": "Men",
            "Paid Work (%)": 19,
            "Unpaid Work (%)": 8,
            "Total Work Hours (%)": 27,
        },
    ]
}

export const genderInequalityInUnpaidCareWork = {
    title: 'Gender Inequality in Unpaid Care Work',
    description: 'This dataset illustrates the gender disparity in unpaid care work hours over the years, showing the ratio of time spent by women compared to men. The data indicates that from 2000 to 2016, women dedicated three times more time to unpaid care work than men, maintaining a consistent ratio of 3:1. However, by 2021, the ratio changed to 2.5:1, and this figure remained the same in 2022 and 2024, reflecting a slight decrease in the gender gap. This dataset highlights the persistent inequality in caregiving responsibilities between genders and underscores the need for policies that promote a more equitable distribution of unpaid labor.',
    category: 'Free Care and Housework',
    data: [
        {
            "Year": 2000,
            "Womens Time (times)": 3,
            "Mens Time (times)": 1,
        },
        {
            "Year": 2010,
            "Womens Time (times)": 3,
            "Mens Time (times)": 1,
        },
        {
            "Year": 2016,
            "Womens Time (times)": 3,
            "Mens Time (times)": 1,
        },
        {
            "Year": 2021,
            "Womens Time (times)": 2.5,
            "Mens Time (times)": 1,
        },
        {
            "Year": 2022,
            "Womens Time (times)": 2.5,
            "Mens Time (times)": 1,
        },
        {
            "Year": 2024,
            "Womens Time (times)": 2.5,
            "Mens Time (times)": 1,
        },
    ]
}

export const womenWithdrawalFromLaborForceWithYoungChildren2020 = {
    title: 'Withdrawal of Women from the Labor Force with Young Children (2020 Data)',
    description: 'This dataset provides information on the number of women who withdrew from the labor force due to having young children in 2020. The data indicates that 2 million women exited the workforce, highlighting the significant impact that childcare responsibilities have on womens employment. This trend underscores the ongoing challenges women face in balancing work and family commitments and emphasizes the need for supportive policies that facilitate women’s participation in the labor market while managing childcare responsibilities.',
    category: 'Free Care and Housework',
    data: [
        {
            "Year": 2020,
            "Number of Women (Millions)": 2,
        },
    ]
}

export const genderBasedDisadvantagesInUnpaidCareAndHousework = {
    title: 'Gender-Based Disadvantages in Unpaid Care and Housework',
    description: 'This dataset outlines the societal gender-based disadvantages in unpaid care and housework over the years. The data highlights that in 2021, women spent 2.5 times more time than men on unpaid care work. In 2022, this disparity increased, with women engaging in 3 times more unpaid care work and dedicating 3 times more time to household chores compared to men. By 2023, the accumulated responsibilities for women resulted in less available time for paid work, education, and leisure activities. This dataset emphasizes the pressing need for policies that address these disparities and promote gender equality in household responsibilities.',
    category: 'Free Care and Housework',
    data: [
        {
            "Year": 2021,
            "Disadvantages (%)": "Women spend 2.5 times more time than men.",
        },
        {
            "Year": 2022,
            "Disadvantages (%)": "Women perform 3 times more unpaid care work than men.",
        },
        {
            "Year": 2022,
            "Disadvantages (%)": "Women dedicate 3 times more time to household chores than men.",
        },
        {
            "Year": 2023,
            "Disadvantages (%)": "Women have less time for paid work, education, and leisure activities.",
        },
    ]
}

// Agricultural Lands

export const landOwnershipAndSecurityRatesByCountry2024 = {
    title: 'Land Ownership or Security Rates by Country (2024 Data)',
    description: 'This dataset presents the rates of land ownership or security in various countries as of 2024. The data indicates that one-third of countries have 50% or less of land owned or secured. Additionally, in half of the countries, women have low rates of land ownership, highlighting ongoing gender disparities in land rights. This dataset underscores the need for policies and initiatives aimed at enhancing land ownership and security for marginalized groups, particularly women, to promote economic equality and empowerment.',
    category: 'Agricultural Lands',
    data: [
        {
            "Country": "One-Third of Countries",
            "Ownership or Security (%)": "50% or less",
        },
        {
            "Country": "Half of Countries",
            "Ownership or Security (%)": "Low women's ownership",
        },
    ]
}

export const womenLandRightsProtectionStatus = {
    title: 'Women’s Land Rights Protection Status',
    description: 'This dataset outlines the percentage of legal protection for women’s land rights over the years 2022 to 2024. The data indicates a positive trend in the legal protection of women’s land rights, starting at 31% in 2022 and increasing to 50% in 2023. By 2024, this figure further rises to 58%, reflecting ongoing improvements in gender equality in land ownership and rights. This dataset highlights the importance of continued advocacy and policy reform to enhance legal protections for women in land ownership.',
    category: 'Agricultural Lands',
    data: [
        {
            "Year": 2022,
            "Legal Protection Status (%)": 31,
        },
        {
            "Year": 2023,
            "Legal Protection Status (%)": 50,
        },
        {
            "Year": 2024,
            "Legal Protection Status (%)": 58,
        },
    ]
}

export const impactOfClimateChangeOnFoodInsecurity = {
    title: 'Impact of Climate Change on Food Insecurity',
    description: 'This dataset examines the effects of climate change on food insecurity, highlighting the disparities between women and men affected by this issue in 2023. The data reveals that approximately 236 million women are impacted by food insecurity due to climate change, compared to 131 million men. This significant difference underscores the gendered nature of food insecurity and the necessity for targeted interventions that address the unique challenges faced by women in the context of climate change.',
    category: 'Agricultural Lands',
    data: [
        {
            "Year": 2023,
            "Women Affected (Millions)": 236,
            "Men Affected (Millions)": 131,
        },
    ]
}

export const legalGuaranteesForLandOwnership = {
    title: 'Legal Guarantees for Land Ownership',
    description: 'This dataset outlines the legal guarantees related to land ownership in 2021, including the requirements for joint registration, spousal consent, equal inheritance rights, and legal protection. The data indicates that 42% of countries have a requirement for joint registration, while 61% mandate spousal consent for land transactions. Additionally, 69% ensure equal inheritance rights, and 42% provide legal protection for land ownership. This dataset highlights the varying degrees of legal frameworks supporting land ownership rights and the need for continued advocacy for gender equality in land rights.',
    category: 'Agricultural Lands',
    data: [
        {
            "Year": 2021,
            "Joint Registration Requirement (%)": 42,
            "Spousal Consent Requirement (%)": 61,
            "Equal Inheritance Rights (%)": 69,
            "Legal Protection (%)": 42,
        },
    ]
}

export const womenLandOwnershipRatesSelectedCountries = {
    title: 'Women’s Land Ownership Rates (Selected Countries)',
    description: 'This dataset presents the rates of land ownership for women and men in selected countries across various years. The data highlights significant disparities in land ownership, with women in Niger having a low ownership rate of 0.3% in 2014, while Ethiopia exhibits a higher rate of 65.3% in the same year. In Nigeria and Uganda, women’s land ownership rates are notably higher in 2019, at 29.7% and 31% respectively. This dataset emphasizes the need for policies aimed at increasing women’s land ownership to promote gender equality and empower women economically.',
    category: 'Agricultural Lands',
    data: [
        {
            "Country": "Niger",
            "Year": 2014,
            "Womens Ownership Rate (%)": 0.3,
            "Mens Ownership Rate (%)": 3.6,
        },
        {
            "Country": "Burkina Faso",
            "Year": 2014,
            "Womens Ownership Rate (%)": 5.9,
            "Mens Ownership Rate (%)": 35,
        },
        {
            "Country": "Nigeria",
            "Year": 2019,
            "Womens Ownership Rate (%)": 29.7,
            "Mens Ownership Rate (%)": 59.8,
        },
        {
            "Country": "Uganda",
            "Year": 2019,
            "Womens Ownership Rate (%)": 31,
            "Mens Ownership Rate (%)": 49,
        },
        {
            "Country": "Malawi",
            "Year": 2017,
            "Womens Ownership Rate (%)": 47.1,
            "Mens Ownership Rate (%)": 41.3,
        },
        {
            "Country": "Tanzania",
            "Year": 2016,
            "Womens Ownership Rate (%)": 48.9,
            "Mens Ownership Rate (%)": 60.8,
        },
        {
            "Country": "Ethiopia",
            "Year": 2016,
            "Womens Ownership Rate (%)": 65.3,
            "Mens Ownership Rate (%)": 69.4,
        },
        {
            "Country": "Peru",
            "Year": 2018,
            "Womens Ownership Rate (%)": 8.0,
            "Mens Ownership Rate (%)": 18.6,
        },
        {
            "Country": "India",
            "Year": 2012,
            "Womens Ownership Rate (%)": 6.3,
            "Mens Ownership Rate (%)": 39.8,
        },
        {
            "Country": "Cambodia",
            "Year": 2009,
            "Womens Ownership Rate (%)": 30.3,
            "Mens Ownership Rate (%)": 34,
        },
    ]
}

// Mobile Phone Ownership

export const mobilePhoneOwnershipGenderDifferences = {
    title: 'Differences in Mobile Phone Ownership between Women and Men',
    description: 'This dataset presents the differences in mobile phone ownership rates between women and men from 2022 to 2024. The data shows that in 2022, women’s mobile phone ownership was at 61%, while men’s ownership was higher at 73%, resulting in a difference of -12%. In 2023, women’s ownership increased to 65%, but the gap remained at -8%. By 2024, women’s ownership further increased to 70%, with men’s ownership at 78%, maintaining the same difference of -8%. This dataset highlights the ongoing gender disparity in mobile phone ownership and underscores the need for targeted initiatives to promote equitable access to technology.',
    category: 'Mobile Phone Ownership',
    data: [
        {
            "Year": 2022,
            "Womens Mobile Phone Ownership (%)": 61,
            "Mens Mobile Phone Ownership (%)": 73,
            "Difference (%)": -12,
        },
        {
            "Year": 2023,
            "Womens Mobile Phone Ownership (%)": 65,
            "Mens Mobile Phone Ownership (%)": 73,
            "Difference (%)": -8,
        },
        {
            "Year": 2024,
            "Womens Mobile Phone Ownership (%)": 70,
            "Mens Mobile Phone Ownership (%)": 78,
            "Difference (%)": -8,
        },
    ]
}

export const countriesAchievingGenderEquality = {
    title: 'Countries Achieving Gender Equality',
    description: 'This dataset provides the number of countries that have achieved gender equality from 2022 to 2023. The data indicates that in 2022, 30 countries were recognized for achieving gender equality, which slightly increased to 31 countries in 2023. This dataset highlights the ongoing progress in promoting gender equality globally and underscores the importance of continued efforts and policies aimed at fostering equality in all aspects of society.',
    category: 'Mobile Phone Ownership',
    data: [
        {
            "Year": 2022,
            "Number of Countries Achieving Equality": 30,
        },
        {
            "Year": 2023,
            "Number of Countries Achieving Equality": 31,
        },
    ]
}

// Allocating Resources to Gender Equality

export const genderEqualityResourceAllocationSystems = {
    title: 'Resource Allocation Systems for Gender Equality by Year',
    description: 'This dataset presents the percentages of countries following resource allocation systems for gender equality, partial systems, and those without any systems in place for the year 2024. The data shows that 26% of countries have implemented resource allocation systems aimed at promoting gender equality, while 59% have adopted partial systems. Additionally, 15% of countries lack any system for resource allocation related to gender equality. This dataset highlights the varying levels of commitment among countries to address gender disparities and underscores the need for enhanced policies and frameworks to support gender equality.',
    category: 'Allocating Resources to Gender Equality',
    data: [
        {
            "Year": 2024,
            "Percentage of Countries Following Resource Allocation System (%)": 26,
            "Percentage of Countries with Partial System (%)": 59,
            "Percentage of Countries without System (%)": 15,
        },
    ]
}

export const definitionsOfViolenceAgainstWomenAndRape = {
    title: 'Definitions of Violence Against Women and Rape',
    description: 'This dataset provides insights into the legislative landscape regarding violence against women and definitions of consent-based rape as of 2022. The data shows that 83% of countries have laws addressing violence against women, indicating a significant global commitment to tackling this issue. However, 63% of countries lack a definition of consent-based rape, highlighting a critical gap in legal frameworks that could protect victims and promote gender equality. This dataset underscores the need for comprehensive legal reforms to address violence against women effectively.',
    category: 'Allocating Resources to Gender Equality',
    data: [
        {
            "Year": 2022,
            "Percentage of Countries with Laws Addressing Violence Against Women (%)": 83,
            "Percentage of Countries without Consent-Based Rape Definition (%)": 63,
        },
    ]
}

export const dataMonitoringCapacityForSDG5 = {
    title: 'Data Monitoring Capacity for SDG 5',
    description: 'This dataset provides information on the percentage of countries lacking data monitoring capacity for Sustainable Development Goal 5 (SDG 5) as of 2023. The data indicates that 44% of countries do not have the necessary capabilities to effectively monitor progress toward achieving gender equality and empowering all women and girls. This highlights a significant gap in data availability and monitoring, which is essential for informed decision-making and policy implementation to advance gender equality.',
    category: 'Allocating Resources to Gender Equality',
    data: [
        {
            "Year": 2023,
            "Percentage of Countries without Data Monitoring Capacity (%)": 44,
        },
    ]
}

export const impactOfClimateChangeOnWomen = {
    title: 'Impact of Climate Change on Women',
    description: 'This dataset examines the risk of extreme poverty faced by women due to climate change, providing data for the years 2023 and 2024. In 2023, approximately 158.3 million women were at risk of extreme poverty as a result of climate change impacts. However, this number significantly decreases to 43.3 million in 2024, indicating potential improvements or effective interventions. This dataset underscores the critical need for gender-sensitive climate policies and actions to mitigate the adverse effects of climate change on women’s socioeconomic status.',
    category: 'Allocating Resources to Gender Equality',
    data: [
        {
            "Year": 2023,
            "Women at Risk of Extreme Poverty (Millions)": 158.3,
        },
        {
            "Year": 2024,
            "Women at Risk of Extreme Poverty (Millions)": 43.3,
        },
    ]
}

export const budgetingSystemsForGenderEqualityRegionalDistribution2019 = {
    title: 'Budgeting Systems for Gender Equality - Regional Distribution (2019)',
    description: 'This dataset provides insights into the regional distribution of budgeting systems for gender equality in 2019. The data indicates that in Europe and North America, 17% of countries fully meet gender budgeting standards, while 83% are approaching these standards. In Sub-Saharan Africa, 11% fully meet the criteria, with 67% approaching them. Latin America and the Caribbean show similar figures, with 11% fully compliant and 78% nearing compliance. The global average reveals that 19% of countries fully meet gender budgeting standards, 59% are close to meeting them, and 22% do not meet the standards at all. This dataset highlights the varying degrees of commitment across regions toward achieving gender equality through effective budgeting practices.',
    category: 'Allocating Resources to Gender Equality',
    data: [
        {
            "Region": "Europe and North America",
            "Fully Compliant (%)": 17,
            "Approaching (%)": 83,
            "Not Compliant (%)": null,
        },
        {
            "Region": "Sub-Saharan Africa",
            "Fully Compliant (%)": 11,
            "Approaching (%)": 67,
            "Not Compliant (%)": null,
        },
        {
            "Region": "Latin America and the Caribbean",
            "Fully Compliant (%)": 11,
            "Approaching (%)": 78,
            "Not Compliant (%)": null,
        },
        {
            "Region": "Global Average",
            "Fully Compliant (%)": 19,
            "Approaching (%)": 59,
            "Not Compliant (%)": 22,
        },
    ]
}

// Work

export const equalPayForEqualWorkPrinciple = {
    title: 'Equal Pay for Equal Work Principle',
    description: 'This dataset provides information on the percentage of countries that have a legal requirement for the principle of equal pay for equal work as of 2023. The data indicates that 45% of countries have implemented this principle, reflecting a significant, yet insufficient, commitment to ensuring gender equality in the workforce. This dataset underscores the ongoing challenges and the need for further advocacy and policies to promote fair compensation and eliminate gender pay gaps.',
    category: 'Work',
    data: [
        {
            "Year": 2023,
            "Equal Pay Principle Requirement (%)": 45,
        },
    ]
}

export const womenWithdrawalFromLaborForce = {
    title: 'Women’s Withdrawal from the Labor Force',
    description: 'This dataset provides information on the number of women who withdrew from the labor force in 2022. The data indicates that approximately 100 million women exited the workforce, highlighting significant challenges related to employment, economic security, and gender equality. This dataset emphasizes the need for targeted policies and initiatives to support women in maintaining their participation in the labor market and to address the underlying factors contributing to their withdrawal.',
    category: 'Work',
    data: [
        {
            "Year": 2022,
            "Number of Women Withdrawing from Labor Force (Millions)": 100,
        },
    ]
}

export const globalMedicalStaffGenderDistribution = {
    title: 'Global Medical Staff Gender Distribution',
    description: 'This dataset provides information on the percentage of female medical staff globally as of 2020. The data indicates that women comprise 75% of the medical workforce, reflecting significant female representation in the healthcare sector. This dataset highlights the essential contributions of women in healthcare and underscores the importance of promoting gender equality within medical professions, ensuring diverse perspectives and equitable practices in healthcare delivery.',
    category: 'Work',
    data: [
        {
            "Year": 2020,
            "Percentage of Female Medical Staff (%)": 75,
        },
    ]
}

// Reproductive Health

export const femaleGenitalMutilationStatistics = {
    title: 'Female Genital Mutilation Statistics',
    description: 'This dataset provides information on the number of women who have been subjected to female genital mutilation (FGM) over the years. In 2019 and 2022, approximately 200 million women were reported to have undergone FGM. However, in 2023, this number increased to 230 million, indicating a concerning trend. This dataset highlights the ongoing challenge of addressing FGM globally and the urgent need for continued advocacy, education, and policy efforts to eradicate this harmful practice and protect the rights and health of women and girls.',
    category: 'Reproductive Health',
    data: [
        {
            "Year": 2019,
            "Number of Women Subjected to FGM (Millions)": 200,
        },
        {
            "Year": 2022,
            "Number of Women Subjected to FGM (Millions)": 200,
        },
        {
            "Year": 2023,
            "Number of Women Subjected to FGM (Millions)": 230,
        },
    ]
}

export const femaleGenitalMutilationRates = {
    title: 'Rates of Female Genital Mutilation',
    description: 'This dataset provides the percentage of girls who have undergone female genital mutilation (FGM) from 1985 to 2015. The data indicates a gradual decline in the prevalence of FGM over the years, starting from 51% in 1985 and decreasing to 37% by 2015. This trend highlights the ongoing efforts to combat this practice, although it remains a significant issue affecting many girls worldwide. Continued advocacy, education, and policy reforms are essential to further reduce these rates and protect the rights and health of girls.',
    category: 'Reproductive Health',
    data: [
        {
            "Year": 1985,
            "Percentage of Girls Undergoing FGM (%)": 51,
        },
        {
            "Year": 1990,
            "Percentage of Girls Undergoing FGM (%)": 49,
        },
        {
            "Year": 1995,
            "Percentage of Girls Undergoing FGM (%)": 48,
        },
        {
            "Year": 2000,
            "Percentage of Girls Undergoing FGM (%)": 46,
        },
        {
            "Year": 2005,
            "Percentage of Girls Undergoing FGM (%)": 44,
        },
        {
            "Year": 2010,
            "Percentage of Girls Undergoing FGM (%)": 41,
        },
        {
            "Year": 2015,
            "Percentage of Girls Undergoing FGM (%)": 37,
        },
    ]
}

export const womenDecisionMakingRightsInSexualAndReproductiveHealth = {
    title: 'Women’s Decision-Making Rate on Sexual and Reproductive Health Rights',
    description: 'This dataset provides information on the percentage of women who have decision-making authority regarding their sexual and reproductive health rights from 2017 to 2023. The data shows a gradual increase in women’s decision-making power, starting from 52% in 2017 and reaching 57% in both 2021 and 2022. However, there is a slight decrease to 56% in 2023. This dataset highlights the progress made towards empowering women in their reproductive health decisions while also indicating the need for continued efforts to enhance women’s rights and agency in this critical area.',
    category: 'Reproductive Health',
    data: [
        {
            "Year": 2017,
            "Percentage of Women with Decision-Making Authority (%)": 52,
        },
        {
            "Year": 2020,
            "Percentage of Women with Decision-Making Authority (%)": 55,
        },
        {
            "Year": 2021,
            "Percentage of Women with Decision-Making Authority (%)": 57,
        },
        {
            "Year": 2022,
            "Percentage of Women with Decision-Making Authority (%)": 57,
        },
        {
            "Year": 2023,
            "Percentage of Women with Decision-Making Authority (%)": 56,
        },
    ]
}

export const legalStatusGuaranteeingSexualAndReproductiveHealthRights = {
    title: 'Legal Status Guaranteeing Sexual and Reproductive Health Rights',
    description: 'This dataset outlines the percentage of countries with legal frameworks that guarantee sexual and reproductive health rights as of 2020 and 2023. In 2020, 73% of countries had legal protections in place, which increased to 76% by 2023. This data highlights the progress made in recognizing and ensuring sexual and reproductive health rights globally, while also underscoring the need for continued efforts to strengthen legal protections and ensure access to these essential rights for all individuals.',
    category: 'Reproductive Health',
    data: [
        {
            "Year": 2020,
            "Legal Status Rate (%)": 73,
        },
        {
            "Year": 2023,
            "Legal Status Rate (%)": 76,
        },
    ]
}

export const accessToSexualHealthRights = {
    title: 'Access to Sexual Health Rights',
    description: 'This dataset provides information on access to sexual health rights, specifically focusing on the percentage of complete access and access to abortion services in 2022. The data indicates that 76% of individuals had complete access to sexual health rights, while access to abortion services was reported at 63%. This dataset highlights the importance of ensuring comprehensive access to sexual health services, including abortion, to uphold reproductive rights and promote the health and well-being of individuals.',
    category: 'Reproductive Health',
    data: [
        {
            "Year": 2022,
            "Complete Access Rate (%)": 76,
            "Abortion Access Rate (%)": 63,
        },
    ]
}

export const regionalDistributionOfFemaleGenitalMutilation = {
    title: 'Regional Distribution of Female Genital Mutilation',
    description: 'This dataset presents the regional distribution of female genital mutilation (FGM) rates. In Sub-Saharan Africa, the FGM rate is reported at 24.7%. Additionally, in a study of 30 countries, the minimum reported rate of FGM is 20%. The 2018 data indicates a rate of 25%, suggesting a decline in prevalence. This dataset underscores the need for continued efforts to combat FGM and protect the rights and health of women and girls in affected regions.',
    category: 'Reproductive Health',
    data: [
        {
            "Region": "Sub-Saharan Africa",
            "FGM Rate (%)": 24.7,
        },
        {
            "Region": "30 Countries",
            "FGM Rate (%)": 20, // minimum rate
        },
        {
            "Year": 2018,
            "FGM Rate (%)": 25, // indicating a decrease
        },
    ]
}

export const adolescentFertilityRates = {
    title: 'Adolescent Fertility Rates',
    description: 'This dataset presents the adolescent fertility rates per 1,000 girls for selected regions in the years 2000 and 2015. The data indicates a significant decline in adolescent fertility rates in regions such as Australia and New Zealand (from 20.0 in 2000 to 15.8 in 2015) and Europe and North America (from 28.7 to 16.8). However, in regions like East and Southeast Asia, the rate increased slightly from 19.0 to 21.0. South Asia shows a notable decline from 70.0 to 33.3, while North Africa and West Asia also decreased from 50.7 to 42.2. In Oceania, the rate fell from 60.6 to 49.9, and Latin America and the Caribbean decreased from 81.1 to 64.1. Data for Sub-Saharan Africa is not available. This dataset highlights the varying trends in adolescent fertility rates across regions and emphasizes the need for continued efforts to address reproductive health and education for young girls.',
    category: 'Reproductive Health',
    data: [
        {
            "Region": "Australia and New Zealand",
            "2000 (per 1,000 girls)": 20.0,
            "2015 (per 1,000 girls)": 15.8,
        },
        {
            "Region": "Europe and North America",
            "2000 (per 1,000 girls)": 28.7,
            "2015 (per 1,000 girls)": 16.8,
        },
        {
            "Region": "East and Southeast Asia",
            "2000 (per 1,000 girls)": 19.0,
            "2015 (per 1,000 girls)": 21.0,
        },
        {
            "Region": "South Asia",
            "2000 (per 1,000 girls)": 70.0,
            "2015 (per 1,000 girls)": 33.3,
        },
        {
            "Region": "North Africa and West Asia",
            "2000 (per 1,000 girls)": 50.7,
            "2015 (per 1,000 girls)": 42.2,
        },
        {
            "Region": "Oceania",
            "2000 (per 1,000 girls)": 60.6,
            "2015 (per 1,000 girls)": 49.9,
        },
        {
            "Region": "Latin America and the Caribbean",
            "2000 (per 1,000 girls)": 81.1,
            "2015 (per 1,000 girls)": 64.1,
        },
        {
            "Region": "Sub-Saharan Africa",
            "2000 (per 1,000 girls)": null,
            "2015 (per 1,000 girls)": null,
        },
    ]
}

export const womenDecisionMakingRightsInSexualAndReproductiveHealthByRegion = {
    title: 'Women’s Decision-Making Rights in Sexual and Reproductive Health',
    description: 'This dataset provides the percentage of women who can make their own decisions regarding sexual and reproductive health across various regions and countries. The data shows significant regional differences in women’s decision-making rights. For instance, in Europe, Ukraine has the highest rate at 81.0%, while in West Africa, Mali shows a very low rate of 6.5%. This dataset underscores the varying degrees of empowerment among women globally and highlights the need for targeted interventions to improve women’s agency in their health decisions.',
    category: 'Reproductive Health',
    data: [
        {
            "Region": "Europe",
            "Country": "Albania",
            "Decision-Making Rate (%)": 61.5,
        },
        {
            "Region": "Europe",
            "Country": "Ukraine",
            "Decision-Making Rate (%)": 81.0,
        },
        {
            "Region": "Latin America and the Caribbean",
            "Country": "Dominican Republic",
            "Decision-Making Rate (%)": 77.0,
        },
        {
            "Region": "Latin America and the Caribbean",
            "Country": "Guyana",
            "Decision-Making Rate (%)": 71.3,
        },
        {
            "Region": "Latin America and the Caribbean",
            "Country": "Haiti",
            "Decision-Making Rate (%)": 56.3,
        },
        {
            "Region": "Latin America and the Caribbean",
            "Country": "Honduras",
            "Decision-Making Rate (%)": 70.3,
        },
        {
            "Region": "Asia",
            "Country": "Armenia",
            "Decision-Making Rate (%)": 64.3,
        },
        {
            "Region": "Asia",
            "Country": "Cambodia",
            "Decision-Making Rate (%)": 75.6,
        },
        {
            "Region": "Asia",
            "Country": "Jordan",
            "Decision-Making Rate (%)": 72.6,
        },
        {
            "Region": "Asia",
            "Country": "Kyrgyzstan",
            "Decision-Making Rate (%)": 76.6,
        },
        {
            "Region": "Asia",
            "Country": "Nepal",
            "Decision-Making Rate (%)": 59.5,
        },
        {
            "Region": "Asia",
            "Country": "Tajikistan",
            "Decision-Making Rate (%)": 40.9,
        },
        {
            "Region": "West Africa",
            "Country": "Benin",
            "Decision-Making Rate (%)": 38.2,
        },
        {
            "Region": "West Africa",
            "Country": "Burkina Faso",
            "Decision-Making Rate (%)": 20.3,
        },
        {
            "Region": "West Africa",
            "Country": "Ivory Coast",
            "Decision-Making Rate (%)": 25.2,
        },
        {
            "Region": "West Africa",
            "Country": "Gambia",
            "Decision-Making Rate (%)": 40.5,
        },
        {
            "Region": "West Africa",
            "Country": "Ghana",
            "Decision-Making Rate (%)": 52.0,
        },
        {
            "Region": "West Africa",
            "Country": "Guinea",
            "Decision-Making Rate (%)": 22.7,
        },
        {
            "Region": "West Africa",
            "Country": "Liberia",
            "Decision-Making Rate (%)": 67.2,
        },
        {
            "Region": "West Africa",
            "Country": "Mali",
            "Decision-Making Rate (%)": 6.5,
        },
        {
            "Region": "West Africa",
            "Country": "Niger",
            "Decision-Making Rate (%)": 7.3,
        },
        {
            "Region": "West Africa",
            "Country": "Nigeria",
            "Decision-Making Rate (%)": 50.8,
        },
        {
            "Region": "West Africa",
            "Country": "Senegal",
            "Decision-Making Rate (%)": 3.4,
        },
        {
            "Region": "West Africa",
            "Country": "Sierra Leone",
            "Decision-Making Rate (%)": 40.2,
        },
        {
            "Region": "West Africa",
            "Country": "Togo",
            "Decision-Making Rate (%)": 29.6,
        },
        {
            "Region": "Southern Africa",
            "Country": "Lesotho",
            "Decision-Making Rate (%)": 60.9,
        },
        {
            "Region": "Southern Africa",
            "Country": "Namibia",
            "Decision-Making Rate (%)": 71.2,
        },
        {
            "Region": "Southern Africa",
            "Country": "Swaziland",
            "Decision-Making Rate (%)": 48.9,
        },
        {
            "Region": "Central Africa",
            "Country": "Cameroon",
            "Decision-Making Rate (%)": 16.8,
        },
        {
            "Region": "Central Africa",
            "Country": "Chad",
            "Decision-Making Rate (%)": 11.6,
        },
        {
            "Region": "Central Africa",
            "Country": "Congo",
            "Decision-Making Rate (%)": 26.8,
        },
        {
            "Region": "Central Africa",
            "Country": "Democratic Republic of the Congo",
            "Decision-Making Rate (%)": 30.7,
        },
        {
            "Region": "Central Africa",
            "Country": "Gabon",
            "Decision-Making Rate (%)": 48.0,
        },
        {
            "Region": "East Africa",
            "Country": "Burundi",
            "Decision-Making Rate (%)": 49.0,
        },
        {
            "Region": "East Africa",
            "Country": "Comoros",
            "Decision-Making Rate (%)": 20.8,
        },
        {
            "Region": "East Africa",
            "Country": "Ethiopia",
            "Decision-Making Rate (%)": 53.4,
        },
        {
            "Region": "East Africa",
            "Country": "Kenya",
            "Decision-Making Rate (%)": 56.0,
        },
        {
            "Region": "East Africa",
            "Country": "Madagascar",
            "Decision-Making Rate (%)": 35.9,
        },
        {
            "Region": "East Africa",
            "Country": "Malawi",
            "Decision-Making Rate (%)": 42.2,
        },
        {
            "Region": "East Africa",
            "Country": "Mozambique",
            "Decision-Making Rate (%)": 49.1,
        },
        {
            "Region": "East Africa",
            "Country": "Rwanda",
            "Decision-Making Rate (%)": 69.5,
        },
        {
            "Region": "East Africa",
            "Country": "Uganda",
            "Decision-Making Rate (%)": 49.0,
        },
        {
            "Region": "East Africa",
            "Country": "Tanzania",
            "Decision-Making Rate (%)": 46.8,
        },
        {
            "Region": "East Africa",
            "Country": "Zambia",
            "Decision-Making Rate (%)": 46.6,
        },
        {
            "Region": "East Africa",
            "Country": "Zimbabwe",
            "Decision-Making Rate (%)": 59.9,
        },
    ]
}

// Maternity Leave

export const maternityLeaveStatisticsByCountry = {
    title: 'Maternity Leave Provision Statistics by Country',
    description: 'This dataset provides an overview of maternity leave provisions across countries. It indicates that a total of 119 countries offer maternity leave, while only 40% of these countries comply with International Labour Organization (ILO) standards for maternity leave. This dataset highlights the importance of maternity leave policies for promoting gender equality and supporting working mothers, as well as the need for more countries to adhere to ILO standards to ensure adequate support for women during and after pregnancy.',
    category: 'Maternity Leave',
    data: [
        {
            "Country": "Total Countries",
            "Provides Maternity Leave (Yes/No)": "Yes",
            "Compliance with ILO Standards (%)": 40,
        },
    ]
}

// Violence Against

export const violenceAgainstWomenRates = {
    title: 'Rates of Violence Against Women',
    description: 'This dataset presents the rates of violence against women over the years, highlighting different contexts and age groups. In 2000, the rate was 35%, indicating the proportion of women who experienced violence from their partners throughout their lives. By 2016, this rate decreased to 21%, reflecting the percentage of women aged 15-49 who faced violence from a partner. In 2017, the rate further decreased to 19% for the same age group. However, in 2018, the rate rose to 31%, once again capturing the lifetime experience of violence. The years 2019 and 2020 reported an 18% rate of violence among women aged 15-49 within the last 12 months. In 2021, the rate increased to 30%, indicating that a significant portion of women aged 15 and older had experienced violence at least once. The rate dropped to 12.5% in 2022 for women aged 15-49 who faced violence in the last year. Additionally, the same year noted that 641 million women aged 15 and older had experienced violence at some point in their lives. This dataset underscores the ongoing issue of violence against women and the need for comprehensive strategies to combat it.',
    category: 'Violence Against',
    data: [
        {
            "Year": 2000,
            "Violence Rate (%)": 35,
            "Description": "Women experiencing violence from partners throughout their lives.",
        },
        {
            "Year": 2016,
            "Violence Rate (%)": 21,
            "Description": "Percentage of women aged 15-49 experiencing partner violence.",
        },
        {
            "Year": 2017,
            "Violence Rate (%)": 19,
            "Description": "Percentage of women aged 15-49 experiencing partner violence.",
        },
        {
            "Year": 2018,
            "Violence Rate (%)": 31,
            "Description": "Women experiencing violence from partners throughout their lives.",
        },
        {
            "Year": 2019,
            "Violence Rate (%)": 18,
            "Description": "Percentage of women aged 15-49 who experienced violence in the last 12 months.",
        },
        {
            "Year": 2020,
            "Violence Rate (%)": 18,
            "Description": "Percentage of women aged 15-49 who experienced violence in the last 12 months.",
        },
        {
            "Year": 2021,
            "Violence Rate (%)": 30,
            "Description": "Percentage of women aged 15 and older who have experienced violence at least once.",
        },
        {
            "Year": 2022,
            "Violence Rate (%)": 12.5,
            "Description": "Percentage of women aged 15-49 who experienced violence in the last year.",
        },
        {
            "Year": 2022,
            "Violence Rate (%)": null,
            "Description": "641 million women (aged 15 and older) have experienced violence at some point in their lives.",
        },
    ]
}

export const sexualAndPhysicalViolenceReportingRates = {
    title: 'Reporting Rates of Sexual and Physical Violence',
    description: 'This dataset provides information on the reporting rates of sexual and physical violence against women over the years. In 2022, 45% of women reported experiencing violence themselves or knowing someone who has experienced violence, according to a UN Women survey conducted after the pandemic. In 2020, fewer than 40% of victims sought help, indicating significant barriers to reporting and accessing support services. The 2018 data reveals that 21% of women aged 15-49 reported experiencing physical and/or sexual violence by a partner. This dataset underscores the importance of increasing awareness and access to support for victims of violence and enhancing reporting mechanisms.',
    category: 'Violence Against',
    data: [
        {
            "Year": 2022,
            "Reporting Rate (%)": 45,
            "Description": "According to a UN Women survey, 45% of women reported experiencing violence or knowing someone who has experienced violence after the pandemic.",
        },
        {
            "Year": 2020,
            "Reporting Rate (%)": "< 40",
            "Description": "Fewer than 40% of victims sought help.",
        },
        {
            "Year": 2018,
            "Reporting Rate (%)": 21,
            "Description": "21% of women aged 15-49 reported experiencing physical and/or sexual violence by a partner.",
        },
    ]
}

export const regionalDistributionOfViolenceAgainstWomen = {
    title: 'Regional Distribution of Violence Against Women',
    description: 'This dataset outlines the regional distribution of violence against women, providing insight into the prevalence of violence across different areas. In South Asia, the violence rate is reported at 23%, while Sub-Saharan Africa follows closely with a rate of 21.5%. Latin America and the Caribbean have a lower rate at 11.8%, and Europe reports the lowest at 6.1%. Least developed countries have a higher rate of 24.3%, and landlocked developing countries show a rate of 22%. Small island developing states have a rate of 15.5%, and Oceania (excluding Australia and New Zealand) reports 15.7%. Finally, North Africa and West Asia have a violence rate of 14.0%. This dataset emphasizes the urgent need for tailored interventions and policies to address and reduce violence against women in these regions.',
    category: 'Violence Against',
    data: [
        {
            "Region": "South Asia",
            "Violence Rate (%)": 23,
        },
        {
            "Region": "Sub-Saharan Africa",
            "Violence Rate (%)": 21.5,
        },
        {
            "Region": "Latin America and the Caribbean",
            "Violence Rate (%)": 11.8,
        },
        {
            "Region": "Europe",
            "Violence Rate (%)": 6.1,
        },
        {
            "Region": "Least Developed Countries",
            "Violence Rate (%)": 24.3,
        },
        {
            "Region": "Landlocked Developing Countries",
            "Violence Rate (%)": 22,
        },
        {
            "Region": "Small Island Developing States",
            "Violence Rate (%)": 15.5,
        },
        {
            "Region": "Oceania (excluding Australia and New Zealand)",
            "Violence Rate (%)": 15.7,
        },
        {
            "Region": "North Africa and West Asia",
            "Violence Rate (%)": 14.0,
        },
    ]
}

export const womenExperiencingViolenceByAgeGroup = {
    title: 'Percentage of Women Experiencing Violence by Age Group',
    description: 'This dataset presents the percentage of women who have experienced violence across different age groups. The data shows that the rate of violence exposure increases with age, peaking at 28% for women aged 30-34 and 35-39. The rates are as follows: 24% for ages 15-19, 26% for 20-24, 27% for 25-29, and remaining at 28% for both 30-34 and 35-39 age groups. The rates then decline slightly to 27% for 40-44, 26% for 45-49, 25% for 50-54, and 24% for 55-59. The lowest rates are observed in the 60-64 and 65+ age groups, both at 23%. This dataset underscores the persistent issue of violence against women across all age groups and highlights the importance of targeted interventions.',
    category: 'Violence Against',
    data: [
        {
            "Age Group": "15-19 years",
            "Percentage Experiencing Violence (%)": 24,
        },
        {
            "Age Group": "20-24 years",
            "Percentage Experiencing Violence (%)": 26,
        },
        {
            "Age Group": "25-29 years",
            "Percentage Experiencing Violence (%)": 27,
        },
        {
            "Age Group": "30-34 years",
            "Percentage Experiencing Violence (%)": 28,
        },
        {
            "Age Group": "35-39 years",
            "Percentage Experiencing Violence (%)": 28,
        },
        {
            "Age Group": "40-44 years",
            "Percentage Experiencing Violence (%)": 27,
        },
        {
            "Age Group": "45-49 years",
            "Percentage Experiencing Violence (%)": 26,
        },
        {
            "Age Group": "50-54 years",
            "Percentage Experiencing Violence (%)": 25,
        },
        {
            "Age Group": "55-59 years",
            "Percentage Experiencing Violence (%)": 24,
        },
        {
            "Age Group": "60-64 years",
            "Percentage Experiencing Violence (%)": 23,
        },
        {
            "Age Group": "65+ years",
            "Percentage Experiencing Violence (%)": 23,
        },
    ]
}

export const percentageOfWomenExperiencingViolenceInLast12Months = {
    title: 'Percentage of Women Experiencing Violence in the Last 12 Months by Age Group',
    description: 'This dataset presents the percentage of women who have experienced violence in the last 12 months across different age groups. The data indicates that 16% of women aged 15-19 and 20-24 reported experiencing violence during this period. The percentage decreases with age, showing 15% for the 25-29 age group, 13% for 30-34, and 12% for both 35-39 and 40-44 age groups. The rates continue to decline to 8% for women aged 45-49, 7% for 50-54, 6% for 55-59, 5% for 60-64, and the lowest at 4% for women aged 65 and older. This dataset highlights the prevalence of violence against women and the need for targeted interventions to protect vulnerable populations across all age groups.',
    category: 'Violence Against',
    data: [
        {
            "Age Group": "15-19 years",
            "Percentage Experiencing Violence in Last 12 Months (%)": 16,
        },
        {
            "Age Group": "20-24 years",
            "Percentage Experiencing Violence in Last 12 Months (%)": 16,
        },
        {
            "Age Group": "25-29 years",
            "Percentage Experiencing Violence in Last 12 Months (%)": 15,
        },
        {
            "Age Group": "30-34 years",
            "Percentage Experiencing Violence in Last 12 Months (%)": 13,
        },
        {
            "Age Group": "35-39 years",
            "Percentage Experiencing Violence in Last 12 Months (%)": 12,
        },
        {
            "Age Group": "40-44 years",
            "Percentage Experiencing Violence in Last 12 Months (%)": 12,
        },
        {
            "Age Group": "45-49 years",
            "Percentage Experiencing Violence in Last 12 Months (%)": 8,
        },
        {
            "Age Group": "50-54 years",
            "Percentage Experiencing Violence in Last 12 Months (%)": 7,
        },
        {
            "Age Group": "55-59 years",
            "Percentage Experiencing Violence in Last 12 Months (%)": 6,
        },
        {
            "Age Group": "60-64 years",
            "Percentage Experiencing Violence in Last 12 Months (%)": 5,
        },
        {
            "Age Group": "65+ years",
            "Percentage Experiencing Violence in Last 12 Months (%)": 4,
        },
    ]
}

export const successRatesForViolenceAgainstWomenTargets = {
    title: 'Success Rates for Violence Against Women Targets',
    description: 'This dataset outlines the success rates for achieving targets related to violence against women across various regions. The overall average success rate is reported at 78%, with a gap of 22%. Australia and New Zealand lead with a high success rate of 96% and a minimal gap of 4%. In contrast, North Africa and West Asia have a lower success rate of 63%, with a significant gap of 37%. Other regions, such as East and Southeast Asia, report a success rate of 74% and a gap of 26%. This dataset highlights the disparities in progress toward addressing violence against women and the urgent need for targeted interventions in regions with lower success rates.',
    category: 'Violence Against',
    data: [
        {
            "Region": "General Average",
            "Success Rate (%)": 78,
            "Success Gap (%)": 22,
        },
        {
            "Region": "Australia and New Zealand",
            "Success Rate (%)": 96,
            "Success Gap (%)": 4,
        },
        {
            "Region": "Central and South Asia",
            "Success Rate (%)": 83,
            "Success Gap (%)": 17,
        },
        {
            "Region": "East and Southeast Asia",
            "Success Rate (%)": 74,
            "Success Gap (%)": 26,
        },
        {
            "Region": "Europe and North America",
            "Success Rate (%)": 83,
            "Success Gap (%)": 17,
        },
        {
            "Region": "Latin America and the Caribbean",
            "Success Rate (%)": 84,
            "Success Gap (%)": 16,
        },
        {
            "Region": "North Africa and West Asia",
            "Success Rate (%)": 63,
            "Success Gap (%)": 37,
        },
        {
            "Region": "Sub-Saharan Africa",
            "Success Rate (%)": 66,
            "Success Gap (%)": 34,
        },
    ]
}

export const violenceAgainstWomenAndGirlsRates = {
    title: 'Rates of Violence Against Women and Girls (2005-2016)',
    description: 'This dataset provides the percentage of women and girls who have experienced physical or sexual violence across various regions and countries from 2005 to 2016. The data indicates significant variation in violence rates, with Afghanistan reporting a high rate of 46.1%, while countries like Maldivler show a much lower rate of 6.4%. In South Asia, the rates vary from 22.4% in Bangladesh to 23.0% in India. The dataset also highlights violence rates in Latin America, with Bolivia at 24.2% and Colombia at 37.4%. European countries generally report lower rates, with Austria at 4.0% and several others between 4.0% and 9.0%. This dataset underscores the need for targeted interventions to address and reduce violence against women and girls globally.',
    category: 'Violence Against',
    data: [
        {
            "Region": "Asia",
            "Country": "Afghanistan",
            "Violence Rate (%)": 46.1,
        },
        {
            "Region": "Asia",
            "Country": "Bangladesh",
            "Violence Rate (%)": 22.4,
        },
        {
            "Region": "Asia",
            "Country": "India",
            "Violence Rate (%)": 23.0,
        },
        {
            "Region": "Asia",
            "Country": "Kyrgyzstan",
            "Violence Rate (%)": 17.1,
        },
        {
            "Region": "Asia",
            "Country": "Maldives",
            "Violence Rate (%)": 6.4,
        },
        {
            "Region": "Asia",
            "Country": "Nepal",
            "Violence Rate (%)": 14.3,
        },
        {
            "Region": "Asia",
            "Country": "Tajikistan",
            "Violence Rate (%)": 15.2,
        },
        {
            "Region": "Southeast Asia",
            "Country": "Cambodia",
            "Violence Rate (%)": 10.9,
        },
        {
            "Region": "Southeast Asia",
            "Country": "Philippines",
            "Violence Rate (%)": 7.1,
        },
        {
            "Region": "Southeast Asia",
            "Country": "Timor-Leste",
            "Violence Rate (%)": 30.4,
        },
        {
            "Region": "Latin America and the Caribbean",
            "Country": "Bolivia",
            "Violence Rate (%)": 24.2,
        },
        {
            "Region": "Latin America and the Caribbean",
            "Country": "Colombia",
            "Violence Rate (%)": 37.4,
        },
        {
            "Region": "Latin America and the Caribbean",
            "Country": "Dominican Republic",
            "Violence Rate (%)": 16.0,
        },
        {
            "Region": "Latin America and the Caribbean",
            "Country": "El Salvador",
            "Violence Rate (%)": 7.7,
        },
        {
            "Region": "Latin America and the Caribbean",
            "Country": "Guatemala",
            "Violence Rate (%)": 8.5,
        },
        {
            "Region": "Latin America and the Caribbean",
            "Country": "Haiti",
            "Violence Rate (%)": 14.9,
        },
        {
            "Region": "Latin America and the Caribbean",
            "Country": "Honduras",
            "Violence Rate (%)": 11.0,
        },
        {
            "Region": "Latin America and the Caribbean",
            "Country": "Jamaica",
            "Violence Rate (%)": 7.7,
        },
        {
            "Region": "Latin America and the Caribbean",
            "Country": "Nicaragua",
            "Violence Rate (%)": 9.3,
        },
        {
            "Region": "Latin America and the Caribbean",
            "Country": "Peru",
            "Violence Rate (%)": 12.9,
        },
        {
            "Region": "Europe",
            "Country": "Austria",
            "Violence Rate (%)": 4.0,
        },
        {
            "Region": "Europe",
            "Country": "Belgium",
            "Violence Rate (%)": 8.0,
        },
        {
            "Region": "Europe",
            "Country": "Bulgaria",
            "Violence Rate (%)": 9.0,
        },
        {
            "Region": "Europe",
            "Country": "Croatia",
            "Violence Rate (%)": 4.0,
        },
        {
            "Region": "Europe",
            "Country": "Czech Republic",
            "Violence Rate (%)": 6.0,
        },
        {
            "Region": "Europe",
            "Country": "Denmark",
            "Violence Rate (%)": 7.0,
        },
        {
            "Region": "Europe",
            "Country": "Estonia",
            "Violence Rate (%)": 4.0,
        },
        {
            "Region": "Europe",
            "Country": "Finland",
            "Violence Rate (%)": 8.0,
        },
        {
            "Region": "Europe",
            "Country": "France",
            "Violence Rate (%)": 7.0,
        },
        {
            "Region": "Europe",
            "Country": "Germany",
            "Violence Rate (%)": 5.0,
        },
        {
            "Region": "Europe",
            "Country": "Greece",
            "Violence Rate (%)": 8.0,
        },
        {
            "Region": "Europe",
            "Country": "Hungary",
            "Violence Rate (%)": 8.0,
        },
        {
            "Region": "Europe",
            "Country": "Ireland",
            "Violence Rate (%)": 4.0,
        },
        {
            "Region": "Europe",
            "Country": "Italy",
            "Violence Rate (%)": 7.0,
        },
        {
            "Region": "Europe",
            "Country": "Latvia",
            "Violence Rate (%)": 7.0,
        },
        {
            "Region": "Europe",
            "Country": "Lithuania",
            "Violence Rate (%)": 6.0,
        },
        {
            "Region": "Europe",
            "Country": "Luxembourg",
            "Violence Rate (%)": 3.0,
        },
        {
            "Region": "Europe",
            "Country": "Malta",
            "Violence Rate (%)": 5.0,
        },
        {
            "Region": "Europe",
            "Country": "Netherlands",
            "Violence Rate (%)": 7.0,
        },
        {
            "Region": "Europe",
            "Country": "Poland",
            "Violence Rate (%)": 3.0,
        },
        {
            "Region": "Europe",
            "Country": "Portugal",
            "Violence Rate (%)": 6.0,
        },
        {
            "Region": "Europe",
            "Country": "Moldova",
            "Violence Rate (%)": 14.6,
        },
        {
            "Region": "Europe",
            "Country": "Romania",
            "Violence Rate (%)": 7.0,
        },
        {
            "Region": "Europe",
            "Country": "Slovakia",
            "Violence Rate (%)": 8.0,
        },
        {
            "Region": "Europe",
            "Country": "Slovenia",
            "Violence Rate (%)": 2.0,
        },
        {
            "Region": "Europe",
            "Country": "Spain",
            "Violence Rate (%)": 2.0,
        },
        {
            "Region": "Europe",
            "Country": "Sweden",
            "Violence Rate (%)": 6.0,
        },
        {
            "Region": "Europe",
            "Country": "Ukraine",
            "Violence Rate (%)": 10.2,
        },
        {
            "Region": "Europe",
            "Country": "United Kingdom",
            "Violence Rate (%)": 6.0,
        },
        {
            "Region": "Oceania (excluding Australia and New Zealand)",
            "Country": "Kiribati",
            "Violence Rate (%)": 36.1,
        },
        {
            "Region": "Oceania (excluding Australia and New Zealand)",
            "Country": "Marshall Islands",
            "Violence Rate (%)": 24.7,
        },
        {
            "Region": "Oceania (excluding Australia and New Zealand)",
            "Country": "Solomon Islands",
            "Violence Rate (%)": 41.8,
        },
        {
            "Region": "Oceania (excluding Australia and New Zealand)",
            "Country": "Tonga",
            "Violence Rate (%)": 18.9,
        },
        {
            "Region": "Oceania (excluding Australia and New Zealand)",
            "Country": "Tuvalu",
            "Violence Rate (%)": 25.0,
        },
        {
            "Region": "Oceania (excluding Australia and New Zealand)",
            "Country": "Vanuatu",
            "Violence Rate (%)": 44.0,
        },
        {
            "Region": "Sub-Saharan Africa",
            "Country": "Burkina Faso",
            "Violence Rate (%)": 9.3,
        },
        {
            "Region": "Sub-Saharan Africa",
            "Country": "Cape Verde",
            "Violence Rate (%)": 7.8,
        },
        {
            "Region": "Sub-Saharan Africa",
            "Country": "Cameroon",
            "Violence Rate (%)": 31.4,
        },
        {
            "Region": "Sub-Saharan Africa",
            "Country": "Central African Republic",
            "Violence Rate (%)": 26.3,
        },
        {
            "Region": "Sub-Saharan Africa",
            "Country": "Chad",
            "Violence Rate (%)": 17.5,
        },
        {
            "Region": "Sub-Saharan Africa",
            "Country": "Comoros",
            "Violence Rate (%)": 4.9,
        },
        {
            "Region": "Sub-Saharan Africa",
            "Country": "Ivory Coast",
            "Violence Rate (%)": 22.0,
        },
        {
            "Region": "Sub-Saharan Africa",
            "Country": "Democratic Republic of the Congo",
            "Violence Rate (%)": 36.8,
        },
        {
            "Region": "Sub-Saharan Africa",
            "Country": "Equatorial Guinea",
            "Violence Rate (%)": 43.6,
        },
        {
            "Region": "Sub-Saharan Africa",
            "Country": "Gabon",
            "Violence Rate (%)": 31.5,
        },
        {
            "Region": "Sub-Saharan Africa",
            "Country": "Gambia",
            "Violence Rate (%)": 7.3,
        },
        {
            "Region": "Sub-Saharan Africa",
            "Country": "Ghana",
            "Violence Rate (%)": 19.2,
        },
        {
            "Region": "Sub-Saharan Africa",
            "Country": "Kenya",
            "Violence Rate (%)": 25.5,
        },
        {
            "Region": "Sub-Saharan Africa",
            "Country": "Liberia",
            "Violence Rate (%)": 35.0,
        },
        {
            "Region": "Sub-Saharan Africa",
            "Country": "Malawi",
            "Violence Rate (%)": 22.1,
        },
        {
            "Region": "Sub-Saharan Africa",
            "Country": "Mali",
            "Violence Rate (%)": 21.5,
        },
        {
            "Region": "Sub-Saharan Africa",
            "Country": "Mozambique",
            "Violence Rate (%)": 27.7,
        },
        {
            "Region": "Sub-Saharan Africa",
            "Country": "Namibia",
            "Violence Rate (%)": 20.2,
        },
        {
            "Region": "Sub-Saharan Africa",
            "Country": "Nigeria",
            "Violence Rate (%)": 11.0,
        },
        {
            "Region": "Sub-Saharan Africa",
            "Country": "Rwanda",
            "Violence Rate (%)": 20.7,
        },
        {
            "Region": "Sub-Saharan Africa",
            "Country": "Sao Tome and Principe",
            "Violence Rate (%)": 26.3,
        },
        {
            "Region": "Sub-Saharan Africa",
            "Country": "Sierra Leone",
            "Violence Rate (%)": 28.7,
        },
        {
            "Region": "Sub-Saharan Africa",
            "Country": "Togo",
            "Violence Rate (%)": 12.7,
        },
        {
            "Region": "Sub-Saharan Africa",
            "Country": "Uganda",
            "Violence Rate (%)": 33.3,
        },
        {
            "Region": "Sub-Saharan Africa",
            "Country": "Tanzania",
            "Violence Rate (%)": 29.6,
        },
        {
            "Region": "Sub-Saharan Africa",
            "Country": "Zambia",
            "Violence Rate (%)": 26.7,
        },
        {
            "Region": "Sub-Saharan Africa",
            "Country": "Zimbabwe",
            "Violence Rate (%)": 19.9,
        },
        {
            "Region": "North Africa and West Asia",
            "Country": "Azerbaijan",
            "Violence Rate (%)": 9.8,
        },
        {
            "Region": "North Africa and West Asia",
            "Country": "Cyprus",
            "Violence Rate (%)": 3.0,
        },
        {
            "Region": "North Africa and West Asia",
            "Country": "Egypt",
            "Violence Rate (%)": 14.0,
        },
        {
            "Region": "North Africa and West Asia",
            "Country": "Jordan",
            "Violence Rate (%)": 14.1,
        },
        {
            "Region": "North Africa and West Asia",
            "Country": "Turkey",
            "Violence Rate (%)": 11.0,
        },
    ]
}

// Natural Disasters

export const disasterRelatedDeathAndLossRates = {
    title: 'Disaster-Related Death and Loss Rates by Year',
    description: 'This dataset provides an overview of the rates of death and loss due to disasters over various periods. The data indicates that between 2005 and 2014, the death and loss rate was 1.62 per 100,000 people. In the subsequent period from 2013 to 2022, the rate significantly decreased to 0.82, with an annual average death toll of 42,553. The data from 2005 to 2015 shows a similar rate of 1.64. From 2012 to 2021, the rate was recorded at 0.86, with an annual average death count of 47,337. The year 2019 reported a low rate of 0.35, translating to 39,000 affected individuals. An analysis from 1998 to 2017 indicates a minimal rate of 0.15, corresponding to approximately 1.3 million deaths. The rate further decreased to 0.04 between 2000 and 2013, with an average annual death count of 83,000. The year 2020 had an even lower rate of 0.07, and in 2022, the rate was recorded at 0.09, with 297,540 reported deaths. This dataset emphasizes the impact of disasters on mortality and underscores the importance of effective disaster management strategies.',
    category: 'Natural Disasters',
    data: [
        {
            "Period": "2005-2014",
            "Death and Loss Rate (per 100,000 people)": 1.62,
            "Average Annual Death Count": null,
        },
        {
            "Period": "2013-2022",
            "Death and Loss Rate (per 100,000 people)": 0.82,
            "Average Annual Death Count": 42553,
        },
        {
            "Period": "2005-2015",
            "Death and Loss Rate (per 100,000 people)": 1.64,
            "Average Annual Death Count": null,
        },
        {
            "Period": "2012-2021",
            "Death and Loss Rate (per 100,000 people)": 0.86,
            "Average Annual Death Count": 47337,
        },
        {
            "Period": "2019",
            "Death and Loss Rate (per 100,000 people)": 0.35,
            "Average Annual Death Count": 39000, // affected
        },
        {
            "Period": "1998-2017",
            "Death and Loss Rate (per 100,000 people)": 0.15,
            "Average Annual Death Count": 1300000, // approximately
        },
        {
            "Period": "2000-2013",
            "Death and Loss Rate (per 100,000 people)": 0.04,
            "Average Annual Death Count": 83000, // average annual
        },
        {
            "Period": "2020",
            "Death and Loss Rate (per 100,000 people)": 0.07,
            "Average Annual Death Count": null,
        },
        {
            "Period": "2022",
            "Death and Loss Rate (per 100,000 people)": 0.09,
            "Average Annual Death Count": 297540, // reported
        },
    ]
}

export const naturalDisasterAffectedPeople = {
    title: 'Number of People Affected by Natural Disasters',
    description: 'This dataset provides information on the number of people affected by natural disasters across various periods. From 2005 to 2014, the number of affected individuals was reported at 1,169 per 100,000 people. The subsequent period from 2013 to 2022 shows a significant increase to 1,980 per 100,000 people. In the period from 2005 to 2015, the rate was slightly lower at 1,198. The data from 2012 to 2021 reveals an even higher impact, with a rate of 2,113 per 100,000 people. In 2019, while specific rates are not available, it is noted that 39,000 individuals were affected. The year 2022 highlights a severe situation with 18.4 million individuals facing hunger risks, 7.2 million affected by floods, and a staggering 641 million individuals experiencing violence. This dataset underscores the urgent need for effective disaster management and humanitarian interventions to address these challenges.',
    category: 'Natural Disasters',
    data: [
        {
            "Period": "2005-2014",
            "Affected People Rate (per 100,000 people)": 1169,
            "Average Annual Affected People Count": null,
        },
        {
            "Period": "2013-2022",
            "Affected People Rate (per 100,000 people)": 1980,
            "Average Annual Affected People Count": null,
        },
        {
            "Period": "2005-2015",
            "Affected People Rate (per 100,000 people)": 1198,
            "Average Annual Affected People Count": null,
        },
        {
            "Period": "2012-2021",
            "Affected People Rate (per 100,000 people)": 2113,
            "Average Annual Affected People Count": null,
        },
        {
            "Period": "2019",
            "Affected People Rate (per 100,000 people)": null,
            "Average Annual Affected People Count": 39000, // affected
        },
        {
            "Period": "2022",
            "Affected People Rate (per 100,000 people)": null,
            "Average Annual Affected People Count": 18400000, // hunger risk
        },
        {
            "Period": "2022",
            "Affected People Rate (per 100,000 people)": null,
            "Average Annual Affected People Count": 7200000, // flood
        },
        {
            "Period": "2022",
            "Affected People Rate (per 100,000 people)": null,
            "Average Annual Affected People Count": 641000000, // violence
        },
    ]
}

export const relationshipBetweenPandemicAndNaturalDisasters = {
    title: 'Relationship Between Pandemic and Natural Disasters',
    description: 'This dataset illustrates the relationship between the COVID-19 pandemic and natural disasters, highlighting various statistics and trends. In 2021, reported deaths due to the pandemic reached 414,318. By 2022, it was noted that at least 80% of deaths were linked to COVID-19-related disasters. Additionally, the average annual death count from natural disasters was 42,553. Between 2013 and 2022, the average disaster-related death and loss rate was recorded at 0.82 per 100,000 people. In 2020, the total number of individuals affected by disasters was reported at 297,540. Furthermore, in 2022, the percentage of women who experienced violence post-pandemic was 45%. The data from 2019 showed that the number of deaths caused by natural disasters was approximately 12,000. In 2018, direct economic losses from natural disasters amounted to 3 trillion dollars. Additionally, in 2020, fewer than 40% of violence victims sought help. This dataset emphasizes the interconnectedness of pandemics and natural disasters and the pressing need for effective response strategies.',
    category: 'Natural Disasters',
    data: [
        {
            "Period": "2021",
            "Description": "Reported deaths due to the pandemic",
            "Count": 414318,
        },
        {
            "Period": "2022",
            "Description": "Proportion of deaths due to COVID-19-related disasters",
            "Count": "At least 80%",
        },
        {
            "Period": "2022",
            "Description": "Average annual death count from natural disasters",
            "Count": 42553,
        },
        {
            "Period": "2013-2022",
            "Description": "Average disaster-related death and loss rate",
            "Count": "0.82 (per 100,000 people)",
        },
        {
            "Period": "2020",
            "Description": "Total number of individuals affected by disasters",
            "Count": 297540,
        },
        {
            "Period": "2022",
            "Description": "Percentage of women experiencing violence post-pandemic",
            "Count": "45%",
        },
        {
            "Period": "2019",
            "Description": "Number of deaths caused by natural disasters",
            "Count": 12000,
        },
        {
            "Period": "2018",
            "Description": "Direct economic losses from natural disasters",
            "Count": "3 trillion dollars",
        },
        {
            "Period": "2020",
            "Description": "Proportion of violence victims seeking help",
            "Count": "Less than 40%",
        },
    ]
}

export const regionalDistributionOfDisasterRelatedDeaths = {
    title: 'Regional Distribution of Disaster-Related Deaths',
    description: 'This dataset outlines the regional distribution of deaths caused by disasters, presenting the death rates per 100,000 people across various regions. In Africa, the death rate is reported at 0.5%, while in the Americas and the Caribbean, it rises to 1.0%. The Arab States have a higher death rate of 2.0%. However, the most significant impact is observed in the Asia and Pacific region, with a staggering death rate of 39.0%. Europe and Central Asia report an even higher death rate of 58.0%. The least developed countries show a death rate of 36.0%, while small island developing states have a rate of 15.5%. The global average death rate from disasters stands at 17.8%. This dataset emphasizes the disparities in disaster impacts across regions and highlights the need for targeted disaster risk reduction strategies.',
    category: 'Natural Disasters',
    data: [
        {
            "Region": "Africa",
            "Description": "Disaster-related deaths",
            "Death Rate (per 100,000 people)": 0.5,
        },
        {
            "Region": "Americas and Caribbean",
            "Description": "Disaster-related deaths",
            "Death Rate (per 100,000 people)": 1.0,
        },
        {
            "Region": "Arab States",
            "Description": "Disaster-related deaths",
            "Death Rate (per 100,000 people)": 2.0,
        },
        {
            "Region": "Asia and Pacific",
            "Description": "Disaster-related deaths",
            "Death Rate (per 100,000 people)": 39.0,
        },
        {
            "Region": "Europe and Central Asia",
            "Description": "Disaster-related deaths",
            "Death Rate (per 100,000 people)": 58.0,
        },
        {
            "Region": "Least Developed Countries",
            "Description": "Disaster-related deaths",
            "Death Rate (per 100,000 people)": 36.0,
        },
        {
            "Region": "Small Island Developing States",
            "Description": "Disaster-related deaths",
            "Death Rate (per 100,000 people)": 15.5,
        },
        {
            "Region": "Global Average",
            "Description": "Disaster-related deaths",
            "Death Rate (per 100,000 people)": 17.8,
        },
    ]
}

export const economicLossFromNaturalDisasters = {
    title: 'Economic Loss from Natural Disasters',
    description: 'This dataset provides information on the economic losses and death toll associated with natural disasters over various periods. From 2000 to 2013, there were approximately 83,000 reported deaths. The period from 1998 to 2017 saw a staggering 1,300,000 deaths, with economic losses amounting to 3 trillion dollars. The data from 2013 to 2022 indicates an average annual death toll of 42,553, while the year 2020 reported 297,540 deaths due to disasters. This dataset highlights the significant human and economic impact of natural disasters and underscores the need for effective disaster management and mitigation strategies.',
    category: 'Natural Disasters',
    data: [
        {
            "Period": "2000-2013",
            "Death Count": 83000,
            "Economic Loss (Dollars)": null,
        },
        {
            "Period": "1998-2017",
            "Death Count": 1300000,
            "Economic Loss (Dollars)": 3000000000000, // 3 trillion
        },
        {
            "Period": "2013-2022",
            "Death Count": "42553/year",
            "Economic Loss (Dollars)": null,
        },
        {
            "Period": "2020",
            "Death Count": 297540,
            "Economic Loss (Dollars)": null,
        },
    ]
}

export const severityAndFrequencyOfNaturalDisasters = {
    title: 'Severity and Frequency of Natural Disasters',
    description: 'This dataset outlines the severity and frequency of natural disasters over various periods, along with the associated death tolls. From 2000 to 2013, the average annual death count was 83,000, indicating an increasing frequency of natural disasters. The period from 1990 to 2015 recorded a total of 1,600,000 deaths, correlating with internationally reported natural disasters. Between 2005 and 2016, the same number of 1,600,000 deaths was reported, highlighting a rise in fatalities due to natural disasters. In the years 2013 to 2022, the annual death toll remained significant at 42,553, demonstrating the persistent threat posed by natural disasters. This dataset emphasizes the urgent need for enhanced disaster preparedness and response strategies to mitigate the impacts of such events.',
    category: 'Natural Disasters',
    data: [
        {
            "Period": "2000-2013",
            "Death Count/Year": 83000,
            "Severity and Frequency": "The frequency of natural disasters is increasing.",
        },
        {
            "Period": "1990-2015",
            "Death Count/Year": 1600000,
            "Severity and Frequency": "Internationally reported natural disasters.",
        },
        {
            "Period": "2005-2016",
            "Death Count/Year": 1600000,
            "Severity and Frequency": "Deaths from natural disasters are increasing.",
        },
        {
            "Period": "2013-2022",
            "Death Count/Year": "42553/year",
            "Severity and Frequency": "High annual death toll due to natural disasters.",
        },
    ]
}

export const postDisasterAssistanceRequestRate = {
    title: 'Post-Disaster Assistance Request Rate',
    description: 'This dataset presents the rate of assistance requests following disasters, emphasizing the challenges faced by victims in seeking help. In 2020, it was reported that fewer than 40% of violence victims sought assistance. This statistic underscores the barriers that prevent individuals from accessing the necessary support and highlights the need for improved awareness and outreach efforts to ensure that those affected by disasters and violence can receive the help they require.',
    category: 'Natural Disasters',
    data: [
        {
            "Year": 2020,
            "Assistance Request Rate (%)": 40,
            "Description": "Fewer than 40% of violence victims seek assistance.",
        },
    ]
}

export const geologicalAndHydrometeorologicalEventsDeathCount = {
    title: 'Death Count from Geological and Hydrometeorological Events',
    description: 'This dataset provides the annual death count resulting from geological and hydrometeorological events from 1990 to 2013. The data indicates fluctuations in mortality rates over the years, with notable peaks such as 5,435 deaths reported in 2007. The year 2000 also saw a high number of fatalities at 4,046. In contrast, the lowest death toll during this period was recorded in 1992, with 2,329 deaths. This dataset emphasizes the ongoing impact of natural disasters on human life and highlights the importance of disaster preparedness and response strategies.',
    category: 'Natural Disasters',
    data: [
        { "Year": 1990, "Death Count": 3188 },
        { "Year": 1991, "Death Count": 3202 },
        { "Year": 1992, "Death Count": 2329 },
        { "Year": 1993, "Death Count": 3257 },
        { "Year": 1994, "Death Count": 3071 },
        { "Year": 1995, "Death Count": 3232 },
        { "Year": 1996, "Death Count": 3401 },
        { "Year": 1997, "Death Count": 3809 },
        { "Year": 1998, "Death Count": 3840 },
        { "Year": 1999, "Death Count": 3659 },
        { "Year": 2000, "Death Count": 4046 },
        { "Year": 2001, "Death Count": 3963 },
        { "Year": 2002, "Death Count": 4280 },
        { "Year": 2003, "Death Count": 3182 },
        { "Year": 2004, "Death Count": 3456 },
        { "Year": 2005, "Death Count": 4685 },
        { "Year": 2006, "Death Count": 4154 },
        { "Year": 2007, "Death Count": 5435 },
        { "Year": 2008, "Death Count": 4405 },
        { "Year": 2009, "Death Count": 3839 },
        { "Year": 2010, "Death Count": 4944 },
        { "Year": 2011, "Death Count": 3757 },
        { "Year": 2012, "Death Count": 4288 },
        { "Year": 2013, "Death Count": 4113 },
    ]
}

export const totalDeathsAndAffectedPeopleByYear = {
    title: 'Total Deaths and Affected People by Year',
    description: 'This dataset presents the total deaths and the number of affected individuals by year from 2000 to 2013. The data indicates significant fluctuations in the number of deaths and those affected by disasters. For instance, in 2000, the total deaths were recorded at 9.63 thousand, with 173,153.871 thousand people affected. The year 2004 shows a notable spike with 241.579 thousand deaths, although the number of affected individuals decreased to 161,718.795 thousand. By 2010, total deaths increased dramatically to 317.855 thousand, while the number of affected individuals reached 257,292.089 thousand. The dataset emphasizes the impact of disasters on human life and highlights the urgent need for effective disaster response strategies.',
    category: 'Natural Disasters',
    data: [
        { "Year": 2000, "Total Deaths (thousand)": 9.63, "Affected People (thousand)": 173153.871 },
        { "Year": 2001, "Total Deaths (thousand)": 30.981, "Affected People (thousand)": 108735.947 },
        { "Year": 2002, "Total Deaths (thousand)": 12.733, "Affected People (thousand)": 658053.253 },
        { "Year": 2003, "Total Deaths (thousand)": 110.012, "Affected People (thousand)": 254988.859 },
        { "Year": 2004, "Total Deaths (thousand)": 241.579, "Affected People (thousand)": 161718.795 },
        { "Year": 2005, "Total Deaths (thousand)": 89.208, "Affected People (thousand)": 160251.004 },
        { "Year": 2006, "Total Deaths (thousand)": 23.491, "Affected People (thousand)": 126009.007 },
        { "Year": 2007, "Total Deaths (thousand)": 16.938, "Affected People (thousand)": 212389.935 },
        { "Year": 2008, "Total Deaths (thousand)": 235.285, "Affected People (thousand)": 221486.513 },
        { "Year": 2009, "Total Deaths (thousand)": 11.126, "Affected People (thousand)": 200797.358 },
        { "Year": 2010, "Total Deaths (thousand)": 317.855, "Affected People (thousand)": 257292.089 },
        { "Year": 2011, "Total Deaths (thousand)": 30.969, "Affected People (thousand)": 211612.688 },
        { "Year": 2012, "Total Deaths (thousand)": 9.718, "Affected People (thousand)": 111219.159 },
        { "Year": 2013, "Total Deaths (thousand)": 21.696, "Affected People (thousand)": 96204.807 },
    ]
}

// National Disaster Risk Reduction Strategies

export const adoptionOfNationalDisasterRiskReductionStrategies = {
    title: 'Adoption of National Disaster Risk Reduction Strategies by Year',
    description: 'This dataset tracks the number of countries that have adopted national disaster risk reduction strategies over the years. In 2015, 55 countries had implemented such strategies. This number significantly increased to 123 by 2018, demonstrating a growing recognition of the importance of disaster risk management. By 2021, the number of adopting countries rose to 126, and by 2023, it reached 129. This trend highlights the increasing commitment of nations to enhance their resilience against disasters through strategic planning and risk reduction measures.',
    category: 'National Disaster Risk Reduction Strategies',
    data: [
        { "Year": 2015, "Number of Adopting Countries": 55 },
        { "Year": 2018, "Number of Adopting Countries": 123 },
        { "Year": 2021, "Number of Adopting Countries": 126 },
        { "Year": 2023, "Number of Adopting Countries": 129 },
    ]
}

export const disasterRiskReductionStrategiesAndPolicyCompliance = {
    title: 'Disaster Risk Reduction Strategies and Policy Compliance',
    description: 'This dataset provides information on the number of countries adopting disaster risk reduction strategies and their compliance with various international policies. In 2024, a total of 129 countries have adopted and implemented national disaster risk reduction strategies. Additionally, 122 countries reported compliance with strategies promoting alignment with the Sustainable Development Goals (SDGs) and the Paris Agreement. In 2023, the number of countries with national strategies to reduce disaster risk was reported at 126. Furthermore, 118 countries reported their policy compliance with global frameworks such as the Paris Agreement and the 2030 Agenda. In 2022, 101 countries indicated that local governments possess disaster risk reduction strategies, while 193 countries submitted their first Nationally Determined Contributions (NDCs) under the United Nations Framework Convention on Climate Change (UNFCCC). In the same year, 123 countries adopted national disaster risk reduction strategies. Additionally, 118 countries developed policies to align disaster risk strategies with the SDGs and the Paris Agreement, and 61 countries have developed strategies demonstrating comprehensive compliance with the Sendai Framework. In 2021, 125 developing countries took measures towards national compliance plans, prioritizing them. Furthermore, 6 least developed countries (LDCs) and 4 small island states completed their national compliance plans, and 118 countries developed national or local disaster risk reduction strategies. A total of 190 parties (189 countries plus the EU) presented their initial national contributions under the UNFCCC.',
    category: 'National Disaster Risk Reduction Strategies',
    data: [
        {
            "Year": 2024,
            "Number of Countries": 129,
            "Compliance Information": "Adopted and implemented national disaster risk reduction strategies.",
        },
        {
            "Year": 2024,
            "Number of Countries": 122,
            "Compliance Information": "Reported policy compliance as part of strategies promoting alignment with SDGs and the Paris Agreement.",
        },
        {
            "Year": 2023,
            "Number of Countries": 126,
            "Compliance Information": "Countries with national strategies to reduce disaster risk by the end of 2021.",
        },
        {
            "Year": 2023,
            "Number of Countries": 118,
            "Compliance Information": "Reported policy compliance with global frameworks such as the Paris Agreement and the 2030 Agenda.",
        },
        {
            "Year": 2022,
            "Number of Countries": 101,
            "Compliance Information": "Reported local governments possessing disaster risk reduction strategies.",
        },
        {
            "Year": 2022,
            "Number of Countries": 193,
            "Compliance Information": "Submitted their first Nationally Determined Contributions (NDCs) under the UNFCCC.",
        },
        {
            "Year": 2022,
            "Number of Countries": 123,
            "Compliance Information": "Adopted national disaster risk reduction strategies.",
        },
        {
            "Year": 2022,
            "Number of Countries": 118,
            "Compliance Information": "Developed policies to align disaster risk strategies with the SDGs and the Paris Agreement.",
        },
        {
            "Year": 2022,
            "Number of Countries": 61,
            "Compliance Information": "Developed strategies demonstrating comprehensive compliance with the Sendai Framework.",
        },
        {
            "Year": 2021,
            "Number of Countries": 125,
            "Compliance Information": "Took measures and prioritized national compliance plans in developing countries.",
        },
        {
            "Year": 2021,
            "Number of Countries": 6,
            "Compliance Information": "Least developed countries (LDC) and 4 small island states completed their national compliance plans.",
        },
        {
            "Year": 2021,
            "Number of Countries": 118,
            "Compliance Information": "Developed national or local disaster risk reduction strategies.",
        },
        {
            "Year": 2021,
            "Number of Countries": 190,
            "Compliance Information": "Parties (189 countries + EU) presented their initial national contributions under the UNFCCC.",
        },
    ]
}

export const localGovernmentsDisasterRiskReductionStrategies = {
    title: 'Disaster Risk Reduction Strategies of Local Governments',
    description: 'This dataset highlights the number of countries with local governments that have adopted disaster risk reduction strategies over the years. In 2023, a total of 101 countries reported having disaster risk reduction strategies at the local government level. In 2021, there were 98 countries that developed such strategies, and among developing countries, 125 out of 154 were implementing national compliance plans. In 2020, 55 countries reported local disaster risk reduction strategies from their local governments. Furthermore, in 2015, it was reported that local governments in 51 countries had established disaster risk reduction strategies. This dataset underscores the importance of local governance in disaster risk management and the need for continuous development of these strategies.',
    category: 'National Disaster Risk Reduction Strategies',
    data: [
        {
            "Year": 2023,
            "Number of Countries": 101,
            "Strategy Information": "Local governments reported having disaster risk reduction strategies.",
        },
        {
            "Year": 2021,
            "Number of Countries": 98,
            "Strategy Information": "Local governments developed disaster risk reduction strategies.",
        },
        {
            "Year": 2021,
            "Number of Countries": 154,
            "Strategy Information": "125 developing countries are implementing national compliance plans.",
        },
        {
            "Year": 2020,
            "Number of Countries": 55,
            "Strategy Information": "Countries reported local disaster risk reduction strategies from local governments.",
        },
        {
            "Year": 2015,
            "Number of Countries": 51,
            "Strategy Information": "It was reported that local governments had disaster risk reduction strategies.",
        },
    ]
}

export const nationalContributionsAndCompliance = {
    title: 'National Contributions and Compliance',
    description: 'This dataset outlines the national contributions made under the United Nations Framework Convention on Climate Change (UNFCCC) over the years. In 2022, 193 parties (192 countries + EU) submitted their first Nationally Determined Contributions (NDCs) under the UNFCCC. The previous year, 2021, saw 190 parties (189 countries + EU) present their initial national contributions. In 2020, 186 parties (185 countries + EU) submitted their contributions, while 183 parties reported their first national contributions to the UNFCCC Secretariat in 2019. The year 2017 marked 137 parties (136 countries and the European Commission) submitting their initial national contributions to the UNFCCC. By April 4, 2016, out of the 189 countries that were parties to the UNFCCC, 161 submitted their Intended Nationally Determined Contributions (INDCs). This dataset emphasizes the commitment of nations to address climate change through formal contributions and compliance measures.',
    category: 'National Disaster Risk Reduction Strategies',
    data: [
        {
            "Year": 2022,
            "Contribution Information": "193 parties (192 countries + EU) submitted their first Nationally Determined Contributions (NDCs) under the UNFCCC.",
        },
        {
            "Year": 2021,
            "Contribution Information": "190 parties (189 countries + EU) presented their initial national contributions to the UNFCCC.",
        },
        {
            "Year": 2020,
            "Contribution Information": "186 parties (185 countries + EU) submitted their contributions to the UNFCCC.",
        },
        {
            "Year": 2019,
            "Contribution Information": "183 parties submitted their first national contributions to the UNFCCC Secretariat.",
        },
        {
            "Year": 2017,
            "Contribution Information": "137 parties (136 countries and the European Commission) submitted their first national contributions to the UNFCCC Secretariat.",
        },
        {
            "Year": 2016,
            "Contribution Information": "As of April 4, 2016, out of 189 countries party to the UNFCCC, 161 submitted their Intended Nationally Determined Contributions (INDCs).",
        },
    ]
}

export const priorityAreasInAdaptationStrategies = {
    title: 'Priority Areas in Adaptation Strategies',
    description: 'This dataset highlights the priority areas for adaptation strategies in the context of climate change. The highest priority areas include food production and nutrition security, as well as terrestrial and aquatic ecosystems, both at 90%. Freshwater resources and human health are also critical areas, each with a priority rate of 79%. Key economic sectors and services have a priority rate of 77%. Coastal and low-lying areas, as well as disaster risk management, have a priority rate of 54%. Urban areas and other human settlements also share this same priority level. Lastly, ocean ecosystems are recognized as a priority area with a rate of 33%. This data underscores the essential focus on these areas to enhance resilience and mitigate the impacts of climate change.',
    category: 'National Disaster Risk Reduction Strategies',
    data: [
        {
            "Priority Area": "Food production and nutrition security",
            "Rate (%)": 90,
        },
        {
            "Priority Area": "Terrestrial and aquatic ecosystems",
            "Rate (%)": 90,
        },
        {
            "Priority Area": "Freshwater resources",
            "Rate (%)": 79,
        },
        {
            "Priority Area": "Human health",
            "Rate (%)": 79,
        },
        {
            "Priority Area": "Key economic sectors and services",
            "Rate (%)": 77,
        },
        {
            "Priority Area": "Coastal and low-lying areas",
            "Rate (%)": 54,
        },
        {
            "Priority Area": "Disaster risk management",
            "Rate (%)": 54,
        },
        {
            "Priority Area": "Urban areas and other human settlements",
            "Rate (%)": 54,
        },
        {
            "Priority Area": "Ocean ecosystems",
            "Rate (%)": 33,
        },
    ]
}

export const developmentOfDisasterRiskReductionStrategies = {
    title: 'Development of Disaster Risk Reduction Strategies',
    description: 'This dataset outlines the development of disaster risk reduction (DRR) strategies over the years, indicating the number of countries that have adopted these strategies, the legal regulations in place, and alignment with the Sendai Framework. In 2015, a total of 48 countries had established DRR strategies, with 13 legal regulations and 13 strategies aligned with the Sendai Framework. By 2020, the number of countries increased to 103, with 83 legal regulations and 47 strategies compliant with the Sendai Framework. In 2021, 126 countries reported having DRR strategies, with 118 legal regulations and 55 strategies aligned with the Sendai Framework. This data highlights the growing commitment of countries to enhance their disaster risk management frameworks and their efforts towards compliance with international standards.',
    category: 'National Disaster Risk Reduction Strategies',
    data: [
        {
            "Year": 2015,
            "Number of Countries": 48,
            "Legal Regulations (DRR)": 13,
            "Strategies Aligned with Sendai Framework": 13,
        },
        {
            "Year": 2020,
            "Number of Countries": 103,
            "Legal Regulations (DRR)": 83,
            "Strategies Aligned with Sendai Framework": 47,
        },
        {
            "Year": 2021,
            "Number of Countries": 126,
            "Legal Regulations (DRR)": 118,
            "Strategies Aligned with Sendai Framework": 55,
        },
    ]
}

export const preparationAndImplementationOfNationalCompliancePlans = {
    title: 'Preparation and Implementation of National Compliance Plans',
    description: 'This dataset provides insights into the preparation and implementation status of national compliance plans across various years. In 2020, a total of 120 countries had prepared their national compliance plans, all of which were in the implementation phase, with 120 out of 153 developing countries actively executing their plans. The following year, 2021, also saw 125 countries with prepared plans, with the implementation status remaining the same. Notably, in 2021, 6 least developed countries (LDCs) and 4 small island states completed their plans. By 2022, while specific numbers for the year were not available, it was noted that least developed countries were in the process of preparing their compliance plans. This dataset underscores the importance of national compliance plans in responding to global challenges such as climate change and disaster risk reduction.',
    category: 'National Disaster Risk Reduction Strategies',
    data: [
        {
            "Year": 2020,
            "Number of Countries": 120,
            "National Compliance Plans (Prepared)": 120,
            "Implementation Status": "Implementation Phase",
            "Other Notes": "120 out of 153 developing countries are executing their plans.",
        },
        {
            "Year": 2021,
            "Number of Countries": 125,
            "National Compliance Plans (Prepared)": 125,
            "Implementation Status": "Implementation Phase",
            "Other Notes": "6 LDCs and 4 small island states completed their plans.",
        },
        {
            "Year": 2022,
            "Number of Countries": null,
            "National Compliance Plans (Prepared)": null,
            "Implementation Status": null,
            "Other Notes": "Least developed countries are preparing their compliance plans.",
        },
    ]
}

export const complianceWithInternationalAgreements = {
    title: 'Compliance with International Agreements',
    description: 'This dataset outlines the compliance status of countries with various international agreements over the years. In 2022, all 193 parties to the United Nations Framework Convention on Climate Change (UNFCCC) submitted their initial Nationally Determined Contributions (NDCs). The same year, 185 parties ratified the Paris Agreement. Additionally, while the number of countries for the Sendai Framework is not specified, 118 countries developed policies to align their disaster risk strategies with the Sendai Framework. In 2021, the Paris Agreement saw 137 parties adding compliance components to their national contributions. Furthermore, 154 developing countries reported that 125 were actively implementing their national compliance plans under the UNFCCC. This dataset highlights the commitment of countries to adhere to global environmental agreements and frameworks aimed at addressing climate change and disaster risk reduction.',
    category: 'National Disaster Risk Reduction Strategies',
    data: [
        {
            "Year": 2022,
            "Agreement": "United Nations Framework Convention on Climate Change (UNFCCC)",
            "Number of Countries": 193,
            "Compliance Status": "All 193 parties submitted their initial Nationally Determined Contributions (NDCs).",
        },
        {
            "Year": 2022,
            "Agreement": "Paris Agreement",
            "Number of Countries": 185,
            "Compliance Status": "185 parties ratified the Paris Agreement.",
        },
        {
            "Year": 2022,
            "Agreement": "Sendai Framework",
            "Number of Countries": null,
            "Compliance Status": "118 countries developed policies to align disaster risk strategies with the Sendai Framework.",
        },
        {
            "Year": 2021,
            "Agreement": "Paris Agreement",
            "Number of Countries": null,
            "Compliance Status": "137 parties added compliance components to their national contributions.",
        },
        {
            "Year": 2021,
            "Agreement": "UNFCCC",
            "Number of Countries": 154,
            "Compliance Status": "125 of the 154 developing countries are implementing their national compliance plans.",
        },
    ]
}

export const regionalComplianceWithParisAgreementAndNDCs = {
    title: 'Regional Compliance with the Paris Agreement and Nationally Determined Contributions (NDC)',
    description: 'This dataset outlines the number of parties that have submitted Nationally Determined Contributions (NDCs) and the number of parties that have ratified the Paris Agreement across different regions. In Europe and North America, 35 parties have submitted their NDCs, and 36 have ratified the Paris Agreement, with 49 parties under the UNFCCC. In Sub-Saharan Africa, there are 32 parties that have submitted NDCs and 34 that have ratified the Paris Agreement, also with 49 parties under the UNFCCC. Latin America and the Caribbean show a total of 25 parties for both NDC submissions and Paris Agreement ratifications, with 33 under the UNFCCC. Oceania has 14 parties for each category. East and Southeast Asia have 12 parties that submitted NDCs and 14 that ratified the Paris Agreement. Central and South Asia have 10 and 10, respectively, while North Africa and West Asia have 12 NDC submissions and 13 ratifications. Australia and New Zealand have 2 parties for each. Globally, a total of 142 parties submitted NDCs, 148 ratified the Paris Agreement, and there are 197 parties under the UNFCCC. This dataset emphasizes the global commitment to address climate change through international agreements and strategies.',
    category: 'National Disaster Risk Reduction Strategies',
    data: [
        {
            "Region": "Europe and North America",
            "Number of NDC Submitting Parties": 35,
            "Number of Paris Agreement Ratifying Parties": 36,
            "Number of UNFCCC Parties": 49,
        },
        {
            "Region": "Sub-Saharan Africa",
            "Number of NDC Submitting Parties": 32,
            "Number of Paris Agreement Ratifying Parties": 34,
            "Number of UNFCCC Parties": 49,
        },
        {
            "Region": "Latin America and the Caribbean",
            "Number of NDC Submitting Parties": 25,
            "Number of Paris Agreement Ratifying Parties": 25,
            "Number of UNFCCC Parties": 33,
        },
        {
            "Region": "Oceania*",
            "Number of NDC Submitting Parties": 14,
            "Number of Paris Agreement Ratifying Parties": 14,
            "Number of UNFCCC Parties": 14,
        },
        {
            "Region": "East and Southeast Asia",
            "Number of NDC Submitting Parties": 12,
            "Number of Paris Agreement Ratifying Parties": 14,
            "Number of UNFCCC Parties": 15,
        },
        {
            "Region": "Central and South Asia",
            "Number of NDC Submitting Parties": 10,
            "Number of Paris Agreement Ratifying Parties": 10,
            "Number of UNFCCC Parties": 17,
        },
        {
            "Region": "North Africa and West Asia",
            "Number of NDC Submitting Parties": 12,
            "Number of Paris Agreement Ratifying Parties": 13,
            "Number of UNFCCC Parties": 18,
        },
        {
            "Region": "Australia and New Zealand",
            "Number of NDC Submitting Parties": 2,
            "Number of Paris Agreement Ratifying Parties": 2,
            "Number of UNFCCC Parties": 2,
        },
        {
            "Region": "Global",
            "Number of NDC Submitting Parties": 142,
            "Number of Paris Agreement Ratifying Parties": 148,
            "Number of UNFCCC Parties": 197,
        },
    ]
}

export const countriesDevelopingNationalAdaptationPlans = {
    title: 'Countries Developing National Adaptation Plans (NAP)',
    description: 'This dataset outlines the development stages of National Adaptation Plans (NAPs) across different countries, categorized by Least Developed Countries (LDCs) and non-LDCs. In the stage of initiating and starting the process, 39 LDCs and 19 non-LDCs have taken action. For the process of establishing authority, there are 4 LDCs and 1 non-LDC. The identification of institutional structures and coordination has been completed by 14 LDCs and 6 non-LDCs. In stakeholder consultation, 17 LDCs and 5 non-LDCs have engaged. The assessment of gaps and needs has been carried out by 27 LDCs and 7 non-LDCs. The development of roadmaps has been achieved by 18 LDCs and 2 non-LDCs. Lastly, 15 LDCs and 2 non-LDCs have completed their roadmaps. This data highlights the commitment of countries to enhance their resilience to climate change through systematic planning and collaboration.',
    category: 'National Disaster Risk Reduction Strategies',
    data: [
        {
            "Plan Stage": "Initiating and Starting the Process",
            "LDCs": 39,
            "Non-LDCs": 19,
        },
        {
            "Plan Stage": "Establishing Authority for the Process",
            "LDCs": 4,
            "Non-LDCs": 1,
        },
        {
            "Plan Stage": "Identifying Institutional Structures and Coordination",
            "LDCs": 14,
            "Non-LDCs": 6,
        },
        {
            "Plan Stage": "Consulting with Stakeholders",
            "LDCs": 17,
            "Non-LDCs": 5,
        },
        {
            "Plan Stage": "Assessing Gaps and Needs",
            "LDCs": 27,
            "Non-LDCs": 7,
        },
        {
            "Plan Stage": "Developing Roadmaps",
            "LDCs": 18,
            "Non-LDCs": 2,
        },
        {
            "Plan Stage": "Completing Roadmaps",
            "LDCs": 15,
            "Non-LDCs": 2,
        },
    ]
}

export const countryMechanismsForDisasterRiskReduction2014_2015 = {
    title: 'Country Mechanisms for Disaster Risk Reduction (2014-2015)',
    description: 'This dataset outlines the mechanisms implemented by countries to reduce disaster risks during the years 2014 and 2015. Environmental impact assessments were conducted by 96 countries, while 91 countries had legislation concerning protected areas. Additionally, 90 countries engaged in projects and programs aimed at climate change adaptation. Integrated planning mechanisms, such as coastal management and water management, were utilized by 78 countries. Furthermore, payment mechanisms for ecosystem services were established by 51 countries. This data highlights the diverse approaches taken by countries to enhance resilience against disasters and promote sustainable environmental practices.',
    category: 'National Disaster Risk Reduction Strategies',
    data: [
        {
            "Mechanism": "Environmental Impact Assessments",
            "Number of Countries": 96,
        },
        {
            "Mechanism": "Protected Areas Legislation",
            "Number of Countries": 91,
        },
        {
            "Mechanism": "Climate Change Adaptation Projects and Programs",
            "Number of Countries": 90,
        },
        {
            "Mechanism": "Integrated Planning (e.g., coastal management, water management)",
            "Number of Countries": 78,
        },
        {
            "Mechanism": "Payment Mechanisms for Ecosystem Services",
            "Number of Countries": 51,
        },
    ]
}

export const prioritySectorsAndPartiesByAdaptationComponents = {
    title: 'Priority Sectors and Number of Parties by Adaptation Components',
    description: 'This dataset highlights the priority sectors for adaptation strategies along with the number of parties involved in each sector. The water sector leads with 119 parties, followed by agriculture with 107 parties. Health has 87 parties engaged, while ecosystems account for 72 parties. Infrastructure and forestry both have 71 parties each. The energy sector includes 53 parties, and disaster risk reduction has 51 parties participating. Additionally, food security is addressed by 50 parties, coastal protection by 49 parties, and fisheries by 41 parties. This information underscores the diverse areas that require focus for effective adaptation to climate change.',
    category: 'National Disaster Risk Reduction Strategies',
    data: [
        {
            "Component": "Water",
            "Number of Parties": 119,
        },
        {
            "Component": "Agriculture",
            "Number of Parties": 107,
        },
        {
            "Component": "Health",
            "Number of Parties": 87,
        },
        {
            "Component": "Ecosystems",
            "Number of Parties": 72,
        },
        {
            "Component": "Infrastructure",
            "Number of Parties": 71,
        },
        {
            "Component": "Forestry",
            "Number of Parties": 71,
        },
        {
            "Component": "Energy",
            "Number of Parties": 53,
        },
        {
            "Component": "Disaster Risk Reduction",
            "Number of Parties": 51,
        },
        {
            "Component": "Food Security",
            "Number of Parties": 50,
        },
        {
            "Component": "Coastal Protection",
            "Number of Parties": 49,
        },
        {
            "Component": "Fisheries",
            "Number of Parties": 41,
        },
    ]
}

export const countriesWithDisasterRiskManagementRegulations2015 = {
    title: 'Countries with Disaster Risk Management Regulations (2015)',
    description: 'This dataset outlines the number of countries with disaster risk management regulations across various regions in 2015. In Oceania, there were 3 countries with such regulations. Latin America and the Caribbean had 8 countries, while Europe had 24 countries implementing disaster risk management strategies. In Asia, 18 countries were reported to have regulations in place. Africa led with 30 countries having established disaster risk management regulations. Overall, there were 83 countries worldwide that had implemented these regulations. This data highlights the global commitment to improving disaster risk management practices and enhancing resilience to natural hazards.',
    category: 'National Disaster Risk Reduction Strategies',
    data: [
        {
            "Region": "Oceania",
            "Number of Countries": 3,
        },
        {
            "Region": "Latin America and the Caribbean",
            "Number of Countries": 8,
        },
        {
            "Region": "Europe",
            "Number of Countries": 24,
        },
        {
            "Region": "Asia",
            "Number of Countries": 18,
        },
        {
            "Region": "Africa",
            "Number of Countries": 30,
        },
        {
            "Region": "Global",
            "Number of Countries": 83,
        },
    ]
}

// Greenhouse Gas Emissions and Temperature Increases

export const globalTemperatureChangesByYear = {
    title: 'Global Temperature Changes by Year',
    description: 'This dataset presents the changes in global temperatures over the years. From 2017 to 2023, the global temperature change was consistently recorded at 1.1°C. In 2019, a slight decrease to 1.0°C was noted, but the temperature remained stable at 1.1°C for the following years. However, in 2024, the global temperature change is projected to rise to 1.45°C. This data emphasizes the ongoing trend of rising global temperatures, which is a significant concern in the context of climate change and its impacts on the environment.',
    category: 'Greenhouse Gas Emissions and Temperature Increases',
    data: [
        {
            "Year": 2017,
            "Global Temperature Change (C)": 1.1,
        },
        {
            "Year": 2018,
            "Global Temperature Change (C)": 1.1,
        },
        {
            "Year": 2019,
            "Global Temperature Change (C)": 1.0,
        },
        {
            "Year": 2020,
            "Global Temperature Change (C)": 1.1,
        },
        {
            "Year": 2021,
            "Global Temperature Change (C)": 1.1,
        },
        {
            "Year": 2022,
            "Global Temperature Change (C)": 1.1,
        },
        {
            "Year": 2023,
            "Global Temperature Change (C)": 1.1,
        },
        {
            "Year": 2024,
            "Global Temperature Change (C)": 1.45,
        },
    ]
}

export const greenhouseGasEmissionChanges = {
    title: 'Greenhouse Gas Emission Changes',
    description: 'This dataset tracks the changes in greenhouse gas emissions over the years. In 2016, emissions reached a record level of 400.1 ppm. The following year, 2017, saw a new peak of 405.5 ppm. In 2018, the emissions were noted to be at 1.1°C above pre-industrial levels. A significant decrease of 15% was observed in 2019 among developed countries. The year 2020 marked a 6% drop in emissions, attributed to the effects of the pandemic. However, in 2021, emissions increased by 6% as economies began to recover. By 2022, greenhouse gas concentrations reached record levels, and in 2023, emissions continued to rise. This data highlights the ongoing challenges in addressing climate change and the fluctuations in greenhouse gas emissions in response to global events.',
    category: 'Greenhouse Gas Emissions and Temperature Increases',
    data: [
        {
            "Year": 2016,
            "Greenhouse Gas Emission Change": "400.1 ppm (record level)",
        },
        {
            "Year": 2017,
            "Greenhouse Gas Emission Change": "405.5 ppm (new peak)",
        },
        {
            "Year": 2018,
            "Greenhouse Gas Emission Change": "1.1°C (compared to pre-industrial levels)",
        },
        {
            "Year": 2019,
            "Greenhouse Gas Emission Change": "%15 decrease (in developed countries)",
        },
        {
            "Year": 2020,
            "Greenhouse Gas Emission Change": "%6 drop (impact of the pandemic)",
        },
        {
            "Year": 2021,
            "Greenhouse Gas Emission Change": "%6 increase (economic recovery)",
        },
        {
            "Year": 2022,
            "Greenhouse Gas Emission Change": "Record levels (greenhouse gas concentrations)",
        },
        {
            "Year": 2023,
            "Greenhouse Gas Emission Change": "Continuing rising emissions",
        },
    ]
}

export const carbonDioxideLevels = {
    title: 'Carbon Dioxide Levels (ppm)',
    description: 'This dataset presents the levels of carbon dioxide (CO2) measured in parts per million (ppm) over the years. In 2015, the CO2 level reached 400 ppm. The following year, 2016, saw a slight increase to 400.1 ppm, marking a record level. By 2017, the level increased further to 405.5 ppm. In 2018 and 2019, the temperature increased by 1.1°C compared to pre-industrial levels, reflecting the impact of rising CO2 levels. The year 2020 marked a new peak with CO2 levels at 410 ppm. In 2022, CO2 levels were reported to be 150% above pre-industrial levels, indicating significant increases. Finally, in 2023, the new temperature increase reached 1.45°C. This data underscores the ongoing challenges of climate change and the critical need to address carbon emissions.',
    category: 'Greenhouse Gas Emissions and Temperature Increases',
    data: [
        {
            "Year": 2015,
            "Carbon Dioxide Level (ppm)": 400,
        },
        {
            "Year": 2016,
            "Carbon Dioxide Level (ppm)": "400.1 (record level)",
        },
        {
            "Year": 2017,
            "Carbon Dioxide Level (ppm)": 405.5,
        },
        {
            "Year": 2018,
            "Carbon Dioxide Level (ppm)": "1.1°C increase (compared to pre-industrial levels)",
        },
        {
            "Year": 2019,
            "Carbon Dioxide Level (ppm)": "1.1°C increase (compared to pre-industrial levels)",
        },
        {
            "Year": 2020,
            "Carbon Dioxide Level (ppm)": 410,
        },
        {
            "Year": 2022,
            "Carbon Dioxide Level (ppm)": "%150 (above pre-industrial levels)",
        },
        {
            "Year": 2023,
            "Carbon Dioxide Level (ppm)": "1.45°C (new temperature)",
        },
    ]
}

export const effectsAndMeasuresOfGlobalWarming = {
    title: 'Effects and Measures of Global Warming',
    description: 'This dataset outlines the various effects of global warming and the measures that can be taken to address them. As of 2023, global temperatures have risen to 1.45°C, dangerously close to the 1.5°C limit set by the Paris Agreement. In 2021, greenhouse gas emissions reached record levels, with concentrations peaking in 2022. Carbon dioxide levels are currently 150% above pre-industrial levels, having surpassed 410 ppm in 2020. Vulnerable populations have faced significantly higher mortality rates due to floods, droughts, and storms compared to those in less vulnerable areas, with a rate 15 times higher from 2010 to 2020. Current national commitments project a 14% increase in global emissions by the end of this decade. Scientists recommend that to limit global warming to 1.5°C compared to pre-industrial levels, emissions must be reduced by 4% from 2010 levels by 2030. If immediate action is not taken by governments, the private sector, and civil society, the risk of a climate disaster could increase significantly.',
    category: 'Greenhouse Gas Emissions and Temperature Increases',
    data: [
        {
            "Effects and Measures": "Global Temperature Rise",
            "Description": "As of 2023, global temperatures have risen to 1.45°C, dangerously close to the 1.5°C limit set by the Paris Agreement.",
        },
        {
            "Effects and Measures": "Greenhouse Gas Emissions",
            "Description": "In 2021, emissions reached record levels, and in 2022, concentrations peaked at record highs.",
        },
        {
            "Effects and Measures": "Carbon Dioxide Levels",
            "Description": "Carbon dioxide levels are currently 150% above pre-industrial levels, having surpassed 410 ppm in 2020.",
        },
        {
            "Effects and Measures": "Impact on Vulnerable Areas",
            "Description": "Between 2010 and 2020, mortality rates from floods, droughts, and storms in vulnerable regions were 15 times higher than those in less vulnerable areas.",
        },
        {
            "Effects and Measures": "National Commitments",
            "Description": "Current national commitments project a 14% increase in global emissions by the end of this decade.",
        },
        {
            "Effects and Measures": "Targets",
            "Description": "Scientists recommend that to limit global warming to 1.5°C compared to pre-industrial levels, emissions must be reduced by 4% from 2010 levels by 2030.",
        },
        {
            "Effects and Measures": "Climate Disaster Risk",
            "Description": "If immediate action is not taken by governments, the private sector, and civil society, the risk of a climate disaster could increase significantly.",
        },
    ]
}

export const emissionTargetsAlignedWithGoals = {
    title: 'Emission Targets Aligned with Goals',
    description: 'This dataset outlines various emission targets aimed at mitigating climate change impacts and achieving global warming limits. The 1.5°C temperature target requires the world to achieve net-zero carbon dioxide emissions by 2050 compared to pre-industrial levels. Scientists recommend a 4% reduction in emissions from 2010 levels by 2030 to limit global warming to 1.5°C. Current national commitments project a 14% increase in global emissions by the end of this decade. As of 2019, 185 parties have ratified the Paris Agreement, with 183 parties submitting their initial Nationally Determined Contributions (NDCs) to the UN Climate Change Secretariat. During the COVID-19 pandemic in 2020, global CO2 emissions decreased by 5.2% due to reduced energy demand. However, emissions increased by 6% in 2021, with greenhouse gas concentrations reaching record levels in 2022. To align with the 2°C and 1.5°C targets by 2030, emissions must peak as soon as possible and then be rapidly reduced.',
    category: 'Greenhouse Gas Emissions and Temperature Increases',
    data: [
        {
            "Target": "1.5°C Temperature Target",
            "Description": "To limit global warming to 1.5°C compared to pre-industrial levels, the world must achieve net-zero carbon dioxide emissions by 2050.",
        },
        {
            "Target": "2030 Emission Reduction Target",
            "Description": "Scientists recommend that emissions should be reduced by 4% from 2010 levels by 2030 to limit global warming to 1.5°C.",
        },
        {
            "Target": "2020 Emission Projections",
            "Description": "Current national commitments project a 14% increase in global emissions by the end of this decade.",
        },
        {
            "Target": "Nationally Determined Contributions (NDC)",
            "Description": "As of 2019, 185 parties have ratified the Paris Agreement, and 183 parties have submitted their initial NDCs to the UN Climate Change Secretariat.",
        },
        {
            "Target": "2020 Emission Decrease",
            "Description": "In 2020, during the COVID-19 pandemic, global carbon dioxide (CO2) emissions decreased by 5.2% due to reduced energy demand.",
        },
        {
            "Target": "2021 Emission Increase",
            "Description": "In 2021, CO2 emissions increased by 6%, and by 2022, greenhouse gas concentrations reached record levels.",
        },
        {
            "Target": "2020-2030 Emission Increase",
            "Description": "To achieve emissions targets aligned with the 2°C and 1.5°C goals by 2030, emissions must peak as soon as possible and then be rapidly reduced.",
        },
    ]
}

export const globalClimateAgreementCompliance = {
    title: 'Compliance with Global Climate Agreements',
    description: 'This dataset provides an overview of the compliance status of different regions with global climate agreements. It outlines the number of parties that have submitted their Nationally Determined Contributions (NDCs), ratified the Paris Agreement, and are parties to the United Nations Framework Convention on Climate Change (UNFCCC). As of now, Europe and North America have 35 NDCs submitted and 36 parties ratifying the Paris Agreement. In Sub-Saharan Africa, there are 32 NDCs and 34 parties. Latin America and the Caribbean have 25 parties for both NDC submissions and the Paris Agreement. Oceania has 14 parties for both categories. Eastern and Southeast Asia have submitted 12 NDCs with 14 parties in the Paris Agreement, while Central and South Asia have 10 NDCs and 10 ratifications. North Africa and West Asia have 12 NDCs with 13 parties for the Paris Agreement. Overall, globally, there are 142 NDCs, 148 parties ratifying the Paris Agreement, and 197 parties to the UNFCCC.',
    category: 'Greenhouse Gas Emissions and Temperature Increases',
    data: [
        {
            "Region": "Europe and North America",
            "NDC Submitted Parties": 35,
            "Paris Agreement Ratifying Parties": 36,
            "UNFCCC Parties": 49,
        },
        {
            "Region": "Sub-Saharan Africa",
            "NDC Submitted Parties": 32,
            "Paris Agreement Ratifying Parties": 34,
            "UNFCCC Parties": 49,
        },
        {
            "Region": "Latin America and the Caribbean",
            "NDC Submitted Parties": 25,
            "Paris Agreement Ratifying Parties": 25,
            "UNFCCC Parties": 33,
        },
        {
            "Region": "Oceania",
            "NDC Submitted Parties": 14,
            "Paris Agreement Ratifying Parties": 14,
            "UNFCCC Parties": 14,
        },
        {
            "Region": "Eastern and Southeast Asia",
            "NDC Submitted Parties": 12,
            "Paris Agreement Ratifying Parties": 14,
            "UNFCCC Parties": 15,
        },
        {
            "Region": "Central and South Asia",
            "NDC Submitted Parties": 10,
            "Paris Agreement Ratifying Parties": 10,
            "UNFCCC Parties": 17,
        },
        {
            "Region": "North Africa and West Asia",
            "NDC Submitted Parties": 12,
            "Paris Agreement Ratifying Parties": 13,
            "UNFCCC Parties": 18,
        },
        {
            "Region": "Global",
            "NDC Submitted Parties": 142,
            "Paris Agreement Ratifying Parties": 148,
            "UNFCCC Parties": 197,
        },
    ]
}

export const climateChangeStrategies = {
    title: 'Strategies Related to Climate Change',
    description: 'This dataset outlines various strategies implemented by countries to address climate change. It highlights the number of countries involved in different strategies. As of now, 129 countries have established National Disaster Risk Reduction Strategies. Additionally, 122 countries are working on aligning with the Sustainable Development Goals (SDGs). Local governments have implemented Disaster Risk Reduction Strategies in 101 countries. There are 61 strategies that are compliant with the Sendai Framework, while 95 countries have developed Multi-Hazard Early Warning Systems. Nationally Determined Contributions (NDCs) have been submitted by 193 parties. Furthermore, 154 countries have developed adaptation plans to combat the impacts of climate change.',
    category: 'Greenhouse Gas Emissions and Temperature Increases',
    data: [
        {
            "Strategy": "National Disaster Risk Reduction Strategies",
            "Number of Countries": 129,
        },
        {
            "Strategy": "Alignment with Sustainable Development Goals (SDGs)",
            "Number of Countries": 122,
        },
        {
            "Strategy": "Local Governments Disaster Risk Reduction Strategies",
            "Number of Countries": 101,
        },
        {
            "Strategy": "Strategies Compliant with the Sendai Framework",
            "Number of Countries": 61,
        },
        {
            "Strategy": "Multi-Hazard Early Warning Systems",
            "Number of Countries": 95,
        },
        {
            "Strategy": "Nationally Determined Contributions (NDC)",
            "Number of Countries": 193,
        },
        {
            "Strategy": "Adaptation Plans",
            "Number of Countries": 154,
        },
    ]
}

export const covid19EmissionEffects2020 = {
    title: '2020 COVID-19 Period Emission Effects',
    description: 'This dataset highlights the effects of the COVID-19 pandemic on global emissions in 2020. The pandemic led to a significant decrease in CO2 emissions worldwide, with a reported decline of 5.2%. Developed countries experienced a more pronounced reduction of 10%, while developing countries saw a decrease of 4%. However, this was followed by a rebound in 2021, where emissions increased by 6%. The economic slowdown due to the pandemic resulted in a notable drop in energy demand, further influencing emissions trends.',
    category: 'Greenhouse Gas Emissions and Temperature Increases',
    data: [
        {
            "Effects": "Global CO2 Emissions Decrease (%)",
            "Value": "%5.2",
        },
        {
            "Effects": "Emission Decrease in Developed Countries (%)",
            "Value": "%10",
        },
        {
            "Effects": "Emission Decrease in Developing Countries (%)",
            "Value": "%4",
        },
        {
            "Effects": "2021 Emission Increase (%)",
            "Value": "%6",
        },
        {
            "Effects": "Economic Slowdown of the Pandemic",
            "Value": "Decrease in energy demand",
        },
    ]
}

export const globalWarmingComparedToPreIndustrialLevels = {
    title: 'Global Warming Compared to Pre-Industrial Levels',
    description: 'This dataset compares the increase in global temperatures to pre-industrial levels over the years. As of 2023, global temperatures have risen by 1.5°C compared to pre-industrial levels. In 2022, the average global temperature was 1.1°C higher than pre-industrial levels. In 2021, there was a 1.2°C increase, while 2019 recorded a 1.0°C rise in temperatures. The data indicates a consistent trend of increasing temperatures relative to pre-industrial benchmarks, emphasizing the urgency of addressing climate change.',
    category: 'Greenhouse Gas Emissions and Temperature Increases',
    data: [
        {
            "Year": 2023,
            "Global Temperature Increase (C)": 1.5,
            "Description": "Global temperature has increased by 1.5°C compared to pre-industrial levels.",
        },
        {
            "Year": 2022,
            "Global Temperature Increase (C)": 1.1,
            "Description": "The average global temperature in 2021 was 1.11°C higher than pre-industrial levels.",
        },
        {
            "Year": 2021,
            "Global Temperature Increase (C)": 1.2,
            "Description": "An increase of 1.2°C has occurred compared to pre-industrial levels.",
        },
        {
            "Year": 2019,
            "Global Temperature Increase (C)": 1.0,
            "Description": "Global temperature has increased by 1.0°C compared to pre-industrial levels.",
        },
        {
            "Year": 2018,
            "Global Temperature Increase (C)": 1.0,
            "Description": "The average global temperature has risen by 1.0°C compared to pre-industrial levels.",
        },
    ]
}

export const totalGreenhouseGasEmissionsByCountryType = {
    title: 'Total Greenhouse Gas Emissions by Developed and Developing Countries',
    description: 'This dataset presents the total greenhouse gas emissions of developed and developing countries over the years. Developed countries (Annex I) and developing countries (Non-Annex I) have shown different trends in emissions. In the year 2000, developed countries emitted 17.93 Gt CO2e, while developing countries emitted 15.426 Gt CO2e. By 2010, emissions from developed countries decreased to 17.466 Gt CO2e, whereas emissions from developing countries increased to 19.801 Gt CO2e. In 2018, developed countries emitted 16.771 Gt CO2e, and emissions from developing countries rose to 22.095 Gt CO2e, indicating a growing disparity in emissions between these two groups.',
    category: 'Greenhouse Gas Emissions and Temperature Increases',
    data: [
        {
            "Year": 2000,
            "Developed Countries (Annex I)": 17.93,
            "Developing Countries (Non-Annex I)": 15.426,
        },
        {
            "Year": 2010,
            "Developed Countries (Annex I)": 17.466,
            "Developing Countries (Non-Annex I)": 19.801,
        },
        {
            "Year": 2018,
            "Developed Countries (Annex I)": 16.771,
            "Developing Countries (Non-Annex I)": 22.095,
        },
    ]
}

// Progress in Climate Change Education

export const climateChangeAndSustainabilityInCurriculum = {
    title: 'Climate Change and Sustainability Topics in Curriculum',
    description: 'This dataset provides an overview of the inclusion of climate change and sustainability topics in educational curricula. It highlights the percentage of curricula that do not address climate change and sustainability, as well as the awareness and readiness of educators and students regarding these critical issues. In 2023, 69% of ninth-grade science and social studies curricula did not mention climate change. Additionally, 47% of national curriculum frameworks lacked references to climate change. The data also shows that 95% of teachers acknowledge the importance of teaching climate change, while 91% of students reported learning something about it. However, only 30% of students could fully explain the fundamental principles of climate change, indicating a gap in understanding. There is also a significant desire among teachers to learn more about these topics, with 80% expressing the need for further education.',
    category: 'Progress in Climate Change Education',
    data: [
        {
            "Year": 2023,
            "Description": "Percentage of ninth-grade science and social studies curricula that do not mention climate change",
            "Rate (%)": 69,
        },
        {
            "Year": 2023,
            "Description": "Percentage of national curriculum frameworks that do not mention climate change",
            "Rate (%)": 47,
        },
        {
            "Year": 2024,
            "Description": "Percentage of curricula that do not address sustainability topics",
            "Rate (%)": 66,
        },
        {
            "Year": 2024,
            "Description": "Percentage of countries reporting plans to focus curricula on climate change and sustainability",
            "Rate (%)": 75,
        },
        {
            "Year": 2021,
            "Description": "Percentage of teachers acknowledging the importance of teaching climate change",
            "Rate (%)": 95,
        },
        {
            "Year": 2023,
            "Description": "Percentage of students claiming to have learned something about climate change",
            "Rate (%)": 91,
        },
        {
            "Year": 2023,
            "Description": "Percentage of students able to fully explain the fundamental principles of climate change",
            "Rate (%)": 30,
        },
        {
            "Year": 2022,
            "Description": "Percentage of youth who can only define general principles regarding climate change",
            "Rate (%)": 70,
        },
        {
            "Year": 2022,
            "Description": "Percentage of primary and secondary education policies that partially integrate Education for Sustainable Development and Global Citizenship Education",
            "Rate (%)": 90,
        },
        {
            "Year": 2022,
            "Description": "Percentage of teachers feeling unprepared to teach themes of sustainable development, global citizenship, and peace in educational policies",
            "Rate (%)": 25,
        },
        {
            "Year": 2022,
            "Description": "Percentage of teachers wanting to learn more about these topics",
            "Rate (%)": 80,
        },
    ]
}

// Climate Finance

export const climateFinanceByYear = {
    title: 'Climate Finance Over the Years',
    description: 'This dataset provides an overview of climate financing in billions of dollars over the years. It shows the financial commitments made to support climate change mitigation and adaptation efforts globally. In 2015, the total climate finance was reported at $30 billion. The Green Climate Fund contributed $10.3 billion in 2016. Significant commitments of $100 billion were made in both 2017 and 2018. In 2019, financing for developing countries amounted to $33 billion, while developed countries contributed $83 billion. Climate finance varied in the following years, with $79.6 billion in 2020, $89.6 billion in 2021, $41 billion in 2022, $83.3 billion in 2023, and returning to $41 billion in 2024.',
    category: 'Climate Finance',
    data: [
        {
            "Year": 2015,
            "Climate Finance (billion dollars)": 30.00,
        },
        {
            "Year": 2016,
            "Climate Finance (billion dollars)": 10.30, // Green Climate Fund
        },
        {
            "Year": 2017,
            "Climate Finance (billion dollars)": 100.00, // commitment
        },
        {
            "Year": 2018,
            "Climate Finance (billion dollars)": 100.00, // commitment
        },
        {
            "Year": 2019,
            "Climate Finance (billion dollars)": 33.00, // Developing countries
        },
        {
            "Year": 2019,
            "Climate Finance (billion dollars)": 83.00, // Developed countries
        },
        {
            "Year": 2020,
            "Climate Finance (billion dollars)": 79.60,
        },
        {
            "Year": 2021,
            "Climate Finance (billion dollars)": 89.60,
        },
        {
            "Year": 2022,
            "Climate Finance (billion dollars)": 41.00,
        },
        {
            "Year": 2023,
            "Climate Finance (billion dollars)": 83.30,
        },
        {
            "Year": 2024,
            "Climate Finance (billion dollars)": 41.00,
        },
    ]
}

export const climateFinanceFromDevelopingCountries = {
    title: 'Climate Finance Provided by Developing Countries',
    description: 'This dataset presents the climate finance contributions from developing countries in billions of dollars over the years. In 2015, developing countries contributed $33 billion towards climate finance efforts. This amount slightly increased to $38 billion in 2016, while the financing remained stable at $33 billion in 2019. These contributions are essential for addressing climate change impacts and supporting sustainable development initiatives in vulnerable regions.',
    category: 'Climate Finance',
    data: [
        {
            "Year": 2015,
            "Climate Finance (billion dollars)": 33,
        },
        {
            "Year": 2016,
            "Climate Finance (billion dollars)": 38,
        },
        {
            "Year": 2019,
            "Climate Finance (billion dollars)": 33,
        },
    ]
}

export const climateFinanceTargetsAndAchievements = {
    title: 'Climate Finance Targets and Achievements',
    description: 'This dataset outlines the climate finance targets set by developed countries and the actual achievements in billions of dollars over the years. In 2015, developed countries committed to providing $100 billion annually for climate financing. By 2019, the actual climate finance provided was $79.6 billion, followed by $83.3 billion in 2020. In 2021, this amount increased to $89.6 billion, reflecting progress in mobilizing resources for climate action. However, as of 2024, the target has yet to be fully met, indicating ongoing challenges in achieving climate financing goals.',
    category: 'Climate Finance',
    data: [
        {
            "Year": 2015,
            "Target (billion dollars)": 100,
            "Achievement (billion dollars)": "-",
            "Description": "Developed countries committed to providing $100 billion annually for climate financing.",
        },
        {
            "Year": 2019,
            "Target (billion dollars)": 100,
            "Achievement (billion dollars)": 79.6,
            "Description": "Climate finance provided by developed countries.",
        },
        {
            "Year": 2020,
            "Target (billion dollars)": 100,
            "Achievement (billion dollars)": 83.3,
            "Description": "Climate finance provided by developed countries.",
        },
        {
            "Year": 2021,
            "Target (billion dollars)": 100,
            "Achievement (billion dollars)": 89.6,
            "Description": "Mobilized and activated climate finance.",
        },
        {
            "Year": 2024,
            "Target (billion dollars)": 100,
            "Achievement (billion dollars)": "-",
            "Description": "The target has yet to be fully met.",
        },
    ]
}

export const greenClimateFundApplicationsAndFunding = {
    title: 'Green Climate Fund Applications and Funding',
    description: 'This dataset outlines the applications and funding provided by the Green Climate Fund over the years. In 2019, there were a total of 75 applications related to national adaptation plans and other planning processes, with $75 million granted for these efforts. Additionally, there were 28 applications focused on the creation of national adaptation plans, also receiving $75 million. A total of 7 applications were under approval, amounting to $17 million in funding. In 2021, initial efforts for the Green Climate Fund led to $10.3 million in grant financing, along with $89.6 million mobilized and activated for climate financing in the same year.',
    category: 'Climate Finance',
    data: [
        {
            "Year": 2019,
            "Green Climate Fund Application Count": 75,
            "Grant Funding (million dollars)": 75,
            "Description": "Applications for national adaptation plans and other adaptation planning processes.",
        },
        {
            "Year": 2019,
            "Green Climate Fund Application Count": 28,
            "Grant Funding (million dollars)": 75,
            "Description": "Access to the Green Climate Fund for the establishment of national adaptation plans.",
        },
        {
            "Year": 2019,
            "Green Climate Fund Application Count": 7,
            "Grant Funding (million dollars)": 17,
            "Description": "Funding applications under approval.",
        },
        {
            "Year": 2021,
            "Green Climate Fund Application Count": "-",
            "Grant Funding (million dollars)": 10.3,
            "Description": "Initial efforts for the Green Climate Fund.",
        },
        {
            "Year": 2021,
            "Green Climate Fund Application Count": "-",
            "Grant Funding (million dollars)": 89.6,
            "Description": "Mobilized and activated climate financing in 2021.",
        },
    ]
}

export const climateFinanceReductionAndAdaptation = {
    title: 'Reduction and Adaptation in Climate Finance',
    description: 'This dataset outlines the trends in climate finance reduction and adaptation financing over the years. As of 2023, climate finance has begun to decline, with a reported decrease of 4% compared to previous years. The funding provided in 2020 was $83.3 billion, which fell short of the $100 billion target. Additionally, adaptation financing for developing countries has been insufficient, estimated to be 5-10 times lower than necessary. In 2021, there was a reported 10% reduction in climate finance, while in 2017-2018, the average annual climate financing was $48.7 billion. In 2013-2014, there was a 17% increase in climate finance, highlighting the fluctuations in funding levels.',
    category: 'Climate Finance',
    data: [
        {
            "Year": 2024,
            "Reduction in Climate Finance (%)": "-",
            "Adaptation Financing Status": "-",
            "Description": "As of 2023, climate finance has begun to decline.",
        },
        {
            "Year": 2023,
            "Reduction in Climate Finance (%)": 4,
            "Adaptation Financing Status": "Insufficient",
            "Description": "In 2020, climate finance provided was $83.3 billion, falling short of the $100 billion target.",
        },
        {
            "Year": 2023,
            "Reduction in Climate Finance (%)": "-",
            "Adaptation Financing Status": "Estimated to be 5-10 times lower than needs",
            "Description": "Adaptation financing provided to developing countries is insufficient.",
        },
        {
            "Year": 2022,
            "Reduction in Climate Finance (%)": "-",
            "Adaptation Financing Status": "-",
            "Description": "In 2019, climate finance provided was $79.6 billion.",
        },
        {
            "Year": 2021,
            "Reduction in Climate Finance (%)": 10,
            "Adaptation Financing Status": "Increasing",
            "Description": "During the period of 2017-2018, climate finance was reported to average $48.7 billion annually.",
        },
        {
            "Year": 2020,
            "Reduction in Climate Finance (%)": "-",
            "Adaptation Financing Status": "17% increase",
            "Description": "In the period of 2013-2014, a 17% increase in climate finance was achieved.",
        },
    ]
}

export const annualClimateChangeGoals = {
    title: 'Annual Climate Change Goals',
    description: 'This dataset outlines the annual climate change targets and their status. As of 2024, the goal is to mobilize $100 billion, which has yet to be met, as the climate finance achieved in 2021 was $89.6 billion. In 2023, an increase of 14% in emissions is expected based on current national commitments. The year 2022 saw a 4% reduction target, with actual emissions based on global energy levels increasing by 6%. Scientists recommend reducing emissions by 4% compared to 2010 levels by 2030 to limit global warming to 1.5°C above pre-industrial levels. In 2021, developed countries committed to mobilizing $100 billion annually to meet climate-related needs, and a net-zero emission target has been set to achieve by 2050.',
    category: 'Climate Finance',
    data: [
        {
            "Year": 2024,
            "Goal": "100 billion dollars",
            "Status": "Not yet met",
            "Description": "The climate finance provided in 2021 reached $89.6 billion."
        },
        {
            "Year": 2023,
            "Goal": "14% increase",
            "Status": "Expected",
            "Description": "According to current national commitments, a 14% increase in emissions is anticipated by the end of this decade."
        },
        {
            "Year": 2022,
            "Goal": "4% reduction",
            "Status": "Financing provided",
            "Description": "Global energy-based CO2 emissions increased by 6% in 2021."
        },
        {
            "Year": 2022,
            "Goal": "4% reduction by 2030",
            "Status": "Required reduction",
            "Description": "Scientists propose reducing emissions by 4% compared to 2010 levels by 2030 to limit global warming to 1.5°C above pre-industrial levels."
        },
        {
            "Year": 2021,
            "Goal": "100 billion dollars",
            "Status": "Committed",
            "Description": "Developed countries committed to mobilizing $100 billion annually by 2020 to address climate-related needs."
        },
        {
            "Year": 2021,
            "Goal": "Net zero emissions",
            "Status": "Target set",
            "Description": "To limit global warming to 1.5°C above pre-industrial levels, the world must achieve net-zero carbon dioxide emissions by 2050."
        },
    ]
}

export const climateFinanceSupportTypes = {
    title: 'Types of Climate Finance Support',
    description: 'This dataset outlines the types of climate finance support provided in terms of climate-focused and core/general support from 2011 to 2018. The values are represented in billion dollars, indicating the financial commitment made towards climate-related initiatives and core support during these years.',
    category: 'Climate Finance',
    data: [
        {
            "Year": 2011,
            "Climate-Focused Support (Billion Dollars)": 16.97,
            "Core/General Support (Billion Dollars)": 11.78,
        },
        {
            "Year": 2012,
            "Climate-Focused Support (Billion Dollars)": 17.08,
            "Core/General Support (Billion Dollars)": 11.83,
        },
        {
            "Year": 2013,
            "Climate-Focused Support (Billion Dollars)": 25.42,
            "Core/General Support (Billion Dollars)": 15.11,
        },
        {
            "Year": 2014,
            "Climate-Focused Support (Billion Dollars)": 26.60,
            "Core/General Support (Billion Dollars)": 16.63,
        },
        {
            "Year": 2015,
            "Climate-Focused Support (Billion Dollars)": 32.98,
            "Core/General Support (Billion Dollars)": 12.42,
        },
        {
            "Year": 2016,
            "Climate-Focused Support (Billion Dollars)": 37.52,
            "Core/General Support (Billion Dollars)": 11.91,
        },
        {
            "Year": 2017,
            "Climate-Focused Support (Billion Dollars)": 36.97,
            "Core/General Support (Billion Dollars)": 11.49,
        },
        {
            "Year": 2018,
            "Climate-Focused Support (Billion Dollars)": 41.69,
            "Core/General Support (Billion Dollars)": 13.50,
        },
    ]
}

export const annualClimateChangeFinanceGoals = {
    title: 'Annual Climate Change Finance Goals',
    description: 'This dataset outlines the annual climate finance goals related to climate change, including climate-specific financing share, general financing support, and the average annual climate financing from 2017 to 2018.',
    category: 'Climate Finance',
    data: [
        {
            "Year": "2017-2018",
            "Climate-Specific Financing Share (Billion USD)": 36.2,
            "General Financing Support (Billion USD)": 11.49,
            "Average Annual Climate Financing (Billion USD)": 48.7,
        },
    ]
}
