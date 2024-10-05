export const aiSystemInstruction = (data: string) => {
  return `You are an assistant designed to help users with data related to Gender Inequality and Climate Change. Here are the key points to remember:

        1. Your primary focus is to provide insights and information specifically related to Gender Inequality and Climate Change based on the data provided by the user.
        
        2. When users provide data, you should:
           - Read and analyze the data.
           - Explain the data clearly and concisely.
           - Identify and elaborate on the connections between Gender Inequality and Climate Change present in the data.
           - Highlight any potential issues or challenges indicated by the data in these two areas.
           - Suggest actionable solutions to address the identified issues.
        
        3. Here is the data you need to consider: ${data}
        
        4. You should not provide information outside of these topics. Always remind users to ask questions related to Gender Inequality, Climate Change, and the data provided.
        
        5. Start by introducing yourself as an assistant and inviting the user to ask questions about Gender Inequality and Climate Change based on the provided data.
        
        Your responses should be detailed, relevant, and informative, ensuring that the user receives the best possible assistance regarding these important topics.`
};

export const aiTestUserInfo = { firstName: "Mehmet", lastName: "Acar" }

export const predefinedQuestions = [
    "What trend does the data show regarding gender inequality?",
    "Based on the data, what areas are affected by gender inequality?",
    "How does this table reflect the impact of climate change on gender inequality?",
    "What connections between gender inequality and climate change can be drawn from the data?",
    "Based on the information in the table, what recommendations can be made to reduce gender inequality?"
];

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

export const allData = [
    accessToSexualHealthRights,
    adoptionOfNationalDisasterRiskReductionStrategies,
    adolescentFertilityRates,
    annualClimateChangeFinanceGoals,
    annualClimateChangeGoals,
    annualInvestmentGapForGenderEquality2023,
    atRiskGirlsForChildMarriage2021To2023,
    budgetingSystemsForGenderEqualityRegionalDistribution2019,
    carbonDioxideLevels,
    changeInFemaleRepresentationInParliaments2010To2024,
    childMarriageEndingProjection2023,
    childMarriageRatesByRegion2000To2024,
    childMarriageRatesByYear1990To2024,
    childMarriageRatesUnder15ByRegion2000To2024,
    childMarriageRatesUnder15ByYear1990To2024,
    childMarriageRateChange2009To2024,
    climateActionGoals,
    climateChangeAndSustainabilityInCurriculum,
    climateChangeStrategies,
    climateFinanceByYear,
    climateFinanceFromDevelopingCountries,
    climateFinanceReductionAndAdaptation,
    climateFinanceSupportTypes,
    climateFinanceTargetsAndAchievements,
    complianceWithInternationalAgreements,
    countriesAchievingGenderEquality,
    countriesDevelopingNationalAdaptationPlans,
    countriesThatApplyAndDoNotApplyTheEqualPayPrinciple2023,
    countriesThatBanDiscriminationAgainstWomenByYear,
    countriesThatBanMarriagesUnder182023,
    countriesWithAndWithoutParliamentaryQuotasForWomen2024,
    countriesWithDisasterRiskManagementRegulations2015,
    countriesWithLackOfLawsDefiningRapeBasedOnConsentByYear,
    countryMechanismsForDisasterRiskReduction2014_2015,
    covid19EmissionEffects2020,
    dataMonitoringCapacityForSDG5,
    definitionsOfViolenceAgainstWomenAndRape,
    developmentOfDisasterRiskReductionStrategies,
    disasterRelatedDeathAndLossRates,
    disasterRiskReductionStrategiesAndPolicyCompliance,
    distributionOfUnpaidCareAndHouseworkHoursByYear,
    effectOfGenderQuotasOnFemaleRepresentation2023,
    economicLossFromNaturalDisasters,
    emissionTargetsAlignedWithGoals,
    effectsAndMeasuresOfGlobalWarming,
    equalPayForEqualWorkPrinciple,
    femaleGenitalMutilationRates,
    femaleGenitalMutilationStatistics,
    femaleParliamentaryRepresentationByRegion2000To2024,
    femaleRepresentationInLocalGovernments2019To2024,
    femaleRepresentationInLocalGovernmentsByRegion2021,
    femaleRepresentationInNationalParliaments2000To2024,
    genderBasedDisadvantagesInUnpaidCareAndHousework,
    genderEqualityRegionalDifferences,
    genderEqualityResourceAllocationSystems,
    genderInequalityInUnpaidCareWork,
    geologicalAndHydrometeorologicalEventsDeathCount,
    globalClimateAgreementCompliance,
    globalLaborForceParticipationAndFemaleRepresentationInManagerialPositionsComparisonByYear,
    globalMedicalStaffGenderDistribution,
    globalTemperatureChangesByYear,
    globalWarmingComparedToPreIndustrialLevels,
    greenClimateFundApplicationsAndFunding,
    greenhouseGasEmissionChanges,
    impactOfClimateChangeOnFoodInsecurity,
    impactOfClimateChangeOnWomen,
    increaseInRepresentationRatesOfWomenInExecutivePositionsFrom2015To2024,
    landOwnershipAndSecurityRatesByCountry2024,
    legalGuaranteesForLandOwnership,
    legalGapsInWomenRights2019,
    legalProtectionGapsFrom2018To2019,
    legalStatusGuaranteeingSexualAndReproductiveHealthRights,
    legalStatusOfCountriesRegardingWomenRights2016,
    localGovernmentsDisasterRiskReductionStrategies,
    marriageAgeEqualityAndWomenRights2021To2024,
    maternityLeaveStatisticsByCountry,
    mobilePhoneOwnershipGenderDifferences,
    naturalDisasterAffectedPeople,
    nationalContributionsAndCompliance,
    percentageOfWomenExperiencingViolenceInLast12Months,
    paidAndUnpaidWorkHoursByGenderAndRegion,
    postDisasterAssistanceRequestRate,
    preparationAndImplementationOfNationalCompliancePlans,
    preAndPostPandemicUnpaidCareAndHouseworkHours,
    priorityAreasInAdaptationStrategies,
    prioritySectorsAndPartiesByAdaptationComponents,
    progressTowardsGoals,
    reductionInChildMarriageRates2010To2024,
    regionalAchievementAndAchievementGapEmploymentAndEconomicRights2021,
    regionalChildMarriageRates2020To2024,
    regionalComplianceWithParisAgreementAndNDCs,
    regionalDistributionOfDisasterRelatedDeaths,
    regionalDistributionOfFemaleGenitalMutilation,
    regionalDistributionOfViolenceAgainstWomen,
    regionalFemaleRepresentation2021,
    regionalLegalAchievementAndGapEmploymentAndEconomicRights2021,
    regionalSuccessAndAchievementGapInChildMarriage2021,
    relationshipBetweenPandemicAndNaturalDisasters,
    representationOfWomenInManagerialPositionsByRegion,
    severityAndFrequencyOfNaturalDisasters,
    sexualAndPhysicalViolenceReportingRates,
    successRatesForViolenceAgainstWomenTargets,
    theEffectOfThePandemicOnTheRepresentationOfWomenInTheWorkforceFrom2020to2022,
    timeRequiredForFemaleRepresentationInNationalParliaments,
    timeRequiredToCloseLegalProtectionsByYear,
    timeToAchieveGenderEqualityInManagerialPositionsByYear,
    totalDeathsAndAffectedPeopleByYear,
    totalGreenhouseGasEmissionsByCountryType,
    violenceAgainstWomenAndGirlsRates,
    violenceAgainstWomenRates,
    womenChildcareHours2010To2024,
    womenDecisionMakingRightsInSexualAndReproductiveHealth,
    womenDecisionMakingRightsInSexualAndReproductiveHealthByRegion,
    womenExperiencingViolenceByAgeGroup,
    womenLandOwnershipRatesSelectedCountries,
    womenLandRightsProtectionStatus,
    womenUnpaidCareAndHouseworkTime2010To2024,
    womenWithdrawalFromLaborForce,
    womenWithdrawalFromLaborForceWithYoungChildren2020,
];

// Country Data

export const proportionsOfElectedSeatsHeldByWomenInDeliberativeBodiesOfLocalGovernments = {
  "title": "Proportions of Elected Seats Held by Women in Deliberative Bodies of Local Governments",
  "description": "This table presents data on the percentage of women holding elected seats in local government deliberative bodies. The representation of women in local governance plays a critical role in shaping policies related to climate adaptation and mitigation. In regions where women are underrepresented, the decision-making process may lack gender-inclusive perspectives, potentially overlooking the specific needs of women and gender minorities in the face of climate disasters. By increasing women's participation in local governance, policies can be more equitable, leading to more effective and inclusive climate resilience strategies that address both environmental and social inequalities.",
  "category": "Parliament Representation",
  "type": "country-data",
  "data": [
    {
      "2018": "",
      "2019": "",
      "2020": "16.52661",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Afghanistan",
      "Sex": "FEMALE"
    },
    {
      "2018": "36.9279",
      "2019": "",
      "2020": "43.60716",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Albania",
      "Sex": "FEMALE"
    },
    {
      "2018": "17.58929",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Algeria",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "American Samoa",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "41.25",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Andorra",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "66.66667",
      "2021": "",
      "2022": "66.66667",
      "2023": "",
      "GeoAreaName": "Antigua and Barbuda",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "9.04103",
      "2020": "8.98018",
      "2021": "9.06647",
      "2022": "24.72145",
      "2023": "27.99452",
      "GeoAreaName": "Armenia",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "33.91919",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Australia",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "34.88256",
      "2021": "34.88256",
      "2022": "34.88256",
      "2023": "34.88256",
      "GeoAreaName": "Australia and New Zealand",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "23.09492",
      "2020": "",
      "2021": "24.55209",
      "2022": "25.69519",
      "2023": "26.30682",
      "GeoAreaName": "Austria",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "38.79934",
      "2021": "38.79934",
      "2022": "38.79934",
      "2023": "38.79934",
      "GeoAreaName": "Azerbaijan",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "13.33333",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "10",
      "GeoAreaName": "Bahrain",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "25.21183",
      "2020": "",
      "2021": "23.33625",
      "2022": "23.40457",
      "2023": "",
      "GeoAreaName": "Bangladesh",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Barbados",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "48.19989",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Belarus",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "39.03294",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Belgium",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "30.95752",
      "2021": "",
      "2022": "31.52473",
      "2023": "",
      "GeoAreaName": "Belize",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "3.52617",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Benin",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "12.77322",
      "2023": "",
      "GeoAreaName": "Bhutan",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "50.37727",
      "2023": "",
      "GeoAreaName": "Bolivia (Plurinational State of)",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "19.59736",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Bosnia and Herzegovina",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "14.89796",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Botswana",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "15.7098",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Brazil",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Brunei Darussalam",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "27.15232",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Bulgaria",
      "Sex": "FEMALE"
    },
    {
      "2018": "12.68143",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Burkina Faso",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "33.30472",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Burundi",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "41.81287",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Cabo Verde",
      "Sex": "FEMALE"
    },
    {
      "2018": "16.09157",
      "2019": "",
      "2020": "16.92592",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Cambodia",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "24.54451",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Cameroon",
      "Sex": "FEMALE"
    },
    {
      "2018": "26.59966",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Canada",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Central African Republic",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "41.32847",
      "2021": "41.25707",
      "2022": "41.3234",
      "2023": "41.3267",
      "GeoAreaName": "Central and Southern Asia",
      "Sex": "FEMALE"
    },
    {
      "2018": "23.29724",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "33.55521",
      "2023": "",
      "GeoAreaName": "Chile",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "32.17924",
      "GeoAreaName": "China",
      "Sex": "FEMALE"
    },
    {
      "2018": "23.07692",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "China, Macao Special Administrative Region",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "17.89584",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Colombia",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "33.30144",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Comoros",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "45.51724",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Costa Rica",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "14.95047",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Côte d'Ivoire",
      "Sex": "FEMALE"
    },
    {
      "2018": "26.39111",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "30.03436",
      "2023": "",
      "GeoAreaName": "Croatia",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "36.83867",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "42.11797",
      "GeoAreaName": "Cuba",
      "Sex": "FEMALE"
    },
    {
      "2018": "15.96341",
      "2019": "15.96341",
      "2020": "",
      "2021": "16.08721",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Cyprus",
      "Sex": "FEMALE"
    },
    {
      "2018": "27.06223",
      "2019": "27.92207",
      "2020": "28.00523",
      "2021": "28.00523",
      "2022": "28.00523",
      "2023": "29.00129",
      "GeoAreaName": "Czechia",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Democratic Republic of the Congo",
      "Sex": "FEMALE"
    },
    {
      "2018": "33.33333",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "36.99356",
      "2023": "",
      "GeoAreaName": "Denmark",
      "Sex": "FEMALE"
    },
    {
      "2018": "28.86598",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Djibouti",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "29.17325",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Dominican Republic",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "27.34482",
      "2021": "27.42159",
      "2022": "27.80861",
      "2023": "30.92533",
      "GeoAreaName": "Eastern and South-Eastern Asia",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "27.17449",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Ecuador",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Egypt",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "32.40988",
      "2020": "",
      "2021": "",
      "2022": "30.37383",
      "2023": "",
      "GeoAreaName": "El Salvador",
      "Sex": "FEMALE"
    },
    {
      "2018": "26.85338",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Equatorial Guinea",
      "Sex": "FEMALE"
    },
    {
      "2018": "28.62927",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "29.47001",
      "2023": "",
      "GeoAreaName": "Estonia",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "14.2132",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Eswatini",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "34.88697",
      "2021": "35.06864",
      "2022": "36.33823",
      "2023": "36.51061",
      "GeoAreaName": "Europe and Northern America",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "35.80247",
      "GeoAreaName": "Fiji",
      "Sex": "FEMALE"
    },
    {
      "2018": "39.04878",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "40.23027",
      "2023": "",
      "GeoAreaName": "Finland",
      "Sex": "FEMALE"
    },
    {
      "2018": "40.40259",
      "2019": "",
      "2020": "40.01883",
      "2021": "",
      "2022": "42.32797",
      "2023": "",
      "GeoAreaName": "France",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "13.77246",
      "2023": "",
      "GeoAreaName": "Gambia",
      "Sex": "FEMALE"
    },
    {
      "2018": "13.45967",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "23.74275",
      "2023": "",
      "GeoAreaName": "Georgia",
      "Sex": "FEMALE"
    },
    {
      "2018": "27.00742",
      "2019": "",
      "2020": "27.77443",
      "2021": "29.15846",
      "2022": "30.25325",
      "2023": "",
      "GeoAreaName": "Germany",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "3.79994",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Ghana",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Grenada",
      "Sex": "FEMALE"
    },
    {
      "2018": "15.38462",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Guam",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "11.44079",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Guatemala",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "15.86743",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Guinea",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Guinea-Bissau",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "38.71513",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Guyana",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "33.66151",
      "GeoAreaName": "Haiti",
      "Sex": "FEMALE"
    },
    {
      "2018": "27.89735",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "38.89803",
      "2023": "",
      "GeoAreaName": "Honduras",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "30.51431",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Hungary",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "47.01195",
      "2020": "47.01195",
      "2021": "47.01195",
      "2022": "47.01195",
      "2023": "51.2766",
      "GeoAreaName": "Iceland",
      "Sex": "FEMALE"
    },
    {
      "2018": "44.37281",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "India",
      "Sex": "FEMALE"
    },
    {
      "2018": "14.36923",
      "2019": "",
      "2020": "",
      "2021": "15.73536",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Indonesia",
      "Sex": "FEMALE"
    },
    {
      "2018": "3.19662",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "5.06927",
      "2023": "",
      "GeoAreaName": "Iran (Islamic Republic of)",
      "Sex": "FEMALE"
    },
    {
      "2018": "25.68807",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Iraq",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "23.91992",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Ireland",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "17.13453",
      "2020": "17.13453",
      "2021": "17.13453",
      "2022": "17.13453",
      "2023": "17.13453",
      "GeoAreaName": "Israel",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "30.3615",
      "2020": "31.31557",
      "2021": "31.71257",
      "2022": "32.04503",
      "2023": "32.40292",
      "GeoAreaName": "Italy",
      "Sex": "FEMALE"
    },
    {
      "2018": "18.42105",
      "2019": "18.34061",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Jamaica",
      "Sex": "FEMALE"
    },
    {
      "2018": "12.87177",
      "2019": "13.12562",
      "2020": "14.30774",
      "2021": "14.52448",
      "2022": "15.08073",
      "2023": "15.55871",
      "GeoAreaName": "Japan",
      "Sex": "FEMALE"
    },
    {
      "2018": "31.84828",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "24.94382",
      "GeoAreaName": "Jordan",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "22.18891",
      "2020": "22.17626",
      "2021": "22.3442",
      "2022": "30.46398",
      "2023": "",
      "GeoAreaName": "Kazakhstan",
      "Sex": "FEMALE"
    },
    {
      "2018": "33.54317",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Kenya",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "7.25806",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Kiribati",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Kuwait",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "32.43635",
      "2021": "32.38524",
      "2022": "28.273",
      "2023": "28.36406",
      "GeoAreaName": "Landlocked developing countries (LLDCs)",
      "Sex": "FEMALE"
    },
    {
      "2018": "32.22222",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Lao People's Democratic Republic",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "24.64743",
      "2021": "25.34096",
      "2022": "25.65095",
      "2023": "27.17845",
      "GeoAreaName": "Latin America and the Caribbean",
      "Sex": "FEMALE"
    },
    {
      "2018": "34.01487",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "30.47493",
      "2023": "",
      "GeoAreaName": "Latvia",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "30.68432",
      "2021": "29.91027",
      "2022": "26.85231",
      "2023": "27.04962",
      "GeoAreaName": "Least Developed Countries (LDCs)",
      "Sex": "FEMALE"
    },
    {
      "2018": "3.97153",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Lebanon",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "41.29616",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Lesotho",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Liberia",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "14.28571",
      "2023": "",
      "GeoAreaName": "Libya",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "39.13043",
      "2021": "39.13043",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Liechtenstein",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "29.36085",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Lithuania",
      "Sex": "FEMALE"
    },
    {
      "2018": "25.11091",
      "2019": "25.11091",
      "2020": "25.11091",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Luxembourg",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "14.56522",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Malawi",
      "Sex": "FEMALE"
    },
    {
      "2018": "6.12557",
      "2019": "",
      "2020": "5.99676",
      "2021": "",
      "2022": "39.5112",
      "2023": "",
      "GeoAreaName": "Maldives",
      "Sex": "FEMALE"
    },
    {
      "2018": "25.25483",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Mali",
      "Sex": "FEMALE"
    },
    {
      "2018": "21.92982",
      "2019": "22.02643",
      "2020": "26.2931",
      "2021": "26.2931",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Malta",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "15.92357",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Marshall Islands",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "31.37207",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Mauritania",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "24.4186",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Mauritius",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "45.01155",
      "2020": "",
      "2021": "47.46421",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Mexico",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "1.48026",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Micronesia (Federated States of)",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "27.21596",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Mongolia",
      "Sex": "FEMALE"
    },
    {
      "2018": "27.7707",
      "2019": "29.96346",
      "2020": "31.86813",
      "2021": "",
      "2022": "",
      "2023": "32.70588",
      "GeoAreaName": "Montenegro",
      "Sex": "FEMALE"
    },
    {
      "2018": "20.86901",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "27.23116",
      "2023": "",
      "GeoAreaName": "Morocco",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Myanmar",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "44.91979",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Namibia",
      "Sex": "FEMALE"
    },
    {
      "2018": "40.95774",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "41.28611",
      "GeoAreaName": "Nepal",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "28.52524",
      "2020": "31.78801",
      "2021": "",
      "2022": "",
      "2023": "35.01092",
      "GeoAreaName": "Netherlands (Kingdom of the)",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "47.24138",
      "2022": "",
      "2023": "",
      "GeoAreaName": "New Caledonia",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "39.41121",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "New Zealand",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "27.05067",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Niger",
      "Sex": "FEMALE"
    },
    {
      "2018": "9.77801",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "11.06149",
      "GeoAreaName": "Nigeria",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "17.93372",
      "2021": "17.9438",
      "2022": "19.75332",
      "2023": "19.57471",
      "GeoAreaName": "Northern Africa and Western Asia",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "40",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Northern Mariana Islands",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "40.84351",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Norway",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "22.79217",
      "2021": "22.89637",
      "2022": "22.89637",
      "2023": "22.89637",
      "GeoAreaName": "Oceania (exc. Australia and New Zealand)",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "0.79365",
      "GeoAreaName": "Oman",
      "Sex": "FEMALE"
    },
    {
      "2018": "16.84757",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Pakistan",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "9.01163",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Panama",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "20.82467",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Paraguay",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "26.1745",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "41.41334",
      "GeoAreaName": "Peru",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "29.00683",
      "2020": "29.07597",
      "2021": "29.07597",
      "2022": "",
      "2023": "29.09813",
      "GeoAreaName": "Philippines",
      "Sex": "FEMALE"
    },
    {
      "2018": "26.9253",
      "2019": "29.79789",
      "2020": "30.00236",
      "2021": "30.17872",
      "2022": "30.3779",
      "2023": "",
      "GeoAreaName": "Poland",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Qatar",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "28.26667",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "30.34465",
      "GeoAreaName": "Republic of Korea",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "35.60449",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Republic of Moldova",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "14.07334",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Romania",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "43.62416",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Rwanda",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Saint Kitts and Nevis",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Saint Lucia",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Saint Vincent and the Grenadines",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Samoa",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "San Marino",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "23.8806",
      "GeoAreaName": "Sao Tome and Principe",
      "Sex": "FEMALE"
    },
    {
      "2018": "1.20406",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Saudi Arabia",
      "Sex": "FEMALE"
    },
    {
      "2018": "47.55638",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "47.2326",
      "GeoAreaName": "Senegal",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "37.2368",
      "2022": "",
      "2023": "37.61735",
      "GeoAreaName": "Serbia",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Seychelles",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "18.19961",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Sierra Leone",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Singapore",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "25.91262",
      "2020": "25.91262",
      "2021": "25.91262",
      "2022": "25.91262",
      "2023": "26.89464",
      "GeoAreaName": "Slovakia",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "34.09225",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "34.85342",
      "GeoAreaName": "Slovenia",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "29.82204",
      "2021": "30.06855",
      "2022": "30.98555",
      "2023": "33.18712",
      "GeoAreaName": "Small island developing States (SIDS)",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Somalia",
      "Sex": "FEMALE"
    },
    {
      "2018": "40.72641",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "South Africa",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "South Sudan",
      "Sex": "FEMALE"
    },
    {
      "2018": "33.78464",
      "2019": "",
      "2020": "38.49112",
      "2021": "38.49411",
      "2022": "38.54761",
      "2023": "38.58773",
      "GeoAreaName": "Spain",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "10.89402",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Sri Lanka",
      "Sex": "FEMALE"
    },
    {
      "2018": "21.19673",
      "2019": "21.19261",
      "2020": "21.18597",
      "2021": "",
      "2022": "21.75941",
      "2023": "21.03711",
      "GeoAreaName": "State of Palestine",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "29.90108",
      "2021": "29.53135",
      "2022": "25.23915",
      "2023": "25.36788",
      "GeoAreaName": "Sub-Saharan Africa",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Sudan",
      "Sex": "FEMALE"
    },
    {
      "2018": "35.59322",
      "2019": "",
      "2020": "",
      "2021": "33.05085",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Suriname",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "43.84305",
      "2020": "43.84696",
      "2021": "43.84696",
      "2022": "43.84696",
      "2023": "44.02459",
      "GeoAreaName": "Sweden",
      "Sex": "FEMALE"
    },
    {
      "2018": "31.29651",
      "2019": "31.93031",
      "2020": "32.03998",
      "2021": "34.99511",
      "2022": "38.59238",
      "2023": "39.04203",
      "GeoAreaName": "Switzerland",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "7.09374",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Syrian Arab Republic",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "17.3549",
      "2020": "",
      "2021": "17.90989",
      "2022": "20.5096",
      "2023": "20.44353",
      "GeoAreaName": "Thailand",
      "Sex": "FEMALE"
    },
    {
      "2018": "3.94933",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Timor-Leste",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "12.9666",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Togo",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Tonga",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "48.48863",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Tunisia",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "10.13843",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Türkiye",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "21.9322",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Turkmenistan",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "10.41667",
      "2020": "",
      "2021": "12.5",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Tuvalu",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "22.09139",
      "2023": "",
      "GeoAreaName": "Uganda",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "29.78806",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Ukraine",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "United Arab Emirates",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "34.80957",
      "2021": "34.97086",
      "2022": "35.31782",
      "2023": "",
      "GeoAreaName": "United Kingdom of Great Britain and Northern Ireland",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "30.67968",
      "2022": "",
      "2023": "",
      "GeoAreaName": "United Republic of Tanzania",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "31.6723",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Uruguay",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "9.44882",
      "2020": "",
      "2021": "10.07752",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Vanuatu",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "28.96256",
      "2023": "",
      "GeoAreaName": "Viet Nam",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "33.88801",
      "2021": "33.92028",
      "2022": "34.28281",
      "2023": "35.47268",
      "GeoAreaName": "World",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Yemen",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "7.14286",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Zambia",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "11.98428",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Zimbabwe",
      "Sex": "FEMALE"
    }
  ]
};

export const proportionOfWomenInSeniorAndMiddleManagementPositions = {
  "title": "Proportion of women in senior and middle management positions",
  "description": "This table provides insights into the percentage of women occupying senior and middle management positions across various industries and regions. Gender representation at these levels of management is crucial for fostering inclusive decision-making, particularly in sectors impacted by climate change. The presence of women in senior and middle management can influence organizational strategies for climate adaptation, ensuring that gender-sensitive approaches are integrated into disaster preparedness and recovery plans. In regions with low representation of women in these roles, there is a risk that climate resilience efforts may fail to account for the unique vulnerabilities faced by women and gender minorities, thereby perpetuating both gender inequality and environmental risks.",
  "category": "Gender Equality in Management Positions",
  "type": "country-data",
  "data": [
    {
      "2018": "",
      "2019": "",
      "2020": "5.89",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Afghanistan",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "31.6",
      "2019": "41.34",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Albania",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "10.9",
      "2020": "",
      "2021": "11.01",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Angola",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "33.18",
      "2019": "33.14",
      "2020": "36.98",
      "2021": "37.36",
      "2022": "37.91",
      "2023": "",
      "GeoAreaName": "Argentina",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "33.85",
      "2019": "34.65",
      "2020": "34.16",
      "2021": "38.23",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Australia",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "28.86",
      "2019": "32.01",
      "2020": "31.47",
      "2021": "34.31",
      "2022": "31.53",
      "2023": "",
      "GeoAreaName": "Austria",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "49.43",
      "2019": "47.72",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Barbados",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "44.73",
      "2019": "45.81",
      "2020": "47.75",
      "2021": "43.98",
      "2022": "42.36",
      "2023": "",
      "GeoAreaName": "Belarus",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "32.87",
      "2019": "35.07",
      "2020": "36.51",
      "2021": "34.45",
      "2022": "35.26",
      "2023": "",
      "GeoAreaName": "Belgium",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "20.24",
      "2019": "17.77",
      "2020": "18.95",
      "2021": "20.43",
      "2022": "16.63",
      "2023": "",
      "GeoAreaName": "Bhutan",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "30.44",
      "2019": "28.49",
      "2020": "30.93",
      "2021": "28.56",
      "2022": "29.98",
      "2023": "",
      "GeoAreaName": "Bolivia (Plurinational State of)",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "26.12",
      "2019": "25.43",
      "2020": "24.89",
      "2021": "20.17",
      "2022": "24.09",
      "2023": "",
      "GeoAreaName": "Bosnia and Herzegovina",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "57.77",
      "2020": "56.68",
      "2021": "58.39",
      "2022": "59.22",
      "2023": "",
      "GeoAreaName": "Botswana",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "37.86",
      "2019": "37.59",
      "2020": "35.47",
      "2021": "37.16",
      "2022": "38.29",
      "2023": "",
      "GeoAreaName": "Brazil",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "34.55",
      "2019": "32.26",
      "2020": "37.43",
      "2021": "41.14",
      "2022": "32.51",
      "2023": "",
      "GeoAreaName": "Brunei Darussalam",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "39.62",
      "2019": "39.35",
      "2020": "42.12",
      "2021": "38.02",
      "2022": "40.39",
      "2023": "",
      "GeoAreaName": "Bulgaria",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "23.95",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Burkina Faso",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "25.67",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Burundi",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "29.23",
      "2020": "24.53",
      "2021": "24.62",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Cambodia",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "37.47",
      "2021": "",
      "2022": "31.6",
      "2023": "",
      "GeoAreaName": "Chile",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "29.47",
      "2019": "30.34",
      "2020": "30.29",
      "2021": "30.33",
      "2022": "41.69",
      "2023": "",
      "GeoAreaName": "Colombia",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "55.98",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Cook Islands",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "37.52",
      "2019": "42.77",
      "2020": "",
      "2021": "41.63",
      "2022": "45.88",
      "2023": "",
      "GeoAreaName": "Costa Rica",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "26.24",
      "2019": "24.34",
      "2020": "29.13",
      "2021": "29.61",
      "2022": "23.42",
      "2023": "",
      "GeoAreaName": "Croatia",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "19.7",
      "2019": "23.74",
      "2020": "25.22",
      "2021": "22.43",
      "2022": "25.54",
      "2023": "",
      "GeoAreaName": "Cyprus",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "26.2",
      "2019": "26.13",
      "2020": "26.99",
      "2021": "27.57",
      "2022": "25.84",
      "2023": "",
      "GeoAreaName": "Czechia",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "29.58",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Democratic Republic of the Congo",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "26.33",
      "2019": "26.63",
      "2020": "28.03",
      "2021": "29.43",
      "2022": "31.17",
      "2023": "",
      "GeoAreaName": "Denmark",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "45.55",
      "2019": "50.63",
      "2020": "47.62",
      "2021": "56.11",
      "2022": "58.71",
      "2023": "",
      "GeoAreaName": "Dominican Republic",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "35.53",
      "2019": "37.27",
      "2020": "39.44",
      "2021": "37.6",
      "2022": "39.87",
      "2023": "",
      "GeoAreaName": "Ecuador",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "7.35",
      "2019": "7.09",
      "2020": "20.71",
      "2021": "20.47",
      "2022": "22.16",
      "2023": "",
      "GeoAreaName": "Egypt",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "35.74",
      "2019": "43.13",
      "2020": "48.82",
      "2021": "40.46",
      "2022": "42.73",
      "2023": "",
      "GeoAreaName": "El Salvador",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "33.5",
      "2019": "35.5",
      "2020": "35.87",
      "2021": "39.83",
      "2022": "38.27",
      "2023": "",
      "GeoAreaName": "Estonia",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "41.67",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Eswatini",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "27",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Ethiopia",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "30.96",
      "2019": "33.37",
      "2020": "40.82",
      "2021": "35.61",
      "2022": "36.95",
      "2023": "",
      "GeoAreaName": "Finland",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "34.38",
      "2019": "34.3",
      "2020": "34.95",
      "2021": "36.77",
      "2022": "39.39",
      "2023": "",
      "GeoAreaName": "France",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "31.37",
      "GeoAreaName": "Gambia",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "35.68",
      "2019": "36.65",
      "2020": "33.76",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Georgia",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "28.34",
      "2019": "28.74",
      "2020": "27.11",
      "2021": "27.5",
      "2022": "26.54",
      "2023": "",
      "GeoAreaName": "Germany",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "30.4",
      "2019": "30.54",
      "2020": "28.44",
      "2021": "29.44",
      "2022": "33.74",
      "2023": "",
      "GeoAreaName": "Greece",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "33.28",
      "2020": "36.3",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Grenada",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "49.45",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Grenada",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "37.79",
      "2019": "39.36",
      "2020": "",
      "2021": "48.03",
      "2022": "37.64",
      "2023": "",
      "GeoAreaName": "Guatemala",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "34.75",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Guinea-Bissau",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "38.47",
      "2019": "45.87",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Guyana",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "47.11",
      "2019": "47.47",
      "2020": "39.66",
      "2021": "",
      "2022": "27.91",
      "2023": "",
      "GeoAreaName": "Honduras",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "37.05",
      "2019": "35.9",
      "2020": "36.78",
      "2021": "36.02",
      "2022": "37.06",
      "2023": "",
      "GeoAreaName": "Hungary",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "43.05",
      "2019": "44.01",
      "2020": "38.62",
      "2021": "37.34",
      "2022": "39.37",
      "2023": "",
      "GeoAreaName": "Iceland",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "14.36",
      "2019": "17",
      "2020": "17.33",
      "2021": "16.96",
      "2022": "16.21",
      "2023": "",
      "GeoAreaName": "India",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "21.73",
      "2019": "19.82",
      "2020": "18.68",
      "2021": "19.88",
      "2022": "19.18",
      "2023": "",
      "GeoAreaName": "Iran (Islamic Republic of)",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "17.53",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Iraq",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "33.53",
      "2019": "31.26",
      "2020": "32.25",
      "2021": "34.16",
      "2022": "35.13",
      "2023": "",
      "GeoAreaName": "Ireland",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "33.45",
      "2019": "30.83",
      "2020": "28.78",
      "2021": "30.06",
      "2022": "33.38",
      "2023": "",
      "GeoAreaName": "Israel",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "23.49",
      "2019": "23.65",
      "2020": "23.4",
      "2021": "24.4",
      "2022": "23.36",
      "2023": "",
      "GeoAreaName": "Italy",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "14.38",
      "2019": "14.72",
      "2020": "13.06",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Japan",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "58.19",
      "2019": "61.96",
      "2020": "60.25",
      "2021": "57.24",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Jordan",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "49.62",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Kenya",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "38.48",
      "2020": "40.9",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Kiribati",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "37.78",
      "2019": "40.86",
      "2020": "42.47",
      "2021": "35.81",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Kyrgyzstan",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "25.68",
      "2023": "",
      "GeoAreaName": "Lao People's Democratic Republic",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "43.63",
      "2019": "41.74",
      "2020": "52.2",
      "2021": "42.82",
      "2022": "44.5",
      "2023": "",
      "GeoAreaName": "Latvia",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "28.87",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Lebanon",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "31.66",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Lesotho",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "38.16",
      "2019": "38.59",
      "2020": "37.33",
      "2021": "36.18",
      "2022": "37.01",
      "2023": "",
      "GeoAreaName": "Lithuania",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "23.67",
      "2019": "26.56",
      "2020": "29.13",
      "2021": "20.2",
      "2022": "26.46",
      "2023": "",
      "GeoAreaName": "Luxembourg",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "22.59",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Maldives",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "25.08",
      "2020": "",
      "2021": "32.71",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Marshall Islands",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "31.03",
      "2019": "",
      "2020": "",
      "2021": "40.04",
      "2022": "27.03",
      "2023": "",
      "GeoAreaName": "Mauritius",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "36.27",
      "2019": "36.6",
      "2020": "39.74",
      "2021": "38.72",
      "2022": "39.07",
      "2023": "",
      "GeoAreaName": "Mexico",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "35.91",
      "2019": "41.8",
      "2020": "46.42",
      "2021": "42.39",
      "2022": "38.89",
      "2023": "",
      "GeoAreaName": "Mongolia",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "23.83",
      "2019": "28.2",
      "2020": "25.25",
      "2021": "28.27",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Montenegro",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "46.11",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Montserrat",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "32.06",
      "2019": "34.14",
      "2020": "40.97",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Myanmar",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "48.24",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Namibia",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "57.63",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Nauru",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "24.11",
      "2019": "28.4",
      "2020": "23.21",
      "2021": "26.33",
      "2022": "29.1",
      "2023": "",
      "GeoAreaName": "Netherlands (Kingdom of the)",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "57.18",
      "2023": "",
      "GeoAreaName": "Nigeria",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "40.66",
      "2023": "",
      "GeoAreaName": "Niue",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "28.21",
      "2019": "28.15",
      "2020": "24.17",
      "2021": "24.99",
      "2022": "29.8",
      "2023": "",
      "GeoAreaName": "North Macedonia",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "33.06",
      "2019": "32.38",
      "2020": "32.43",
      "2021": "30.66",
      "2022": "32.46",
      "2023": "",
      "GeoAreaName": "Norway",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "6.58",
      "2019": "6.33",
      "2020": "",
      "2021": "7.83",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Pakistan",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "45.45",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Palau",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "47.01",
      "GeoAreaName": "Panama",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "17.74",
      "2023": "",
      "GeoAreaName": "Papua New Guinea",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "32.93",
      "2023": "",
      "GeoAreaName": "Peru",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "25.51",
      "2019": "29.31",
      "2020": "35.43",
      "2021": "37.96",
      "2022": "41.32",
      "2023": "",
      "GeoAreaName": "Philippines",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "39.52",
      "2019": "41.15",
      "2020": "41.44",
      "2021": "39.61",
      "2022": "39.77",
      "2023": "",
      "GeoAreaName": "Poland",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "32.16",
      "2019": "36.97",
      "2020": "35.85",
      "2021": "33.24",
      "2022": "38.25",
      "2023": "",
      "GeoAreaName": "Portugal",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "30.06",
      "2019": "34.19",
      "2020": "35.13",
      "2021": "35.79",
      "2022": "32.49",
      "2023": "",
      "GeoAreaName": "Romania",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "39.75",
      "2019": "41.99",
      "2020": "43.18",
      "2021": "43.77",
      "2022": "41.18",
      "2023": "",
      "GeoAreaName": "Russian Federation",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "33.22",
      "2019": "",
      "2020": "34.19",
      "2021": "35.41",
      "2022": "25",
      "2023": "",
      "GeoAreaName": "Rwanda",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "21.03",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Senegal",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "29.79",
      "2019": "33.57",
      "2020": "32.6",
      "2021": "34.24",
      "2022": "39.51",
      "2023": "",
      "GeoAreaName": "Serbia",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "47.35",
      "2020": "40",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Seychelles",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "21.49",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Sierra Leone",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "38.54",
      "2022": "40.65",
      "2023": "",
      "GeoAreaName": "Singapore",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "30.37",
      "2019": "33.35",
      "2020": "34.53",
      "2021": "35.24",
      "2022": "35.59",
      "2023": "",
      "GeoAreaName": "Slovakia",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "38.22",
      "2019": "40.51",
      "2020": "40.62",
      "2021": "33.52",
      "2022": "33.17",
      "2023": "",
      "GeoAreaName": "Slovenia",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "27.68",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Somalia",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "33.93",
      "2019": "33.26",
      "2020": "35.07",
      "2021": "35.19",
      "2022": "36.53",
      "2023": "",
      "GeoAreaName": "South Africa",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "34.64",
      "2019": "30.5",
      "2020": "37.49",
      "2021": "33.21",
      "2022": "35.91",
      "2023": "",
      "GeoAreaName": "Spain",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "22.52",
      "2019": "25.64",
      "2020": "26.07",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Sri Lanka",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "17.83",
      "2019": "21.66",
      "2020": "22.57",
      "2021": "22.06",
      "2022": "21.07",
      "2023": "",
      "GeoAreaName": "State of Palestine",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "13.06",
      "2023": "",
      "GeoAreaName": "Sudan",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "39.03",
      "2019": "41.9",
      "2020": "43.09",
      "2021": "44.14",
      "2022": "42.19",
      "2023": "",
      "GeoAreaName": "Sweden",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "31.04",
      "2019": "32.56",
      "2020": "31.79",
      "2021": "30.27",
      "2022": "29.88",
      "2023": "",
      "GeoAreaName": "Switzerland",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "30.87",
      "2019": "30.96",
      "2020": "33.21",
      "2021": "32.04",
      "2022": "33.13",
      "2023": "",
      "GeoAreaName": "Thailand",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "13.27",
      "2022": "22.39",
      "2023": "",
      "GeoAreaName": "Timor-Leste",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "36.54",
      "2023": "",
      "GeoAreaName": "Tokelau",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "40.34",
      "2019": "",
      "2020": "",
      "2021": "31.97",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Tonga",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "45.25",
      "2020": "46.74",
      "2021": "43.62",
      "2022": "46.55",
      "2023": "",
      "GeoAreaName": "Trinidad and Tobago",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "25.99",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Tunisia",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "16.34",
      "2019": "17.52",
      "2020": "19.28",
      "2021": "20.65",
      "2022": "19.64",
      "2023": "",
      "GeoAreaName": "Türkiye",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "35.66",
      "2023": "",
      "GeoAreaName": "Tuvalu",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "27.67",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Uganda",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "30.55",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Uganda",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "40.78",
      "2019": "42.44",
      "2020": "43.1",
      "2021": "44.09",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Ukraine",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "15.75",
      "2019": "",
      "2020": "17.73",
      "2021": "23.57",
      "2022": "23.46",
      "2023": "",
      "GeoAreaName": "United Arab Emirates",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "34.59",
      "2019": "35.37",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "United Kingdom of Great Britain and Northern Ireland",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "27.91",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "United Republic of Tanzania",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "40.47",
      "2019": "40.85",
      "2020": "42.29",
      "2021": "43.2",
      "2022": "42.83",
      "2023": "44.36",
      "GeoAreaName": "United States of America",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "37.27",
      "2019": "36.51",
      "2020": "39.88",
      "2021": "39.82",
      "2022": "35.93",
      "2023": "",
      "GeoAreaName": "Uruguay",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "22.55",
      "2020": "36.21",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Vanuatu",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "14.82",
      "2019": "14.56",
      "2020": "22.73",
      "2021": "15.51",
      "2022": "17.07",
      "2023": "",
      "GeoAreaName": "Viet Nam",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "25.08",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Wallis and Futuna Islands",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "40.21",
      "2019": "29.95",
      "2020": "39.62",
      "2021": "39.51",
      "2022": "36.46",
      "2023": "",
      "GeoAreaName": "Zambia",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "28.07",
      "2020": "",
      "2021": "28.15",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Zimbabwe",
      "Age": "15+",
      "Sex": "FEMALE"
    }
  ]
};

export const proportionOfWomenInManagerialPositions = {
  "title": "Proportion of women in managerial positions",
  "description": "This table displays the percentage of women in managerial positions across different sectors and geographic regions. The representation of women in managerial roles is pivotal in driving gender-sensitive policies, particularly in areas affected by climate change. Women managers can advocate for policies that consider the specific challenges faced by women and marginalized communities during climate-related events. In regions where women hold fewer managerial positions, there may be a lack of inclusive decision-making, potentially neglecting gender-specific vulnerabilities in disaster risk management and climate adaptation strategies. This data underscores the importance of achieving gender parity in management to enhance both gender equality and climate resilience efforts.",
  "category": "Gender Equality in Management Positions",
  "type": "country-data",
  "data": [
    {
      "2018": "",
      "2019": "",
      "2020": "4.89",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Afghanistan",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "26.41",
      "2019": "28.08",
      "2020": "30.47",
      "2021": "34.04",
      "2022": "32.69",
      "2023": "",
      "GeoAreaName": "Africa",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "29.25",
      "2019": "34.11",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Albania",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "38.07",
      "2019": "38.1",
      "2020": "38.35",
      "2021": "39.2",
      "2022": "38.76",
      "2023": "",
      "GeoAreaName": "Americas",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "13.31",
      "2020": "",
      "2021": "15.36",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Angola",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "32.56",
      "2019": "31.6",
      "2020": "32.97",
      "2021": "32.69",
      "2022": "33.65",
      "2023": "",
      "GeoAreaName": "Argentina",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "25.66",
      "2019": "24.35",
      "2020": "28.07",
      "2021": "29.65",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Armenia",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "21.75",
      "2019": "21.17",
      "2020": "20.83",
      "2021": "20.87",
      "2022": "19.83",
      "2023": "",
      "GeoAreaName": "Asia",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "37.8",
      "2019": "39.16",
      "2020": "39.95",
      "2021": "39.7",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Australia",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "38.83",
      "2019": "39.98",
      "2020": "40.47",
      "2021": "39.86",
      "2022": "39.57",
      "2023": "",
      "GeoAreaName": "Australia and New Zealand",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "31.59",
      "2019": "33.24",
      "2020": "32.79",
      "2021": "35.45",
      "2022": "33.43",
      "2023": "",
      "GeoAreaName": "Austria",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "38.07",
      "2019": "34.94",
      "2020": "34.63",
      "2021": "35.45",
      "2022": "35.39",
      "2023": "",
      "GeoAreaName": "Azerbaijan",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "46.51",
      "2019": "49.27",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Barbados",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "47.28",
      "2019": "49.11",
      "2020": "50.51",
      "2021": "47.18",
      "2022": "46.29",
      "2023": "",
      "GeoAreaName": "Belarus",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "34.03",
      "2019": "35.03",
      "2020": "35.98",
      "2021": "35.43",
      "2022": "36.5",
      "2023": "",
      "GeoAreaName": "Belgium",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "56.69",
      "2020": "",
      "2021": "39.41",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Belize",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "13.75",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Benin",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "23.97",
      "2019": "32.62",
      "2020": "32.71",
      "2021": "39.71",
      "2022": "37.12",
      "2023": "",
      "GeoAreaName": "Bhutan",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "38.84",
      "2019": "35.79",
      "2020": "30.08",
      "2021": "35.16",
      "2022": "34.37",
      "2023": "",
      "GeoAreaName": "Bolivia (Plurinational State of)",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "25.92",
      "2019": "24.32",
      "2020": "25.12",
      "2021": "24.18",
      "2022": "24.07",
      "2023": "",
      "GeoAreaName": "Bosnia and Herzegovina",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "57.84",
      "2020": "56.65",
      "2021": "58.05",
      "2022": "58.48",
      "2023": "",
      "GeoAreaName": "Botswana",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "38.74",
      "2019": "38.45",
      "2020": "36.8",
      "2021": "38.78",
      "2022": "39.27",
      "2023": "",
      "GeoAreaName": "Brazil",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "36.59",
      "2019": "33.01",
      "2020": "36.45",
      "2021": "42.6",
      "2022": "32.38",
      "2023": "",
      "GeoAreaName": "Brunei Darussalam",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "39.15",
      "2019": "39.37",
      "2020": "40.38",
      "2021": "36.34",
      "2022": "39.83",
      "2023": "",
      "GeoAreaName": "Bulgaria",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "58.11",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Burkina Faso",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "33.79",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Burundi",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "42.52",
      "2019": "46.04",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Cabo Verde",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "30.99",
      "2020": "34.63",
      "2021": "29.23",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Cambodia",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "35.08",
      "2019": "35.28",
      "2020": "35.82",
      "2021": "35.59",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Canada",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "44.44",
      "2019": "44.34",
      "2020": "45.11",
      "2021": "46.01",
      "2022": "43.86",
      "2023": "",
      "GeoAreaName": "Caribbean",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "36.56",
      "2019": "36.82",
      "2020": "38.11",
      "2021": "38.44",
      "2022": "38.32",
      "2023": "",
      "GeoAreaName": "Central America",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "16.76",
      "2019": "17.43",
      "2020": "16.67",
      "2021": "17.11",
      "2022": "16.18",
      "2023": "",
      "GeoAreaName": "Central and Southern Asia",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "33.75",
      "2019": "34.65",
      "2020": "36.44",
      "2021": "36.22",
      "2022": "34.13",
      "2023": "",
      "GeoAreaName": "Central Asia",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "30.68",
      "2019": "30",
      "2020": "27.38",
      "2021": "30.32",
      "2022": "29.56",
      "2023": "",
      "GeoAreaName": "Chile",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "34.62",
      "2019": "35.44",
      "2020": "37.02",
      "2021": "38.39",
      "2022": "38.33",
      "2023": "",
      "GeoAreaName": "China, Hong Kong Special Administrative Region",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "34.7",
      "2019": "34.84",
      "2020": "34.97",
      "2021": "35.31",
      "2022": "43.51",
      "2023": "",
      "GeoAreaName": "Colombia",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "51.13",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Comoros",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "59.77",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Cook Islands",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "37.14",
      "2019": "40.46",
      "2020": "",
      "2021": "40.24",
      "2022": "45.99",
      "2023": "",
      "GeoAreaName": "Costa Rica",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "30.72",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Côte d'Ivoire",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "30.13",
      "2019": "26.49",
      "2020": "28.45",
      "2021": "28.77",
      "2022": "21.4",
      "2023": "",
      "GeoAreaName": "Croatia",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "42.41",
      "2019": "",
      "2020": "50.99",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Curaçao",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "16.95",
      "2019": "21.35",
      "2020": "24.18",
      "2021": "21.02",
      "2022": "23.08",
      "2023": "",
      "GeoAreaName": "Cyprus",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "26.35",
      "2019": "26.38",
      "2020": "27.38",
      "2021": "28.31",
      "2022": "26.04",
      "2023": "",
      "GeoAreaName": "Czechia",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "41.94",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Democratic Republic of the Congo",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "26.08",
      "2019": "26.76",
      "2020": "27.86",
      "2021": "28.32",
      "2022": "29.26",
      "2023": "",
      "GeoAreaName": "Denmark",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "37.07",
      "2019": "37.57",
      "2020": "37.95",
      "2021": "38.39",
      "2022": "37.89",
      "2023": "",
      "GeoAreaName": "Developed regions (Europe, Cyprus, Israel, Northern America, Japan, Australia & New Zealand)",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "24.13",
      "2019": "23.72",
      "2020": "23.61",
      "2021": "24",
      "2022": "22.93",
      "2023": "",
      "GeoAreaName": "Developing regions",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "41.08",
      "2019": "40.52",
      "2020": "38.13",
      "2021": "42.82",
      "2022": "44.95",
      "2023": "",
      "GeoAreaName": "Dominican Republic",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "38.09",
      "2019": "39.21",
      "2020": "40.62",
      "2021": "40.68",
      "2022": "38.34",
      "2023": "",
      "GeoAreaName": "Eastern Africa",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "30.06",
      "2019": "28.58",
      "2020": "29.13",
      "2021": "28.7",
      "2022": "27.71",
      "2023": "",
      "GeoAreaName": "Eastern and South-Eastern Asia",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "20.16",
      "2019": "20.46",
      "2020": "21.09",
      "2021": "21.32",
      "2022": "20.05",
      "2023": "",
      "GeoAreaName": "Eastern Asia",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "27.49",
      "2019": "29.07",
      "2020": "30.1",
      "2021": "30.34",
      "2022": "29.99",
      "2023": "",
      "GeoAreaName": "Eastern Asia (excluding Japan and China)",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "27.49",
      "2019": "29.07",
      "2020": "30.1",
      "2021": "30.34",
      "2022": "29.99",
      "2023": "",
      "GeoAreaName": "Eastern Asia (excluding Japan)",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "41.01",
      "2019": "42.83",
      "2020": "43.5",
      "2021": "43.41",
      "2022": "41.7",
      "2023": "",
      "GeoAreaName": "Eastern Europe",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "35.9",
      "2019": "36.57",
      "2020": "39.03",
      "2021": "37.73",
      "2022": "38.83",
      "2023": "",
      "GeoAreaName": "Ecuador",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "7.35",
      "2019": "7.09",
      "2020": "6.82",
      "2021": "12.37",
      "2022": "13.96",
      "2023": "",
      "GeoAreaName": "Egypt",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "35.35",
      "2019": "44.27",
      "2020": "46.7",
      "2021": "41.06",
      "2022": "40.53",
      "2023": "",
      "GeoAreaName": "El Salvador",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "36.48",
      "2019": "37.84",
      "2020": "37.45",
      "2021": "41.18",
      "2022": "40.15",
      "2023": "",
      "GeoAreaName": "Estonia",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "41.23",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Eswatini",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "25.43",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Ethiopia",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "36.24",
      "2019": "37.13",
      "2020": "37.71",
      "2021": "37.94",
      "2022": "37.17",
      "2023": "",
      "GeoAreaName": "Europe",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "37.79",
      "2019": "38.26",
      "2020": "38.72",
      "2021": "39.19",
      "2022": "38.63",
      "2023": "",
      "GeoAreaName": "Europe and Northern America",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "30.61",
      "2019": "32.53",
      "2020": "40.8",
      "2021": "35.88",
      "2022": "36.02",
      "2023": "",
      "GeoAreaName": "Finland",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "34.44",
      "2019": "34.67",
      "2020": "35.53",
      "2021": "37.79",
      "2022": "39.89",
      "2023": "",
      "GeoAreaName": "France",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "19.58",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "30.65",
      "GeoAreaName": "Gambia",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "35.68",
      "2019": "36.65",
      "2020": "36.13",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Georgia",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "29.18",
      "2019": "29.48",
      "2020": "28.63",
      "2021": "29.18",
      "2022": "28.66",
      "2023": "",
      "GeoAreaName": "Germany",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "44.27",
      "2023": "",
      "GeoAreaName": "Ghana",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "27.19",
      "2019": "28.43",
      "2020": "29.28",
      "2021": "29.6",
      "2022": "31.32",
      "2023": "",
      "GeoAreaName": "Greece",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "36.82",
      "2019": "37.07",
      "2020": "35.97",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Grenada",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "34.14",
      "2019": "36.75",
      "2020": "",
      "2021": "45.85",
      "2022": "35.31",
      "2023": "",
      "GeoAreaName": "Guatemala",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "23.38",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Guinea",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "50.9",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Guinea-Bissau",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "40.51",
      "2019": "46.79",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Guyana",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "51.35",
      "2019": "50.89",
      "2020": "40.09",
      "2021": "47.73",
      "2022": "29.73",
      "2023": "",
      "GeoAreaName": "Honduras",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "38.57",
      "2019": "38.9",
      "2020": "39.2",
      "2021": "36.6",
      "2022": "37.54",
      "2023": "",
      "GeoAreaName": "Hungary",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "41.46",
      "2019": "41.9",
      "2020": "38.64",
      "2021": "37.64",
      "2022": "39.62",
      "2023": "",
      "GeoAreaName": "Iceland",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "14.13",
      "2019": "16.92",
      "2020": "17.19",
      "2021": "16.64",
      "2022": "15.94",
      "2023": "",
      "GeoAreaName": "India",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "29.57",
      "2020": "32.61",
      "2021": "32.44",
      "2022": "31.66",
      "2023": "",
      "GeoAreaName": "Indonesia",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "20.48",
      "2019": "18.85",
      "2020": "17.98",
      "2021": "18.98",
      "2022": "18.35",
      "2023": "",
      "GeoAreaName": "Iran (Islamic Republic of)",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "15",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Iraq",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "36.03",
      "2019": "35.28",
      "2020": "36.35",
      "2021": "38.42",
      "2022": "38.01",
      "2023": "",
      "GeoAreaName": "Ireland",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "33.85",
      "2019": "30.37",
      "2020": "28.01",
      "2021": "29.05",
      "2022": "31.84",
      "2023": "",
      "GeoAreaName": "Israel",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "27.21",
      "2019": "28.15",
      "2020": "27.62",
      "2021": "28.77",
      "2022": "28.04",
      "2023": "",
      "GeoAreaName": "Italy",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "59.86",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Jamaica",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "14.38",
      "2019": "14.72",
      "2020": "13.06",
      "2021": "13.18",
      "2022": "12.9",
      "2023": "14.63",
      "GeoAreaName": "Japan",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "58.65",
      "2019": "61.96",
      "2020": "60.34",
      "2021": "57.24",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Jordan",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "41.11",
      "2021": "",
      "2022": "40.79",
      "2023": "",
      "GeoAreaName": "Kazakhstan",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "49.62",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Kenya",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "40.24",
      "2020": "43.35",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Kiribati",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "37.78",
      "2019": "40.86",
      "2020": "47.4",
      "2021": "42.85",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Kyrgyzstan",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "37.64",
      "2019": "37.71",
      "2020": "39.14",
      "2021": "39.13",
      "2022": "37.27",
      "2023": "",
      "GeoAreaName": "Landlocked developing countries (LLDCs)",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "25.68",
      "2023": "",
      "GeoAreaName": "Lao People's Democratic Republic",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "35.86",
      "2019": "35.89",
      "2020": "35.83",
      "2021": "36.85",
      "2022": "36.29",
      "2023": "",
      "GeoAreaName": "Latin America and the Caribbean",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "44.65",
      "2019": "43.47",
      "2020": "53.37",
      "2021": "44.16",
      "2022": "45.25",
      "2023": "",
      "GeoAreaName": "Latvia",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "28.5",
      "2019": "29.55",
      "2020": "31.19",
      "2021": "31.32",
      "2022": "29.62",
      "2023": "",
      "GeoAreaName": "Least Developed Countries (LDCs)",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "21.21",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Lebanon",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "33.78",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Lesotho",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "39.24",
      "2019": "39.24",
      "2020": "37.9",
      "2021": "36.97",
      "2022": "38.55",
      "2023": "",
      "GeoAreaName": "Lithuania",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "25.52",
      "2019": "24.78",
      "2020": "27.63",
      "2021": "20.6",
      "2022": "26.59",
      "2023": "",
      "GeoAreaName": "Luxembourg",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "24.65",
      "2019": "23.28",
      "2020": "24.85",
      "2021": "24.05",
      "2022": "24.6",
      "2023": "",
      "GeoAreaName": "Malaysia",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "18.65",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Maldives",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "17.44",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Mali",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "28.95",
      "2019": "30.01",
      "2020": "28.3",
      "2021": "30.11",
      "2022": "34.63",
      "2023": "",
      "GeoAreaName": "Malta",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "33.29",
      "2020": "",
      "2021": "33.3",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Marshall Islands",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "32.14",
      "2019": "30.21",
      "2020": "",
      "2021": "38.96",
      "2022": "27.87",
      "2023": "",
      "GeoAreaName": "Mauritius",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "27.19",
      "2019": "27.64",
      "2020": "27.97",
      "2021": "28.18",
      "2022": "26.36",
      "2023": "",
      "GeoAreaName": "Melanesia",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "36.17",
      "2019": "36.24",
      "2020": "38.53",
      "2021": "38.65",
      "2022": "39.18",
      "2023": "",
      "GeoAreaName": "Mexico",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "29.26",
      "2019": "29.61",
      "2020": "29.82",
      "2021": "30.03",
      "2022": "29.82",
      "2023": "",
      "GeoAreaName": "Micronesia",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "34.51",
      "2019": "36.71",
      "2020": "39.96",
      "2021": "40.2",
      "2022": "38.03",
      "2023": "",
      "GeoAreaName": "Middle Africa",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "38.93",
      "2019": "42.63",
      "2020": "48.89",
      "2021": "44.26",
      "2022": "41.95",
      "2023": "",
      "GeoAreaName": "Mongolia",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "28.77",
      "2019": "35.78",
      "2020": "32.12",
      "2021": "36.33",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Montenegro",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "50.17",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Montserrat",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "15.2",
      "2022": "12.38",
      "2023": "",
      "GeoAreaName": "Morocco",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "32.34",
      "2019": "35.72",
      "2020": "27.81",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Myanmar",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "43.57",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Namibia",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "57.58",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Nauru",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "24.89",
      "2019": "29.09",
      "2020": "24.8",
      "2021": "26.33",
      "2022": "28.53",
      "2023": "",
      "GeoAreaName": "Netherlands (Kingdom of the)",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "64.43",
      "2020": "",
      "2021": "",
      "2022": "67.52",
      "2023": "",
      "GeoAreaName": "Nigeria",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "46.92",
      "2023": "",
      "GeoAreaName": "Niue",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "26.89",
      "2019": "26.26",
      "2020": "20.58",
      "2021": "21.57",
      "2022": "28.55",
      "2023": "",
      "GeoAreaName": "North Macedonia",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "9.11",
      "2019": "9.3",
      "2020": "9.45",
      "2021": "14.01",
      "2022": "12.6",
      "2023": "",
      "GeoAreaName": "Northern Africa",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "12.68",
      "2019": "13.43",
      "2020": "14.66",
      "2021": "18.07",
      "2022": "17.55",
      "2023": "",
      "GeoAreaName": "Northern Africa and Western Asia",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "39.56",
      "2019": "39.5",
      "2020": "39.82",
      "2021": "40.54",
      "2022": "40.15",
      "2023": "",
      "GeoAreaName": "Northern America",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "36.2",
      "2019": "36.8",
      "2020": "37.7",
      "2021": "38.34",
      "2022": "37.84",
      "2023": "",
      "GeoAreaName": "Northern Europe",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "35.16",
      "2019": "34.27",
      "2020": "34.21",
      "2021": "34.16",
      "2022": "33.95",
      "2023": "",
      "GeoAreaName": "Norway",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "38.19",
      "2019": "39.27",
      "2020": "39.81",
      "2021": "39.32",
      "2022": "38.97",
      "2023": "",
      "GeoAreaName": "Oceania",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "27.92",
      "2019": "28.28",
      "2020": "28.59",
      "2021": "28.8",
      "2022": "27.18",
      "2023": "",
      "GeoAreaName": "Oceania (exc. Australia and New Zealand)",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "15.29",
      "2019": "",
      "2020": "25.94",
      "2021": "28.72",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Oman",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "4.93",
      "2019": "4.47",
      "2020": "",
      "2021": "5.71",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Pakistan",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "46.77",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Palau",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "48.49",
      "2019": "47.38",
      "2020": "45.84",
      "2021": "46.11",
      "2022": "39.25",
      "2023": "46.35",
      "GeoAreaName": "Panama",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "19.74",
      "2023": "",
      "GeoAreaName": "Papua New Guinea",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "37.35",
      "2019": "38.09",
      "2020": "37.85",
      "2021": "39.96",
      "2022": "37.37",
      "2023": "",
      "GeoAreaName": "Paraguay",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "28.78",
      "2019": "30.33",
      "2020": "34.72",
      "2021": "35.37",
      "2022": "31.26",
      "2023": "",
      "GeoAreaName": "Peru",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "52.65",
      "2019": "50.51",
      "2020": "52.95",
      "2021": "53.37",
      "2022": "48.63",
      "2023": "",
      "GeoAreaName": "Philippines",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "42.5",
      "2019": "43.05",
      "2020": "43.32",
      "2021": "42.98",
      "2022": "42.91",
      "2023": "",
      "GeoAreaName": "Poland",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "31.73",
      "2019": "31.61",
      "2020": "31.75",
      "2021": "31.88",
      "2022": "31.06",
      "2023": "",
      "GeoAreaName": "Polynesia",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "33.96",
      "2019": "37.16",
      "2020": "35.78",
      "2021": "33.98",
      "2022": "39.37",
      "2023": "",
      "GeoAreaName": "Portugal",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "13.96",
      "2019": "13.95",
      "2020": "10.75",
      "2021": "13.75",
      "2022": "13.78",
      "2023": "",
      "GeoAreaName": "Qatar",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "14.46",
      "2019": "15.41",
      "2020": "15.65",
      "2021": "16.27",
      "2022": "14.6",
      "2023": "16.31",
      "GeoAreaName": "Republic of Korea",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "40.25",
      "2019": "45.68",
      "2020": "42.15",
      "2021": "44.59",
      "2022": "44.6",
      "2023": "",
      "GeoAreaName": "Republic of Moldova",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "31.63",
      "2019": "33.56",
      "2020": "34.96",
      "2021": "35.83",
      "2022": "33.03",
      "2023": "",
      "GeoAreaName": "Romania",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "41.83",
      "2019": "44.69",
      "2020": "45.74",
      "2021": "46.18",
      "2022": "44.03",
      "2023": "",
      "GeoAreaName": "Russian Federation",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "31.94",
      "2019": "28.62",
      "2020": "33.37",
      "2021": "35",
      "2022": "23.65",
      "2023": "",
      "GeoAreaName": "Rwanda",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "43.94",
      "2019": "57.27",
      "2020": "59.53",
      "2021": "53.21",
      "2022": "47.68",
      "2023": "",
      "GeoAreaName": "Saint Lucia",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "7.94",
      "2019": "7.61",
      "2020": "15.39",
      "2021": "16.67",
      "2022": "19.47",
      "2023": "",
      "GeoAreaName": "Saudi Arabia",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "15.22",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Senegal",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "31.33",
      "2019": "32.74",
      "2020": "31.48",
      "2021": "33.02",
      "2022": "35.5",
      "2023": "",
      "GeoAreaName": "Serbia",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "47.81",
      "2019": "47.7",
      "2020": "41.83",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Seychelles",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "35.91",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Sierra Leone",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "35.83",
      "2019": "36.7",
      "2020": "37.17",
      "2021": "38.14",
      "2022": "40.28",
      "2023": "",
      "GeoAreaName": "Singapore",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "32.14",
      "2019": "33.74",
      "2020": "35.53",
      "2021": "37.99",
      "2022": "38.04",
      "2023": "",
      "GeoAreaName": "Slovakia",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "38.55",
      "2019": "40.13",
      "2020": "40.1",
      "2021": "33.99",
      "2022": "34.79",
      "2023": "",
      "GeoAreaName": "Slovenia",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "37.12",
      "2019": "37.4",
      "2020": "37.89",
      "2021": "39.03",
      "2022": "37.6",
      "2023": "",
      "GeoAreaName": "Small island developing States (SIDS)",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "29.39",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Somalia",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "30.46",
      "2019": "30.2",
      "2020": "31.44",
      "2021": "31.62",
      "2022": "32.94",
      "2023": "",
      "GeoAreaName": "South Africa",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "35.08",
      "2019": "35.02",
      "2020": "34.58",
      "2021": "35.72",
      "2022": "35.19",
      "2023": "",
      "GeoAreaName": "South America",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "41.41",
      "2019": "38.75",
      "2020": "39.83",
      "2021": "39.49",
      "2022": "38.81",
      "2023": "",
      "GeoAreaName": "South-Eastern Asia",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "32.93",
      "2019": "32.94",
      "2020": "34.45",
      "2021": "34.7",
      "2022": "35.63",
      "2023": "",
      "GeoAreaName": "Southern Africa",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "16.37",
      "2019": "17.06",
      "2020": "16.24",
      "2021": "16.71",
      "2022": "15.82",
      "2023": "",
      "GeoAreaName": "Southern Asia",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "29.86",
      "2019": "31.01",
      "2020": "31.12",
      "2021": "31.4",
      "2022": "31.58",
      "2023": "",
      "GeoAreaName": "Southern Europe",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "33.55",
      "2019": "31.92",
      "2020": "35.43",
      "2021": "34.12",
      "2022": "34.86",
      "2023": "",
      "GeoAreaName": "Spain",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "25.97",
      "2019": "27.19",
      "2020": "27.01",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Sri Lanka",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "17.71",
      "2019": "20.08",
      "2020": "21.65",
      "2021": "21.27",
      "2022": "19.83",
      "2023": "",
      "GeoAreaName": "State of Palestine",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "36.83",
      "2019": "37.64",
      "2020": "39.31",
      "2021": "39.46",
      "2022": "37.98",
      "2023": "",
      "GeoAreaName": "Sub-Saharan Africa",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "24.24",
      "2023": "",
      "GeoAreaName": "Sudan",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "38.1",
      "2019": "40.27",
      "2020": "42.29",
      "2021": "42.97",
      "2022": "41.67",
      "2023": "",
      "GeoAreaName": "Sweden",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "32.14",
      "2019": "33.45",
      "2020": "33.06",
      "2021": "31.51",
      "2022": "30.65",
      "2023": "",
      "GeoAreaName": "Switzerland",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "33.91",
      "2019": "35.11",
      "2020": "39.21",
      "2021": "35.5",
      "2022": "36.88",
      "2023": "",
      "GeoAreaName": "Thailand",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "13.27",
      "2022": "22.75",
      "2023": "",
      "GeoAreaName": "Timor-Leste",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "36.79",
      "2023": "",
      "GeoAreaName": "Tokelau",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "41.56",
      "2019": "",
      "2020": "",
      "2021": "35.66",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Tonga",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "45.25",
      "2020": "46.74",
      "2021": "43.62",
      "2022": "46.55",
      "2023": "",
      "GeoAreaName": "Trinidad and Tobago",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "21.56",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Tunisia",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "14.81",
      "2019": "16.17",
      "2020": "18.19",
      "2021": "19.65",
      "2022": "18.48",
      "2023": "",
      "GeoAreaName": "Türkiye",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "",
      "2022": "36.39",
      "2023": "",
      "GeoAreaName": "Tuvalu",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "28.84",
      "2020": "",
      "2021": "35.05",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Uganda",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "40.43",
      "2019": "41.34",
      "2020": "40.71",
      "2021": "41",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Ukraine",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "15.78",
      "2019": "21.51",
      "2020": "17.74",
      "2021": "23.13",
      "2022": "23.43",
      "2023": "",
      "GeoAreaName": "United Arab Emirates",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "36.05",
      "2019": "37.32",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "United Kingdom of Great Britain and Northern Ireland",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "27.91",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "United Republic of Tanzania",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "40.74",
      "2019": "40.68",
      "2020": "41.06",
      "2021": "41.39",
      "2022": "41",
      "2023": "42.57",
      "GeoAreaName": "United States of America",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "35.92",
      "2019": "35.67",
      "2020": "38.74",
      "2021": "39.19",
      "2022": "36",
      "2023": "",
      "GeoAreaName": "Uruguay",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "37.1",
      "2020": "36.44",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Vanuatu",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "27.3",
      "2019": "24.74",
      "2020": "26.33",
      "2021": "24.88",
      "2022": "25.99",
      "2023": "",
      "GeoAreaName": "Viet Nam",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "30.71",
      "2020": "",
      "2021": "",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Wallis and Futuna Islands",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "40.63",
      "2019": "40.84",
      "2020": "41.69",
      "2021": "41.51",
      "2022": "39.53",
      "2023": "",
      "GeoAreaName": "Western Africa",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "16.59",
      "2019": "17.35",
      "2020": "18.41",
      "2021": "19.9",
      "2022": "19.8",
      "2023": "",
      "GeoAreaName": "Western Asia",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "31.39",
      "2019": "31.62",
      "2020": "32",
      "2021": "32.44",
      "2022": "32.41",
      "2023": "",
      "GeoAreaName": "Western Europe",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "28.09",
      "2019": "27.89",
      "2020": "28",
      "2021": "28.5",
      "2022": "27.54",
      "2023": "",
      "GeoAreaName": "World",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "40.42",
      "2019": "35.21",
      "2020": "45.92",
      "2021": "43.28",
      "2022": "46.9",
      "2023": "",
      "GeoAreaName": "Zambia",
      "Age": "15+",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "33.7",
      "2020": "",
      "2021": "33.99",
      "2022": "",
      "2023": "",
      "GeoAreaName": "Zimbabwe",
      "Age": "15+",
      "Sex": "FEMALE"
    }
  ]
};

export const proportionOfSeatsHeldByWomenInNationalParliaments = {
  "title": "Proportion of seats held by women in national parliaments",
  "description": "This table provides data on the percentage of parliamentary seats held by women in national legislatures. Women’s representation in national parliaments is essential for shaping inclusive and gender-responsive policies, particularly in addressing climate change. In countries where women hold a significant proportion of seats, there is greater potential for the creation of laws and frameworks that consider the unique vulnerabilities of women and gender minorities during climate-related disasters. However, in nations with low female representation, these gender-specific issues may be overlooked, hindering the effectiveness of climate adaptation and resilience strategies. This data highlights the critical role of gender balance in national legislative bodies for fostering both gender equity and environmental sustainability.",
  "category": "Parliament Representation",
  "type": "country-data",
  "data": [
    {
      "2018": "27.71",
      "2019": "",
      "2020": "27.02",
      "2021": "27.02",
      "2022": "27.02",
      "2023": "NaN",
      "2024": "NaN",
      "GeoAreaName": "Afghanistan",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "24.82",
      "2022": "25.13",
      "2023": "25.55",
      "2024": "25.96",
      "GeoAreaName": "Africa",
      "Sex": "FEMALE"
    },
    {
      "2018": "27.86",
      "2019": "29.29",
      "2020": "29.51",
      "2021": "29.51",
      "2022": "35.71",
      "2023": "35.71",
      "2024": "35.71",
      "GeoAreaName": "Albania",
      "Sex": "FEMALE"
    },
    {
      "2018": "25.76",
      "2019": "25.76",
      "2020": "25.76",
      "2021": "25.97",
      "2022": "8.11",
      "2023": "7.86",
      "2024": "7.86",
      "GeoAreaName": "Algeria",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "32.23",
      "2022": "33.93",
      "2023": "34.89",
      "2024": "34.79",
      "GeoAreaName": "Americas",
      "Sex": "FEMALE"
    },
    {
      "2018": "32.14",
      "2019": "32.14",
      "2020": "46.43",
      "2021": "46.43",
      "2022": "46.43",
      "2023": "46.43",
      "2024": "50",
      "GeoAreaName": "Andorra",
      "Sex": "FEMALE"
    },
    {
      "2018": "30.45",
      "2019": "30.00",
      "2020": "30.00",
      "2021": "29.55",
      "2022": "29.55",
      "2023": "33.64",
      "2024": "38.64",
      "GeoAreaName": "Angola",
      "Sex": "FEMALE"
    },
    {
      "2018": "11.11",
      "2019": "11.11",
      "2020": "11.11",
      "2021": "11.11",
      "2022": "11.11",
      "2023": "11.11",
      "2024": "5.56",
      "GeoAreaName": "Antigua and Barbuda",
      "Sex": "FEMALE"
    },
    {
      "2018": "38.91",
      "2019": "38.82",
      "2020": "40.86",
      "2021": "42.41",
      "2022": "44.75",
      "2023": "44.75",
      "2024": "42.41",
      "GeoAreaName": "Argentina",
      "Sex": "FEMALE"
    },
    {
      "2018": "18.10",
      "2019": "24.24",
      "2020": "23.48",
      "2021": "22.73",
      "2022": "34.58",
      "2023": "35.51",
      "2024": "36.45",
      "GeoAreaName": "Armenia",
      "Sex": "FEMALE"
    },
    {
      "2018": "17.90",
      "2019": "18.76",
      "2020": "19.49",
      "2021": "19.78",
      "2022": "20.18",
      "2023": "20.24",
      "2024": "20.74",
      "GeoAreaName": "Asia",
      "Sex": "FEMALE"
    },
    {
      "2018": "28.67",
      "2019": "30.00",
      "2020": "30.46",
      "2021": "31.13",
      "2022": "31.13",
      "2023": "38.41",
      "2024": "38",
      "GeoAreaName": "Australia",
      "Sex": "FEMALE"
    },
    {
      "2018": "32.96",
      "2019": "34.44",
      "2020": "35.06",
      "2021": "38.75",
      "2022": "39.11",
      "2023": "43.54",
      "2024": "41.39",
      "GeoAreaName": "Australia and New Zealand",
      "Sex": "FEMALE"
    },
    {
      "2018": "34.43",
      "2019": "37.16",
      "2020": "39.34",
      "2021": "39.89",
      "2022": "41.53",
      "2023": "40.44",
      "2024": "40.98",
      "GeoAreaName": "Austria",
      "Sex": "FEMALE"
    },
    {
      "2018": "16.80",
      "2019": "16.81",
      "2020": "16.81",
      "2021": "18.18",
      "2022": "18.33",
      "2023": "18.64",
      "2024": "18.1",
      "GeoAreaName": "Azerbaijan",
      "Sex": "FEMALE"
    },
    {
      "2018": "12.82",
      "2019": "12.82",
      "2020": "12.82",
      "2021": "12.82",
      "2022": "17.95",
      "2023": "17.95",
      "2024": "17.95",
      "GeoAreaName": "Bahamas",
      "Sex": "FEMALE"
    },
    {
      "2018": "7.50",
      "2019": "15.00",
      "2020": "15.00",
      "2021": "15",
      "2022": "15",
      "2023": "20",
      "2024": "20",
      "GeoAreaName": "Bahrain",
      "Sex": "FEMALE"
    },
    {
      "2018": "20.29",
      "2019": "20.69",
      "2020": "20.92",
      "2021": "20.86",
      "2022": "20.86",
      "2023": "20.86",
      "2024": "20.86",
      "GeoAreaName": "Bangladesh",
      "Sex": "FEMALE"
    },
    {
      "2018": "16.67",
      "2019": "20.00",
      "2020": "20.00",
      "2021": "20",
      "2022": "20",
      "2023": "26.67",
      "2024": "26.67",
      "GeoAreaName": "Barbados",
      "Sex": "FEMALE"
    },
    {
      "2018": "34.55",
      "2019": "34.55",
      "2020": "40.00",
      "2021": "40",
      "2022": "40",
      "2023": "40",
      "2024": "40",
      "GeoAreaName": "Belarus",
      "Sex": "FEMALE"
    },
    {
      "2018": "38.00",
      "2019": "38.00",
      "2020": "40.67",
      "2021": "42",
      "2022": "42",
      "2023": "42.67",
      "2024": "42.67",
      "GeoAreaName": "Belgium",
      "Sex": "FEMALE"
    },
    {
      "2018": "9.38",
      "2019": "9.38",
      "2020": "9.38",
      "2021": "12.5",
      "2022": "12.5",
      "2023": "15.62",
      "2024": "15.62",
      "GeoAreaName": "Belize",
      "Sex": "FEMALE"
    },
    {
      "2018": "7.23",
      "2019": "7.23",
      "2020": "7.23",
      "2021": "8.43",
      "2022": "7.41",
      "2023": "7.41",
      "2024": "26.61",
      "GeoAreaName": "Benin",
      "Sex": "FEMALE"
    },
    {
      "2018": "8.51",
      "2019": "14.89",
      "2020": "14.89",
      "2021": "14.89",
      "2022": "17.39",
      "2023": "17.39",
      "2024": "17.39",
      "GeoAreaName": "Bhutan",
      "Sex": "FEMALE"
    },
    {
      "2018": "53.08",
      "2019": "53.08",
      "2020": "53.08",
      "2021": "46.15",
      "2022": "46.15",
      "2023": "46.15",
      "2024": "46.15",
      "GeoAreaName": "Bolivia (Plurinational State of)",
      "Sex": "FEMALE"
    },
    {
      "2018": "21.43",
      "2019": "21.43",
      "2020": "21.43",
      "2021": "26.19",
      "2022": "26.19",
      "2023": "19.05",
      "2024": "19.05",
      "GeoAreaName": "Bosnia and Herzegovina",
      "Sex": "FEMALE"
    },
    {
      "2018": "9.52",
      "2019": "9.52",
      "2020": "10.77",
      "2021": "10.77",
      "2022": "11.11",
      "2023": "11.11",
      "2024": "11.11",
      "GeoAreaName": "Botswana",
      "Sex": "FEMALE"
    },
    {
      "2018": "10.72",
      "2019": "15.01",
      "2020": "14.62",
      "2021": "15.2",
      "2022": "14.81",
      "2023": "17.74",
      "2024": "17.54",
      "GeoAreaName": "Brazil",
      "Sex": "FEMALE"
    },
    {
      "2018": "9.09",
      "2019": "9.09",
      "2020": "9.09",
      "2021": "9.09",
      "2022": "9.09",
      "2023": "9.09",
      "2024": "11.76",
      "GeoAreaName": "Brunei Darussalam",
      "Sex": "FEMALE"
    },
    {
      "2018": "23.75",
      "2019": "25.83",
      "2020": "26.67",
      "2021": "27.08",
      "2022": "22.5",
      "2023": "24.17",
      "2024": "25.42",
      "GeoAreaName": "Bulgaria",
      "Sex": "FEMALE"
    },
    {
      "2018": "11.02",
      "2019": "13.39",
      "2020": "13.39",
      "2021": "6.3",
      "2022": "6.3",
      "2023": "16.9",
      "2024": "16.9",
      "GeoAreaName": "Burkina Faso",
      "Sex": "FEMALE"
    },
    {
      "2018": "36.36",
      "2019": "36.36",
      "2020": "36.36",
      "2021": "38.21",
      "2022": "38.21",
      "2023": "38.21",
      "2024": "38.21",
      "GeoAreaName": "Burundi",
      "Sex": "FEMALE"
    },
    {
      "2018": "23.61",
      "2019": "23.61",
      "2020": "25.00",
      "2021": "26.39",
      "2022": "38.89",
      "2023": "41.67",
      "2024": "38.89",
      "GeoAreaName": "Cabo Verde",
      "Sex": "FEMALE"
    },
    {
      "2018": "20.33",
      "2019": "20.00",
      "2020": "20.00",
      "2021": "21.6",
      "2022": "20.8",
      "2023": "20.8",
      "2024": "13.6",
      "GeoAreaName": "Cambodia",
      "Sex": "FEMALE"
    },
    {
      "2018": "31.11",
      "2019": "31.11",
      "2020": "31.11",
      "2021": "33.89",
      "2022": "33.89",
      "2023": "33.89",
      "2024": "33.89",
      "GeoAreaName": "Cameroon",
      "Sex": "FEMALE"
    },
    {
      "2018": "27.00",
      "2019": "26.95",
      "2020": "28.99",
      "2021": "29.59",
      "2022": "30.47",
      "2023": "30.65",
      "2024": "30.56",
      "GeoAreaName": "Canada",
      "Sex": "FEMALE"
    },
    {
      "2018": "33.74",
      "2019": "36.09",
      "2020": "36.68",
      "2021": "40.8",
      "2022": "40.9",
      "2023": "41.14",
      "2024": "40.69",
      "GeoAreaName": "Caribbean",
      "Sex": "FEMALE"
    },
    {
      "2018": "19.49",
      "2019": "20.02",
      "2020": "",
      "2021": "23.52",
      "2022": "25.7",
      "2023": "",
      "2024": "",
      "GeoAreaName": "Caucasus and Central Asia",
      "Sex": "FEMALE"
    },
    {
      "2018": "8.57",
      "2019": "8.57",
      "2020": "8.57",
      "2021": "8.57",
      "2022": "12.86",
      "2023": "12.86",
      "2024": "11.43",
      "GeoAreaName": "Central African Republic",
      "Sex": "FEMALE"
    },
    {
      "2018": "32.53",
      "2019": "36.27",
      "2020": "36.93",
      "2021": "37.13",
      "2022": "38.38",
      "2023": "38.65",
      "2024": "39",
      "GeoAreaName": "Central America",
      "Sex": "FEMALE"
    },
    {
      "2018": "15.37",
      "2019": "16.90",
      "2020": "18.86",
      "2021": "18.91",
      "2022": "19.35",
      "2023": "18.63",
      "2024": "18.36",
      "GeoAreaName": "Central and Southern Asia",
      "Sex": "FEMALE"
    },
    {
      "2018": "21.28",
      "2019": "21.10",
      "2020": "25.35",
      "2021": "25.63",
      "2022": "27.47",
      "2023": "27.38",
      "2024": "26.17",
      "GeoAreaName": "Central Asia",
      "Sex": "FEMALE"
    },
    {
      "2018": "12.77",
      "2019": "14.88",
      "2020": "15.43",
      "2021": "15.38",
      "2022": "31.18",
      "2023": "25.89",
      "2024": "26.4",
      "GeoAreaName": "Chad",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "22.58",
      "2020": "22.58",
      "2021": "22.58",
      "2022": "35.48",
      "2023": "35.48",
      "2024": "35.48",
      "GeoAreaName": "Chile",
      "Sex": "FEMALE"
    },
    {
      "2018": "24.25",
      "2019": "24.94",
      "2020": "24.94",
      "2021": "24.94",
      "2022": "24.94",
      "2023": "24.94",
      "2024": "26.54",
      "GeoAreaName": "China",
      "Sex": "FEMALE"
    },
    {
      "2018": "18.67",
      "2019": "18.71",
      "2020": "18.34",
      "2021": "18.82",
      "2022": "18.56",
      "2023": "28.88",
      "2024": "28.88",
      "GeoAreaName": "Colombia",
      "Sex": "FEMALE"
    },
    {
      "2018": "6.06",
      "2019": "6.06",
      "2020": "6.06",
      "2021": "16.67",
      "2022": "16.67",
      "2023": "16.67",
      "2024": "16.67",
      "GeoAreaName": "Comoros",
      "Sex": "FEMALE"
    },
    {
      "2018": "11.26",
      "2019": "11.26",
      "2020": "11.26",
      "2021": "11.26",
      "2022": "11.26",
      "2023": "14.57",
      "2024": "14.57",
      "GeoAreaName": "Congo",
      "Sex": "FEMALE"
    },
    {
      "2018": "35.09",
      "2019": "45.61",
      "2020": "45.61",
      "2021": "45.61",
      "2022": "45.61",
      "2023": "47.37",
      "2024": "47.37",
      "GeoAreaName": "Costa Rica",
      "Sex": "FEMALE"
    },
    {
      "2018": "10.59",
      "2019": "10.98",
      "2020": "11.95",
      "2021": "11.37",
      "2022": "14.17",
      "2023": "13.73",
      "2024": "13.39",
      "GeoAreaName": "Côte d'Ivoire",
      "Sex": "FEMALE"
    },
    {
      "2018": "18.54",
      "2019": "20.53",
      "2020": "19.21",
      "2021": "31.13",
      "2022": "31.79",
      "2023": "31.79",
      "2024": "33.77",
      "GeoAreaName": "Croatia",
      "Sex": "FEMALE"
    },
    {
      "2018": "48.86",
      "2019": "53.22",
      "2020": "53.22",
      "2021": "53.41",
      "2022": "53.41",
      "2023": "53.41",
      "2024": "55.74",
      "GeoAreaName": "Cuba",
      "Sex": "FEMALE"
    },
    {
      "2018": "17.86",
      "2019": "17.86",
      "2020": "19.64",
      "2021": "21.43",
      "2022": "14.29",
      "2023": "14.29",
      "2024": "14.29",
      "GeoAreaName": "Cyprus",
      "Sex": "FEMALE"
    },
    {
      "2018": "22.00",
      "2019": "22.50",
      "2020": "22.50",
      "2021": "23",
      "2022": "25.5",
      "2023": "26",
      "2024": "26",
      "GeoAreaName": "Czechia",
      "Sex": "FEMALE"
    },
    {
      "2018": "16.30",
      "2019": "16.30",
      "2020": "17.61",
      "2021": "17.61",
      "2022": "17.61",
      "2023": "17.61",
      "2024": "17.61",
      "GeoAreaName": "Democratic People's Republic of Korea",
      "Sex": "FEMALE"
    },
    {
      "2018": "8.94",
      "2019": "10.31",
      "2020": "12.80",
      "2021": "12.8",
      "2022": "12.8",
      "2023": "12.8",
      "2024": "12.79",
      "GeoAreaName": "Democratic Republic of the Congo",
      "Sex": "FEMALE"
    },
    {
      "2018": "37.43",
      "2019": "37.43",
      "2020": "39.66",
      "2021": "39.66",
      "2022": "39.66",
      "2023": "43.58",
      "2024": "45.25",
      "GeoAreaName": "Denmark",
      "Sex": "FEMALE"
    },
    {
      "2018": "27.69",
      "2019": "28.69",
      "2020": "30.09",
      "2021": "30.69",
      "2022": "31.42",
      "2023": "31.33",
      "2024": "31.71",
      "GeoAreaName": "Developed regions (Europe, Cyprus, Israel, Northern America, Japan, Australia & New Zealand)",
      "Sex": "FEMALE"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "22.89",
      "2021": "23.57",
      "2022": "24.11",
      "2023": "24.58",
      "2024": "24.91",
      "GeoAreaName": "Developing regions",
      "Sex": "FEMALE"
    },
    {
      "2018": "10.77",
      "2019": "26.15",
      "2020": "26.15",
      "2021": "26.15",
      "2022": "26.15",
      "2023": "26.15",
      "2024": "26.15",
      "GeoAreaName": "Djibouti",
      "Sex": "FEMALE"
    },
    {
      "2018": "25.00",
      "2019": "25.00",
      "2020": "38.10",
      "2021": "34.38",
      "2022": "34.38",
      "2023": "37.5",
      "2024": "37.5",
      "GeoAreaName": "Dominica",
      "Sex": "FEMALE"
    },
    {
      "2018": "26.84",
      "2019": "26.84",
      "2020": "27.89",
      "2021": "27.89",
      "2022": "27.89",
      "2023": "27.89",
      "2024": "27.89",
      "GeoAreaName": "Dominican Republic",
      "Sex": "FEMALE"
    },
    {
      "2018": "29.99",
      "2019": "30.22",
      "2020": "30.93",
      "2021": "31.24",
      "2022": "31.65",
      "2023": "31.47",
      "2024": "31.36",
      "GeoAreaName": "Eastern Africa",
      "Sex": "FEMALE"
    },
    {
      "2018": "20.26",
      "2019": "20.76",
      "2020": "21.16",
      "2021": "21.61",
      "2022": "21.78",
      "2023": "22.21",
      "2024": "22.99",
      "GeoAreaName": "Eastern and South-Eastern Asia",
      "Sex": "FEMALE"
    },
    {
      "2018": "20.93",
      "2019": "21.45",
      "2020": "21.64",
      "2021": "21.75",
      "2022": "21.7",
      "2023": "21.76",
      "2024": "22.88",
      "GeoAreaName": "Eastern Asia",
      "Sex": "FEMALE"
    },
    {
      "2018": "22.20",
      "2019": "22.75",
      "2020": "",
      "2021": "23.11",
      "2022": "23.08",
      "2023": "",
      "2024": "",
      "GeoAreaName": "Eastern Asia (excluding Japan)",
      "Sex": "FEMALE"
    },
    {
      "2018": "19.99",
      "2019": "20.47",
      "2020": "22.39",
      "2021": "22.13",
      "2022": "22.53",
      "2023": "22.74",
      "2024": "23.43",
      "GeoAreaName": "Eastern Europe",
      "Sex": "FEMALE"
    },
    {
      "2018": "37.96",
      "2019": "37.96",
      "2020": "39.42",
      "2021": "39.42",
      "2022": "38.69",
      "2023": "38.69",
      "2024": "43.07",
      "GeoAreaName": "Ecuador",
      "Sex": "FEMALE"
    },
    {
      "2018": "14.93",
      "2019": "14.93",
      "2020": "15.10",
      "2021": "27.41",
      "2022": "27.7",
      "2023": "27.53",
      "2024": "27.7",
      "GeoAreaName": "Egypt",
      "Sex": "FEMALE"
    },
    {
      "2018": "32.14",
      "2019": "30.95",
      "2020": "33.33",
      "2021": "33.33",
      "2022": "27.38",
      "2023": "27.38",
      "2024": "27.38",
      "GeoAreaName": "El Salvador",
      "Sex": "FEMALE"
    },
    {
      "2018": "20.00",
      "2019": "20.00",
      "2020": "21.00",
      "2021": "23",
      "2022": "22",
      "2023": "31",
      "2024": "32",
      "GeoAreaName": "Equatorial Guinea",
      "Sex": "FEMALE"
    },
    {
      "2018": "22.00",
      "2019": "22.00",
      "2020": "",
      "2021": "NaN",
      "2022": "NaN",
      "2023": "NaN",
      "2024": "NaN",
      "GeoAreaName": "Eritrea",
      "Sex": "FEMALE"
    },
    {
      "2018": "26.73",
      "2019": "28.71",
      "2020": "28.71",
      "2021": "27.72",
      "2022": "25.74",
      "2023": "27.72",
      "2024": "29.7",
      "GeoAreaName": "Estonia",
      "Sex": "FEMALE"
    },
    {
      "2018": "6.15",
      "2019": "7.25",
      "2020": "9.59",
      "2021": "9.59",
      "2022": "12.16",
      "2023": "14.86",
      "2024": "21.62",
      "GeoAreaName": "Eswatini",
      "Sex": "FEMALE"
    },
    {
      "2018": "38.76",
      "2019": "38.76",
      "2020": "38.76",
      "2021": "38.76",
      "2022": "41.49",
      "2023": "41.31",
      "2024": "41.31",
      "GeoAreaName": "Ethiopia",
      "Sex": "FEMALE"
    },
    {
      "2018": "28.87",
      "2019": "29.80",
      "2020": "31.44",
      "2021": "31.8",
      "2022": "32.59",
      "2023": "32.35",
      "2024": "32.86",
      "GeoAreaName": "Europe",
      "Sex": "FEMALE"
    },
    {
      "2018": "28.41",
      "2019": "29.44",
      "2020": "31.02",
      "2021": "31.53",
      "2022": "32.32",
      "2023": "32.17",
      "2024": "32.62",
      "GeoAreaName": "Europe and Northern America",
      "Sex": "FEMALE"
    },
    {
      "2018": "16.00",
      "2019": "19.61",
      "2020": "19.61",
      "2021": "21.57",
      "2022": "19.61",
      "2023": "10.91",
      "2024": "9.09",
      "GeoAreaName": "Fiji",
      "Sex": "FEMALE"
    },
    {
      "2018": "42.00",
      "2019": "41.50",
      "2020": "46.00",
      "2021": "46",
      "2022": "45.5",
      "2023": "45.5",
      "2024": "46",
      "GeoAreaName": "Finland",
      "Sex": "FEMALE"
    },
    {
      "2018": "38.99",
      "2019": "39.69",
      "2020": "39.51",
      "2021": "39.51",
      "2022": "39.51",
      "2023": "37.78",
      "2024": "37.26",
      "GeoAreaName": "France",
      "Sex": "FEMALE"
    },
    {
      "2018": "17.09",
      "2019": "17.91",
      "2020": "14.79",
      "2021": "16.2",
      "2022": "15.38",
      "2023": "14.69",
      "2024": "25.51",
      "GeoAreaName": "Gabon",
      "Sex": "FEMALE"
    },
    {
      "2018": "10.34",
      "2019": "10.34",
      "2020": "8.62",
      "2021": "8.62",
      "2022": "10.34",
      "2023": "8.62",
      "2024": "8.62",
      "GeoAreaName": "Gambia",
      "Sex": "FEMALE"
    },
    {
      "2018": "16.00",
      "2019": "14.77",
      "2020": "14.09",
      "2021": "20.67",
      "2022": "19.05",
      "2023": "18.44",
      "2024": "19.29",
      "GeoAreaName": "Georgia",
      "Sex": "FEMALE"
    },
    {
      "2018": "30.75",
      "2019": "30.89",
      "2020": "31.17",
      "2021": "31.45",
      "2022": "34.92",
      "2023": "35.05",
      "2024": "35.33",
      "GeoAreaName": "Germany",
      "Sex": "FEMALE"
    },
    {
      "2018": "12.73",
      "2019": "13.09",
      "2020": "13.09",
      "2021": "14.55",
      "2022": "14.55",
      "2023": "14.55",
      "2024": "14.55",
      "GeoAreaName": "Ghana",
      "Sex": "FEMALE"
    },
    {
      "2018": "18.33",
      "2019": "18.67",
      "2020": "20.67",
      "2021": "21.67",
      "2022": "21",
      "2023": "21",
      "2024": "23",
      "GeoAreaName": "Greece",
      "Sex": "FEMALE"
    },
    {
      "2018": "33.33",
      "2019": "46.67",
      "2020": "46.67",
      "2021": "46.67",
      "2022": "46.67",
      "2023": "31.25",
      "2024": "31.25",
      "GeoAreaName": "Grenada",
      "Sex": "FEMALE"
    },
    {
      "2018": "12.66",
      "2019": "18.99",
      "2020": "18.99",
      "2021": "19.38",
      "2022": "19.38",
      "2023": "19.38",
      "2024": "19.38",
      "GeoAreaName": "Guatemala",
      "Sex": "FEMALE"
    },
    {
      "2018": "21.93",
      "2019": "22.81",
      "2020": "22.81",
      "2021": "16.67",
      "2022": "29.63",
      "2023": "29.63",
      "2024": "29.63",
      "GeoAreaName": "Guinea",
      "Sex": "FEMALE"
    },
    {
      "2018": "13.73",
      "2019": "13.73",
      "2020": "13.73",
      "2021": "13.73",
      "2022": "13.73",
      "2023": "13.73",
      "2024": "9.8",
      "GeoAreaName": "Guinea-Bissau",
      "Sex": "FEMALE"
    },
    {
      "2018": "31.88",
      "2019": "31.88",
      "2020": "34.78",
      "2021": "35.71",
      "2022": "35.71",
      "2023": "36.62",
      "2024": "39.44",
      "GeoAreaName": "Guyana",
      "Sex": "FEMALE"
    },
    {
      "2018": "2.54",
      "2019": "2.54",
      "2020": "2.54",
      "2021": "NaN",
      "2022": "NaN",
      "2023": "NaN",
      "2024": "NaN",
      "GeoAreaName": "Haiti",
      "Sex": "FEMALE"
    },
    {
      "2018": "21.09",
      "2019": "21.09",
      "2020": "21.09",
      "2021": "21.09",
      "2022": "27.34",
      "2023": "27.34",
      "2024": "27.34",
      "GeoAreaName": "Honduras",
      "Sex": "FEMALE"
    },
    {
      "2018": "10.05",
      "2019": "12.56",
      "2020": "12.06",
      "2021": "12.56",
      "2022": "13.07",
      "2023": "13.07",
      "2024": "14.57",
      "GeoAreaName": "Hungary",
      "Sex": "FEMALE"
    },
    {
      "2018": "38.10",
      "2019": "38.10",
      "2020": "38.10",
      "2021": "39.68",
      "2022": "47.62",
      "2023": "47.62",
      "2024": "47.62",
      "GeoAreaName": "Iceland",
      "Sex": "FEMALE"
    },
    {
      "2018": "11.81",
      "2019": "12.60",
      "2020": "14.36",
      "2021": "14.44",
      "2022": "14.94",
      "2023": "15.13",
      "2024": "14.72",
      "GeoAreaName": "India",
      "Sex": "FEMALE"
    },
    {
      "2018": "19.82",
      "2019": "18.21",
      "2020": "20.35",
      "2021": "21.04",
      "2022": "21.91",
      "2023": "21.57",
      "2024": "21.91",
      "GeoAreaName": "Indonesia",
      "Sex": "FEMALE"
    },
    {
      "2018": "5.88",
      "2019": "5.88",
      "2020": "5.88",
      "2021": "5.59",
      "2022": "5.59",
      "2023": "5.59",
      "2024": "5.59",
      "GeoAreaName": "Iran (Islamic Republic of)",
      "Sex": "FEMALE"
    },
    {
      "2018": "25.30",
      "2019": "25.23",
      "2020": "26.44",
      "2021": "26.44",
      "2022": "28.88",
      "2023": "28.88",
      "2024": "29.23",
      "GeoAreaName": "Iraq",
      "Sex": "FEMALE"
    },
    {
      "2018": "22.15",
      "2019": "22.15",
      "2020": "20.89",
      "2021": "22.5",
      "2022": "23.12",
      "2023": "23.12",
      "2024": "23.12",
      "GeoAreaName": "Ireland",
      "Sex": "FEMALE"
    },
    {
      "2018": "27.50",
      "2019": "29.17",
      "2020": "23.33",
      "2021": "26.67",
      "2022": "30",
      "2023": "24.17",
      "2024": "25",
      "GeoAreaName": "Israel",
      "Sex": "FEMALE"
    },
    {
      "2018": "30.95",
      "2019": "35.71",
      "2020": "35.71",
      "2021": "35.71",
      "2022": "36.25",
      "2023": "32.25",
      "2024": "32.25",
      "GeoAreaName": "Italy",
      "Sex": "FEMALE"
    },
    {
      "2018": "17.46",
      "2019": "17.46",
      "2020": "17.46",
      "2021": "28.57",
      "2022": "28.57",
      "2023": "28.57",
      "2024": "27.42",
      "GeoAreaName": "Jamaica",
      "Sex": "FEMALE"
    },
    {
      "2018": "10.11",
      "2019": "10.15",
      "2020": "9.91",
      "2021": "9.91",
      "2022": "9.68",
      "2023": "9.96",
      "2024": "10.34",
      "GeoAreaName": "Japan",
      "Sex": "FEMALE"
    },
    {
      "2018": "15.38",
      "2019": "15.38",
      "2020": "15.38",
      "2021": "11.54",
      "2022": "12.31",
      "2023": "12.31",
      "2024": "13.08",
      "GeoAreaName": "Jordan",
      "Sex": "FEMALE"
    },
    {
      "2018": "27.10",
      "2019": "27.10",
      "2020": "27.10",
      "2021": "27.1",
      "2022": "27.36",
      "2023": "27.36",
      "2024": "19.39",
      "GeoAreaName": "Kazakhstan",
      "Sex": "FEMALE"
    },
    {
      "2018": "21.78",
      "2019": "21.78",
      "2020": "21.78",
      "2021": "21.61",
      "2022": "21.43",
      "2023": "23.28",
      "2024": "23.28",
      "GeoAreaName": "Kenya",
      "Sex": "FEMALE"
    },
    {
      "2018": "6.52",
      "2019": "6.52",
      "2020": "6.52",
      "2021": "6.67",
      "2022": "6.67",
      "2023": "6.67",
      "2024": "6.67",
      "GeoAreaName": "Kiribati",
      "Sex": "FEMALE"
    },
    {
      "2018": "3.08",
      "2019": "4.62",
      "2020": "6.35",
      "2021": "1.54",
      "2022": "1.61",
      "2023": "6.25",
      "2024": "3.08",
      "GeoAreaName": "Kuwait",
      "Sex": "FEMALE"
    },
    {
      "2018": "19.17",
      "2019": "19.17",
      "2020": "19.17",
      "2021": "17.09",
      "2022": "20.45",
      "2023": "20",
      "2024": "21.11",
      "GeoAreaName": "Kyrgyzstan",
      "Sex": "FEMALE"
    },
    {
      "2018": "25.04",
      "2019": "26.49",
      "2020": "27.32",
      "2021": "27.83",
      "2022": "29.58",
      "2023": "30.1",
      "2024": "30.1",
      "GeoAreaName": "Landlocked developing countries (LLDCs)",
      "Sex": "FEMALE"
    },
    {
      "2018": "27.52",
      "2019": "27.52",
      "2020": "27.52",
      "2021": "27.52",
      "2022": "21.95",
      "2023": "21.95",
      "2024": "21.95",
      "GeoAreaName": "Lao People's Democratic Republic",
      "Sex": "FEMALE"
    },
    {
      "2018": "29.52",
      "2019": "31.58",
      "2020": "32.09",
      "2021": "32.96",
      "2022": "34.9",
      "2023": "35.84",
      "2024": "35.79",
      "GeoAreaName": "Latin America and the Caribbean",
      "Sex": "FEMALE"
    },
    {
      "2018": "16.00",
      "2019": "31.00",
      "2020": "30.00",
      "2021": "29",
      "2022": "27",
      "2023": "29",
      "2024": "32",
      "GeoAreaName": "Latvia",
      "Sex": "FEMALE"
    },
    {
      "2018": "22.11",
      "2019": "22.91",
      "2020": "23.09",
      "2021": "24.34",
      "2022": "25.35",
      "2023": "26.24",
      "2024": "26.76",
      "GeoAreaName": "Least Developed Countries (LDCs)",
      "Sex": "FEMALE"
    },
    {
      "2018": "3.13",
      "2019": "4.69",
      "2020": "4.69",
      "2021": "4.69",
      "2022": "4.69",
      "2023": "6.25",
      "2024": "6.25",
      "GeoAreaName": "Lebanon",
      "Sex": "FEMALE"
    },
    {
      "2018": "22.13",
      "2019": "23.33",
      "2020": "23.33",
      "2021": "23.33",
      "2022": "24.35",
      "2023": "26.45",
      "2024": "25",
      "GeoAreaName": "Lesotho",
      "Sex": "FEMALE"
    },
    {
      "2018": "9.86",
      "2019": "12.33",
      "2020": "12.33",
      "2021": "10.96",
      "2022": "10.96",
      "2023": "10.96",
      "2024": "10.96",
      "GeoAreaName": "Liberia",
      "Sex": "FEMALE"
    },
    {
      "2018": "15.96",
      "2019": "15.96",
      "2020": "15.96",
      "2021": "15.96",
      "2022": "16.47",
      "2023": "16.47",
      "2024": "16.47",
      "GeoAreaName": "Libya",
      "Sex": "FEMALE"
    },
    {
      "2018": "12.00",
      "2019": "12.00",
      "2020": "12.00",
      "2021": "12",
      "2022": "28",
      "2023": "28",
      "2024": "28",
      "GeoAreaName": "Liechtenstein",
      "Sex": "FEMALE"
    },
    {
      "2018": "21.28",
      "2019": "21.28",
      "2020": "24.11",
      "2021": "27.66",
      "2022": "28.37",
      "2023": "28.37",
      "2024": "29.29",
      "GeoAreaName": "Lithuania",
      "Sex": "FEMALE"
    },
    {
      "2018": "28.33",
      "2019": "25.00",
      "2020": "30.00",
      "2021": "31.67",
      "2022": "33.33",
      "2023": "35",
      "2024": "33.33",
      "GeoAreaName": "Luxembourg",
      "Sex": "FEMALE"
    },
    {
      "2018": "19.21",
      "2019": "19.21",
      "2020": "15.89",
      "2021": "17.88",
      "2022": "18.54",
      "2023": "18.54",
      "2024": "18.54",
      "GeoAreaName": "Madagascar",
      "Sex": "FEMALE"
    },
    {
      "2018": "16.67",
      "2019": "16.67",
      "2020": "22.92",
      "2021": "22.92",
      "2022": "22.92",
      "2023": "20.73",
      "2024": "20.73",
      "GeoAreaName": "Malawi",
      "Sex": "FEMALE"
    },
    {
      "2018": "10.36",
      "2019": "14.41",
      "2020": "14.41",
      "2021": "14.86",
      "2022": "15",
      "2023": "13.51",
      "2024": "13.51",
      "GeoAreaName": "Malaysia",
      "Sex": "FEMALE"
    },
    {
      "2018": "5.88",
      "2019": "4.71",
      "2020": "4.60",
      "2021": "4.6",
      "2022": "4.6",
      "2023": "4.6",
      "2024": "5",
      "GeoAreaName": "Maldives",
      "Sex": "FEMALE"
    },
    {
      "2018": "8.84",
      "2019": "8.84",
      "2020": "9.52",
      "2021": "27.27",
      "2022": "26.45",
      "2023": "28.57",
      "2024": "28.57",
      "GeoAreaName": "Mali",
      "Sex": "FEMALE"
    },
    {
      "2018": "11.94",
      "2019": "11.94",
      "2020": "13.43",
      "2021": "13.43",
      "2022": "13.43",
      "2023": "27.85",
      "2024": "27.85",
      "GeoAreaName": "Malta",
      "Sex": "FEMALE"
    },
    {
      "2018": "9.09",
      "2019": "9.09",
      "2020": "6.06",
      "2021": "6.06",
      "2022": "6.06",
      "2023": "6.06",
      "2024": "12.12",
      "GeoAreaName": "Marshall Islands",
      "Sex": "FEMALE"
    },
    {
      "2018": "25.17",
      "2019": "20.26",
      "2020": "20.26",
      "2021": "20.26",
      "2022": "20.26",
      "2023": "20.26",
      "2024": "23.3",
      "GeoAreaName": "Mauritania",
      "Sex": "FEMALE"
    },
    {
      "2018": "11.59",
      "2019": "11.59",
      "2020": "20.00",
      "2021": "20",
      "2022": "20",
      "2023": "20",
      "2024": "20",
      "GeoAreaName": "Mauritius",
      "Sex": "FEMALE"
    },
    {
      "2018": "3.49",
      "2019": "4.26",
      "2020": "4.94",
      "2021": "5.68",
      "2022": "5.3",
      "2023": "4.78",
      "2024": "4.87",
      "GeoAreaName": "Melanesia",
      "Sex": "FEMALE"
    },
    {
      "2018": "42.60",
      "2019": "48.20",
      "2020": "48.20",
      "2021": "48.2",
      "2022": "50",
      "2023": "50",
      "2024": "50.4",
      "GeoAreaName": "Mexico",
      "Sex": "FEMALE"
    },
    {
      "2018": "7.81",
      "2019": "7.81",
      "2020": "7.03",
      "2021": "6.3",
      "2022": "7.09",
      "2023": "7.09",
      "2024": "9.52",
      "GeoAreaName": "Micronesia",
      "Sex": "FEMALE"
    },
    {
      "2018": "0.00",
      "2019": "0.00",
      "2020": "0.00",
      "2021": "0",
      "2022": "7.14",
      "2023": "7.14",
      "2024": "15.38",
      "GeoAreaName": "Micronesia (Federated States of)",
      "Sex": "FEMALE"
    },
    {
      "2018": "16.43",
      "2019": "17.02",
      "2020": "17.58",
      "2021": "18.37",
      "2022": "19.66",
      "2023": "20.76",
      "2024": "22.37",
      "GeoAreaName": "Middle Africa",
      "Sex": "FEMALE"
    },
    {
      "2018": "20.83",
      "2019": "33.33",
      "2020": "33.33",
      "2021": "33.33",
      "2022": "33.33",
      "2023": "36.36",
      "2024": "45.83",
      "GeoAreaName": "Monaco",
      "Sex": "FEMALE"
    },
    {
      "2018": "17.11",
      "2019": "17.11",
      "2020": "17.33",
      "2021": "17.33",
      "2022": "17.11",
      "2023": "17.11",
      "2024": "18.06",
      "GeoAreaName": "Mongolia",
      "Sex": "FEMALE"
    },
    {
      "2018": "23.46",
      "2019": "23.46",
      "2020": "29.63",
      "2021": "24.69",
      "2022": "27.16",
      "2023": "28.4",
      "2024": "27.16",
      "GeoAreaName": "Montenegro",
      "Sex": "FEMALE"
    },
    {
      "2018": "20.51",
      "2019": "20.51",
      "2020": "20.51",
      "2021": "20.51",
      "2022": "24.05",
      "2023": "24.3",
      "2024": "24.3",
      "GeoAreaName": "Morocco",
      "Sex": "FEMALE"
    },
    {
      "2018": "39.60",
      "2019": "39.60",
      "2020": "41.20",
      "2021": "42.4",
      "2022": "42.4",
      "2023": "43.2",
      "2024": "43.2",
      "GeoAreaName": "Mozambique",
      "Sex": "FEMALE"
    },
    {
      "2018": "10.16",
      "2019": "11.32",
      "2020": "11.11",
      "2021": "15.29",
      "2022": "15.29",
      "2023": "NaN",
      "2024": "NaN",
      "GeoAreaName": "Myanmar",
      "Sex": "FEMALE"
    },
    {
      "2018": "46.15",
      "2019": "46.15",
      "2020": "42.71",
      "2021": "44.23",
      "2022": "44.23",
      "2023": "44.23",
      "2024": "44.23",
      "GeoAreaName": "Namibia",
      "Sex": "FEMALE"
    },
    {
      "2018": "10.53",
      "2019": "10.53",
      "2020": "10.53",
      "2021": "10.53",
      "2022": "10.53",
      "2023": "10.53",
      "2024": "10.53",
      "GeoAreaName": "Nauru",
      "Sex": "FEMALE"
    },
    {
      "2018": "32.70",
      "2019": "32.73",
      "2020": "32.73",
      "2021": "32.73",
      "2022": "33.58",
      "2023": "33.09",
      "2024": "33.09",
      "GeoAreaName": "Nepal",
      "Sex": "FEMALE"
    },
    {
      "2018": "36.00",
      "2019": "31.33",
      "2020": "33.33",
      "2021": "33.33",
      "2022": "40.67",
      "2023": "40.67",
      "2024": "38.67",
      "GeoAreaName": "Netherlands (Kingdom of the)",
      "Sex": "FEMALE"
    },
    {
      "2018": "38.33",
      "2019": "40.00",
      "2020": "40.83",
      "2021": "48.33",
      "2022": "49.17",
      "2023": "50",
      "2024": "45.53",
      "GeoAreaName": "New Zealand",
      "Sex": "FEMALE"
    },
    {
      "2018": "45.65",
      "2019": "44.57",
      "2020": "47.25",
      "2021": "48.35",
      "2022": "50.55",
      "2023": "51.65",
      "2024": "53.85",
      "GeoAreaName": "Nicaragua",
      "Sex": "FEMALE"
    },
    {
      "2018": "16.96",
      "2019": "16.96",
      "2020": "16.96",
      "2021": "25.9",
      "2022": "25.9",
      "2023": "30.72",
      "2024": "NaN",
      "GeoAreaName": "Niger",
      "Sex": "FEMALE"
    },
    {
      "2018": "5.56",
      "2019": "5.57",
      "2020": "3.43",
      "2021": "3.61",
      "2022": "3.61",
      "2023": "3.61",
      "2024": "3.91",
      "GeoAreaName": "Nigeria",
      "Sex": "FEMALE"
    },
    {
      "2018": "37.50",
      "2019": "38.33",
      "2020": "40.00",
      "2021": "39.17",
      "2022": "41.67",
      "2023": "41.67",
      "2024": "42.5",
      "GeoAreaName": "North Macedonia",
      "Sex": "FEMALE"
    },
    {
      "2018": "22.64",
      "2019": "22.66",
      "2020": "20.13",
      "2021": "24.28",
      "2022": "21.17",
      "2023": "20.4",
      "2024": "20.03",
      "GeoAreaName": "Northern Africa",
      "Sex": "FEMALE"
    },
    {
      "2018": "20.83",
      "2019": "21.37",
      "2020": "",
      "2021": "24.28",
      "2022": "21.17",
      "2023": "",
      "2024": "",
      "GeoAreaName": "Northern Africa (exc. Sudan)",
      "Sex": "FEMALE"
    },
    {
      "2018": "18.14",
      "2019": "18.71",
      "2020": "17.42",
      "2021": "19.18",
      "2022": "18.42",
      "2023": "18",
      "2024": "18.24",
      "GeoAreaName": "Northern Africa and Western Asia",
      "Sex": "FEMALE"
    },
    {
      "2018": "22.79",
      "2019": "25.03",
      "2020": "25.88",
      "2021": "28.27",
      "2022": "28.92",
      "2023": "29.96",
      "2024": "29.74",
      "GeoAreaName": "Northern America",
      "Sex": "FEMALE"
    },
    {
      "2018": "33.79",
      "2019": "35.12",
      "2020": "36.35",
      "2021": "36.88",
      "2022": "37.04",
      "2023": "37.75",
      "2024": "38.2",
      "GeoAreaName": "Northern Europe",
      "Sex": "FEMALE"
    },
    {
      "2018": "41.42",
      "2019": "40.83",
      "2020": "41.42",
      "2021": "44.38",
      "2022": "44.97",
      "2023": "46.15",
      "2024": "44.38",
      "GeoAreaName": "Norway",
      "Sex": "FEMALE"
    },
    {
      "2018": "15.51",
      "2019": "16.31",
      "2020": "16.56",
      "2021": "18.01",
      "2022": "17.86",
      "2023": "19.53",
      "2024": "19.37",
      "GeoAreaName": "Oceania",
      "Sex": "FEMALE"
    },
    {
      "2018": "5.65",
      "2019": "6.07",
      "2020": "6.20",
      "2021": "6.4",
      "2022": "5.98",
      "2023": "6.44",
      "2024": "7.13",
      "GeoAreaName": "Oceania (exc. Australia and New Zealand)",
      "Sex": "FEMALE"
    },
    {
      "2018": "1.18",
      "2019": "1.18",
      "2020": "2.33",
      "2021": "2.33",
      "2022": "2.33",
      "2023": "2.33",
      "2024": "0",
      "GeoAreaName": "Oman",
      "Sex": "FEMALE"
    },
    {
      "2018": "20.59",
      "2019": "20.23",
      "2020": "20.18",
      "2021": "20.18",
      "2022": "20.47",
      "2023": "20.47",
      "2024": "20.47",
      "GeoAreaName": "Pakistan",
      "Sex": "FEMALE"
    },
    {
      "2018": "12.50",
      "2019": "12.50",
      "2020": "12.50",
      "2021": "6.25",
      "2022": "6.25",
      "2023": "6.25",
      "2024": "6.25",
      "GeoAreaName": "Palau",
      "Sex": "FEMALE"
    },
    {
      "2018": "18.31",
      "2019": "18.31",
      "2020": "22.54",
      "2021": "22.54",
      "2022": "22.54",
      "2023": "22.54",
      "2024": "22.54",
      "GeoAreaName": "Panama",
      "Sex": "FEMALE"
    },
    {
      "2018": "0.00",
      "2019": "0.00",
      "2020": "0.00",
      "2021": "0",
      "2022": "0",
      "2023": "1.74",
      "2024": "2.7",
      "GeoAreaName": "Papua New Guinea",
      "Sex": "FEMALE"
    },
    {
      "2018": "13.75",
      "2019": "15.00",
      "2020": "16.25",
      "2021": "15",
      "2022": "17.5",
      "2023": "18.75",
      "2024": "23.75",
      "GeoAreaName": "Paraguay",
      "Sex": "FEMALE"
    },
    {
      "2018": "27.69",
      "2019": "30.00",
      "2020": "30.00",
      "2021": "26.15",
      "2022": "40",
      "2023": "38.76",
      "2024": "38.46",
      "GeoAreaName": "Peru",
      "Sex": "FEMALE"
    },
    {
      "2018": "29.45",
      "2019": "29.45",
      "2020": "27.96",
      "2021": "27.96",
      "2022": "27.69",
      "2023": "27.33",
      "2024": "27.33",
      "GeoAreaName": "Philippines",
      "Sex": "FEMALE"
    },
    {
      "2018": "28.04",
      "2019": "29.13",
      "2020": "28.70",
      "2021": "28.32",
      "2022": "28.26",
      "2023": "28.26",
      "2024": "29.57",
      "GeoAreaName": "Poland",
      "Sex": "FEMALE"
    },
    {
      "2018": "8.70",
      "2019": "8.70",
      "2020": "8.60",
      "2021": "8.6",
      "2022": "6.38",
      "2023": "10.2",
      "2024": "10.2",
      "GeoAreaName": "Polynesia",
      "Sex": "FEMALE"
    },
    {
      "2018": "34.78",
      "2019": "35.65",
      "2020": "40.00",
      "2021": "40",
      "2022": "40",
      "2023": "36.09",
      "2024": "36.52",
      "GeoAreaName": "Portugal",
      "Sex": "FEMALE"
    },
    {
      "2018": "9.76",
      "2019": "9.76",
      "2020": "9.76",
      "2021": "9.76",
      "2022": "4.44",
      "2023": "4.44",
      "2024": "4.44",
      "GeoAreaName": "Qatar",
      "Sex": "FEMALE"
    },
    {
      "2018": "17.00",
      "2019": "17.11",
      "2020": "17.29",
      "2021": "19",
      "2022": "18.64",
      "2023": "19.06",
      "2024": "19.19",
      "GeoAreaName": "Republic of Korea",
      "Sex": "FEMALE"
    },
    {
      "2018": "22.77",
      "2019": "22.77",
      "2020": "24.75",
      "2021": "24.75",
      "2022": "40.59",
      "2023": "38.61",
      "2024": "40.82",
      "GeoAreaName": "Republic of Moldova",
      "Sex": "FEMALE"
    },
    {
      "2018": "20.67",
      "2019": "20.67",
      "2020": "21.88",
      "2021": "18.54",
      "2022": "19.09",
      "2023": "19.09",
      "2024": "19.21",
      "GeoAreaName": "Romania",
      "Sex": "FEMALE"
    },
    {
      "2018": "15.78",
      "2019": "15.78",
      "2020": "15.78",
      "2021": "15.78",
      "2022": "16.22",
      "2023": "16.44",
      "2024": "16.44",
      "GeoAreaName": "Russian Federation",
      "Sex": "FEMALE"
    },
    {
      "2018": "61.25",
      "2019": "61.25",
      "2020": "61.25",
      "2021": "61.25",
      "2022": "61.25",
      "2023": "61.25",
      "2024": "61.25",
      "GeoAreaName": "Rwanda",
      "Sex": "FEMALE"
    },
    {
      "2018": "13.33",
      "2019": "13.33",
      "2020": "20.00",
      "2021": "25",
      "2022": "25",
      "2023": "31.25",
      "2024": "31.25",
      "GeoAreaName": "Saint Kitts and Nevis",
      "Sex": "FEMALE"
    },
    {
      "2018": "16.67",
      "2019": "16.67",
      "2020": "16.67",
      "2021": "16.67",
      "2022": "11.11",
      "2023": "11.11",
      "2024": "11.11",
      "GeoAreaName": "Saint Lucia",
      "Sex": "FEMALE"
    },
    {
      "2018": "13.04",
      "2019": "13.04",
      "2020": "13.04",
      "2021": "18.18",
      "2022": "18.18",
      "2023": "18.18",
      "2024": "21.74",
      "GeoAreaName": "Saint Vincent and the Grenadines",
      "Sex": "FEMALE"
    },
    {
      "2018": "10.00",
      "2019": "10.00",
      "2020": "10.00",
      "2021": "10",
      "2022": "7.84",
      "2023": "12.96",
      "2024": "12.96",
      "GeoAreaName": "Samoa",
      "Sex": "FEMALE"
    },
    {
      "2018": "26.67",
      "2019": "25.00",
      "2020": "31.67",
      "2021": "33.33",
      "2022": "33.33",
      "2023": "33.33",
      "2024": "33.33",
      "GeoAreaName": "San Marino",
      "Sex": "FEMALE"
    },
    {
      "2018": "18.18",
      "2019": "14.55",
      "2020": "14.55",
      "2021": "23.64",
      "2022": "23.64",
      "2023": "14.55",
      "2024": "14.55",
      "GeoAreaName": "Sao Tome and Principe",
      "Sex": "FEMALE"
    },
    {
      "2018": "19.87",
      "2019": "19.87",
      "2020": "19.87",
      "2021": "19.87",
      "2022": "19.87",
      "2023": "19.87",
      "2024": "19.87",
      "GeoAreaName": "Saudi Arabia",
      "Sex": "FEMALE"
    },
    {
      "2018": "41.82",
      "2019": "41.82",
      "2020": "43.03",
      "2021": "43.03",
      "2022": "42.68",
      "2023": "46.06",
      "2024": "46.06",
      "GeoAreaName": "Senegal",
      "Sex": "FEMALE"
    },
    {
      "2018": "34.40",
      "2019": "37.65",
      "2020": "37.65",
      "2021": "39.2",
      "2022": "40",
      "2023": "34.8",
      "2024": "38",
      "GeoAreaName": "Serbia",
      "Sex": "FEMALE"
    },
    {
      "2018": "21.21",
      "2019": "21.21",
      "2020": "21.21",
      "2021": "22.86",
      "2022": "22.86",
      "2023": "22.86",
      "2024": "20.59",
      "GeoAreaName": "Seychelles",
      "Sex": "FEMALE"
    },
    {
      "2018": "12.40",
      "2019": "12.33",
      "2020": "12.33",
      "2021": "12.33",
      "2022": "12.33",
      "2023": "13.01",
      "2024": "29.53",
      "GeoAreaName": "Sierra Leone",
      "Sex": "FEMALE"
    },
    {
      "2018": "23.00",
      "2019": "23.00",
      "2020": "24.00",
      "2021": "29.47",
      "2022": "29.13",
      "2023": "29.13",
      "2024": "29.29",
      "GeoAreaName": "Singapore",
      "Sex": "FEMALE"
    },
    {
      "2018": "20.00",
      "2019": "20.00",
      "2020": "20.67",
      "2021": "22.67",
      "2022": "21.33",
      "2023": "22",
      "2024": "22.67",
      "GeoAreaName": "Slovakia",
      "Sex": "FEMALE"
    },
    {
      "2018": "36.67",
      "2019": "24.44",
      "2020": "27.78",
      "2021": "26.67",
      "2022": "28.89",
      "2023": "37.78",
      "2024": "37.78",
      "GeoAreaName": "Slovenia",
      "Sex": "FEMALE"
    },
    {
      "2018": "23.67",
      "2019": "25.04",
      "2020": "25.63",
      "2021": "27.71",
      "2022": "28.08",
      "2023": "28.12",
      "2024": "27.34",
      "GeoAreaName": "Small island developing States (SIDS)",
      "Sex": "FEMALE"
    },
    {
      "2018": "2.00",
      "2019": "2.04",
      "2020": "6.12",
      "2021": "8",
      "2022": "8",
      "2023": "8",
      "2024": "8",
      "GeoAreaName": "Solomon Islands",
      "Sex": "FEMALE"
    },
    {
      "2018": "24.36",
      "2019": "24.36",
      "2020": "24.36",
      "2021": "24.36",
      "2022": "24.36",
      "2023": "19.71",
      "2024": "19.64",
      "GeoAreaName": "Somalia",
      "Sex": "FEMALE"
    },
    {
      "2018": "42.39",
      "2019": "42.75",
      "2020": "46.35",
      "2021": "45.84",
      "2022": "46.72",
      "2023": "46.25",
      "2024": "45.98",
      "GeoAreaName": "South Africa",
      "Sex": "FEMALE"
    },
    {
      "2018": "24.79",
      "2019": "26.11",
      "2020": "26.52",
      "2021": "26.29",
      "2022": "29.12",
      "2023": "30.96",
      "2024": "31.22",
      "GeoAreaName": "South America",
      "Sex": "FEMALE"
    },
    {
      "2018": "28.46",
      "2019": "28.46",
      "2020": "28.46",
      "2021": "28.46",
      "2022": "32.36",
      "2023": "32.36",
      "2024": "32.36",
      "GeoAreaName": "South Sudan",
      "Sex": "FEMALE"
    },
    {
      "2018": "19.15",
      "2019": "19.61",
      "2020": "20.44",
      "2021": "21.4",
      "2022": "21.9",
      "2023": "23.01",
      "2024": "23.18",
      "GeoAreaName": "South-Eastern Asia",
      "Sex": "FEMALE"
    },
    {
      "2018": "33.69",
      "2019": "34.05",
      "2020": "35.55",
      "2021": "35.57",
      "2022": "36.57",
      "2023": "36.88",
      "2024": "37.15",
      "GeoAreaName": "Southern Africa",
      "Sex": "FEMALE"
    },
    {
      "2018": "13.92",
      "2019": "15.79",
      "2020": "17.34",
      "2021": "17.35",
      "2022": "17.61",
      "2023": "16.54",
      "2024": "16.48",
      "GeoAreaName": "Southern Asia",
      "Sex": "FEMALE"
    },
    {
      "2018": "29.89",
      "2019": "31.55",
      "2020": "33.28",
      "2021": "34.15",
      "2022": "34.77",
      "2023": "33.53",
      "2024": "34.64",
      "GeoAreaName": "Southern Europe",
      "Sex": "FEMALE"
    },
    {
      "2018": "39.14",
      "2019": "41.14",
      "2020": "44.00",
      "2021": "44",
      "2022": "42.98",
      "2023": "42.41",
      "2024": "44.29",
      "GeoAreaName": "Spain",
      "Sex": "FEMALE"
    },
    {
      "2018": "5.78",
      "2019": "5.33",
      "2020": "5.33",
      "2021": "5.38",
      "2022": "5.33",
      "2023": "5.33",
      "2024": "5.33",
      "GeoAreaName": "Sri Lanka",
      "Sex": "FEMALE"
    },
    {
      "2018": "23.64",
      "2019": "23.88",
      "2020": "24.34",
      "2021": "24.94",
      "2022": "25.95",
      "2023": "26.47",
      "2024": "27.14",
      "GeoAreaName": "Sub-Saharan Africa",
      "Sex": "FEMALE"
    },
    {
      "2018": "23.97",
      "2019": "24.08",
      "2020": "",
      "2021": "24.94",
      "2022": "25.95",
      "2023": "",
      "2024": "",
      "GeoAreaName": "Sub-Saharan Africa (inc. Sudan)",
      "Sex": "FEMALE"
    },
    {
      "2018": "30.52",
      "2019": "27.65",
      "2020": "",
      "2021": "NaN",
      "2022": "NaN",
      "2023": "NaN",
      "2024": "NaN",
      "GeoAreaName": "Sudan",
      "Sex": "FEMALE"
    },
    {
      "2018": "25.49",
      "2019": "29.41",
      "2020": "31.37",
      "2021": "29.41",
      "2022": "29.41",
      "2023": "29.41",
      "2024": "31.37",
      "GeoAreaName": "Suriname",
      "Sex": "FEMALE"
    },
    {
      "2018": "43.55",
      "2019": "47.28",
      "2020": "46.99",
      "2021": "46.99",
      "2022": "46.13",
      "2023": "46.42",
      "2024": "46.7",
      "GeoAreaName": "Sweden",
      "Sex": "FEMALE"
    },
    {
      "2018": "32.50",
      "2019": "32.50",
      "2020": "41.50",
      "2021": "42",
      "2022": "42.5",
      "2023": "41.71",
      "2024": "38.5",
      "GeoAreaName": "Switzerland",
      "Sex": "FEMALE"
    },
    {
      "2018": "13.20",
      "2019": "13.20",
      "2020": "12.40",
      "2021": "11.2",
      "2022": "11.2",
      "2023": "10.8",
      "2024": "10.4",
      "GeoAreaName": "Syrian Arab Republic",
      "Sex": "FEMALE"
    },
    {
      "2018": "19.05",
      "2019": "19.05",
      "2020": "19.05",
      "2021": "23.81",
      "2022": "26.98",
      "2023": "26.98",
      "2024": "26.98",
      "GeoAreaName": "Tajikistan",
      "Sex": "FEMALE"
    },
    {
      "2018": "4.80",
      "2019": "5.42",
      "2020": "16.20",
      "2021": "15.75",
      "2022": "15.75",
      "2023": "16.63",
      "2024": "19.4",
      "GeoAreaName": "Thailand",
      "Sex": "FEMALE"
    },
    {
      "2018": "32.31",
      "2019": "40.00",
      "2020": "38.46",
      "2021": "38.46",
      "2022": "40",
      "2023": "40",
      "2024": "38.46",
      "GeoAreaName": "Timor-Leste",
      "Sex": "FEMALE"
    },
    {
      "2018": "17.58",
      "2019": "16.48",
      "2020": "18.68",
      "2021": "18.68",
      "2022": "18.68",
      "2023": "19.78",
      "2024": "18.89",
      "GeoAreaName": "Togo",
      "Sex": "FEMALE"
    },
    {
      "2018": "7.41",
      "2019": "7.41",
      "2020": "7.41",
      "2021": "7.41",
      "2022": "3.7",
      "2023": "7.14",
      "2024": "7.14",
      "GeoAreaName": "Tonga",
      "Sex": "FEMALE"
    },
    {
      "2018": "30.95",
      "2019": "30.95",
      "2020": "30.95",
      "2021": "26.19",
      "2022": "26.19",
      "2023": "28.57",
      "2024": "28.57",
      "GeoAreaName": "Trinidad and Tobago",
      "Sex": "FEMALE"
    },
    {
      "2018": "31.34",
      "2019": "35.94",
      "2020": "24.88",
      "2021": "26.27",
      "2022": "26.27",
      "2023": "NaN",
      "2024": "15.69",
      "GeoAreaName": "Tunisia",
      "Sex": "FEMALE"
    },
    {
      "2018": "14.57",
      "2019": "17.45",
      "2020": "17.32",
      "2021": "17.33",
      "2022": "17.35",
      "2023": "17.41",
      "2024": "19.87",
      "GeoAreaName": "Türkiye",
      "Sex": "FEMALE"
    },
    {
      "2018": "25.81",
      "2019": "25.00",
      "2020": "25.00",
      "2021": "25",
      "2022": "25.86",
      "2023": "25.86",
      "2024": "25.6",
      "GeoAreaName": "Turkmenistan",
      "Sex": "FEMALE"
    },
    {
      "2018": "6.67",
      "2019": "6.67",
      "2020": "6.25",
      "2021": "6.25",
      "2022": "6.25",
      "2023": "6.25",
      "2024": "6.25",
      "GeoAreaName": "Tuvalu",
      "Sex": "FEMALE"
    },
    {
      "2018": "34.30",
      "2019": "34.86",
      "2020": "34.86",
      "2021": "34.86",
      "2022": "33.81",
      "2023": "33.81",
      "2024": "33.93",
      "GeoAreaName": "Uganda",
      "Sex": "FEMALE"
    },
    {
      "2018": "12.29",
      "2019": "11.58",
      "2020": "20.80",
      "2021": "20.8",
      "2022": "20.33",
      "2023": "20.43",
      "2024": "21.09",
      "GeoAreaName": "Ukraine",
      "Sex": "FEMALE"
    },
    {
      "2018": "22.50",
      "2019": "22.50",
      "2020": "50.00",
      "2021": "50",
      "2022": "50",
      "2023": "50",
      "2024": "50",
      "GeoAreaName": "United Arab Emirates",
      "Sex": "FEMALE"
    },
    {
      "2018": "32.00",
      "2019": "32.00",
      "2020": "33.85",
      "2021": "33.85",
      "2022": "34.36",
      "2023": "34.51",
      "2024": "34.67",
      "GeoAreaName": "United Kingdom of Great Britain and Northern Ireland",
      "Sex": "FEMALE"
    },
    {
      "2018": "37.18",
      "2019": "36.90",
      "2020": "36.90",
      "2021": "36.72",
      "2022": "36.86",
      "2023": "37.4",
      "2024": "37.4",
      "GeoAreaName": "United Republic of Tanzania",
      "Sex": "FEMALE"
    },
    {
      "2018": "19.49",
      "2019": "23.56",
      "2020": "23.43",
      "2021": "27.25",
      "2022": "27.71",
      "2023": "29.43",
      "2024": "29.1",
      "GeoAreaName": "United States of America",
      "Sex": "FEMALE"
    },
    {
      "2018": "20.20",
      "2019": "22.22",
      "2020": "21.21",
      "2021": "24.24",
      "2022": "25.25",
      "2023": "26.26",
      "2024": "25.25",
      "GeoAreaName": "Uruguay",
      "Sex": "FEMALE"
    },
    {
      "2018": "16.00",
      "2019": "16.00",
      "2020": "32.00",
      "2021": "32.65",
      "2022": "33.33",
      "2023": "33.57",
      "2024": "34.56",
      "GeoAreaName": "Uzbekistan",
      "Sex": "FEMALE"
    },
    {
      "2018": "0.00",
      "2019": "0.00",
      "2020": "0.00",
      "2021": "0",
      "2022": "0",
      "2023": "1.92",
      "2024": "1.96",
      "GeoAreaName": "Vanuatu",
      "Sex": "FEMALE"
    },
    {
      "2018": "22.16",
      "2019": "22.16",
      "2020": "22.16",
      "2021": "22.16",
      "2022": "NaN",
      "2023": "NaN",
      "2024": "NaN",
      "GeoAreaName": "Venezuela (Bolivarian Republic of)",
      "Sex": "FEMALE"
    },
    {
      "2018": "26.72",
      "2019": "26.72",
      "2020": "26.72",
      "2021": "26.72",
      "2022": "30.26",
      "2023": "30.26",
      "2024": "30.63",
      "GeoAreaName": "Viet Nam",
      "Sex": "FEMALE"
    },
    {
      "2018": "14.84",
      "2019": "14.81",
      "2020": "14.84",
      "2021": "15.88",
      "2022": "16.95",
      "2023": "18.47",
      "2024": "19.45",
      "GeoAreaName": "Western Africa",
      "Sex": "FEMALE"
    },
    {
      "2018": "14.25",
      "2019": "15.34",
      "2020": "15.57",
      "2021": "15.73",
      "2022": "16.57",
      "2023": "16.58",
      "2024": "17.08",
      "GeoAreaName": "Western Asia",
      "Sex": "FEMALE"
    },
    {
      "2018": "12.92",
      "2019": "13.91",
      "2020": "",
      "2021": "14.07",
      "2022": "14.67",
      "2023": "",
      "2024": "",
      "GeoAreaName": "Western Asia (exc. Armenia, Azerbaijan, Cyprus, Israel and Georgia)",
      "Sex": "FEMALE"
    },
    {
      "2018": "34.02",
      "2019": "34.22",
      "2020": "35.80",
      "2021": "36.14",
      "2022": "38.24",
      "2023": "37.77",
      "2024": "37.39",
      "GeoAreaName": "Western Europe",
      "Sex": "FEMALE"
    },
    {
      "2018": "23.43",
      "2019": "24.30",
      "2020": "24.93",
      "2021": "25.61",
      "2022": "26.22",
      "2023": "26.54",
      "2024": "26.9",
      "GeoAreaName": "World",
      "Sex": "FEMALE"
    },
    {
      "2018": "0.00",
      "2019": "0.33",
      "2020": "0.33",
      "2021": "0.33",
      "2022": "0",
      "2023": "0",
      "2024": "0",
      "GeoAreaName": "Yemen",
      "Sex": "FEMALE"
    },
    {
      "2018": "17.96",
      "2019": "17.96",
      "2020": "16.77",
      "2021": "16.77",
      "2022": "15.06",
      "2023": "14.97",
      "2024": "14.97",
      "GeoAreaName": "Zambia",
      "Sex": "FEMALE"
    },
    {
      "2018": "33.20",
      "2019": "31.85",
      "2020": "31.85",
      "2021": "31.85",
      "2022": "30.57",
      "2023": "30.57",
      "2024": "28.85",
      "GeoAreaName": "Zimbabwe",
      "Sex": "FEMALE"
    }
  ]
};

export const currentNumberOfSeatsInNationalParliaments = {
  "title": "Current number of seats in national parliaments",
  "description": "This table presents the total number of seats available in national parliaments across various countries. Understanding the overall composition of national legislative bodies is crucial for assessing the potential influence of gender representation on policy-making, particularly in the context of climate change. By comparing this data with the proportion of seats held by women, it is possible to evaluate the level of gender inclusivity in national decision-making processes. Parliaments with a higher number of seats may have more opportunities for diversity, which is vital for enacting policies that address both climate resilience and gender inequality. Conversely, parliaments with fewer seats may face challenges in achieving balanced representation, potentially impacting the development of equitable climate policies.",
  "category": "Parliament Representation",
  "type": "country-data",
  "data": [
    {
      "2021": "248",
      "2022": "248",
      "2023": "NaN",
      "2024": "NaN",
      "GeoAreaName": "Afghanistan",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "10510",
      "2022": "10449",
      "2023": "10352",
      "2024": "10286",
      "GeoAreaName": "Africa",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "122",
      "2022": "140",
      "2023": "140",
      "2024": "140",
      "GeoAreaName": "Albania",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "462",
      "2022": "407",
      "2023": "407",
      "2024": "407",
      "GeoAreaName": "Algeria",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "4922",
      "2022": "4754",
      "2023": "4774",
      "2024": "4659",
      "GeoAreaName": "Americas",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "28",
      "2022": "28",
      "2023": "28",
      "2024": "28",
      "GeoAreaName": "Andorra",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "220",
      "2022": "220",
      "2023": "220",
      "2024": "220",
      "GeoAreaName": "Angola",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "18",
      "2022": "18",
      "2023": "18",
      "2024": "18",
      "GeoAreaName": "Antigua and Barbuda",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "257",
      "2022": "257",
      "2023": "257",
      "2024": "257",
      "GeoAreaName": "Argentina",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "132",
      "2022": "107",
      "2023": "107",
      "2024": "107",
      "GeoAreaName": "Armenia",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "13173",
      "2022": "13060",
      "2023": "12340",
      "2024": "12368",
      "GeoAreaName": "Asia",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "151",
      "2022": "151",
      "2023": "151",
      "2024": "150",
      "GeoAreaName": "Australia",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "271",
      "2022": "271",
      "2023": "271",
      "2024": "273",
      "GeoAreaName": "Australia and New Zealand",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "183",
      "2022": "183",
      "2023": "183",
      "2024": "183",
      "GeoAreaName": "Austria",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "121",
      "2022": "120",
      "2023": "118",
      "2024": "116",
      "GeoAreaName": "Azerbaijan",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "39",
      "2022": "39",
      "2023": "39",
      "2024": "39",
      "GeoAreaName": "Bahamas",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "40",
      "2022": "40",
      "2023": "40",
      "2024": "40",
      "GeoAreaName": "Bahrain",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "350",
      "2022": "350",
      "2023": "350",
      "2024": "350",
      "GeoAreaName": "Bangladesh",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "30",
      "2022": "30",
      "2023": "30",
      "2024": "30",
      "GeoAreaName": "Barbados",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "110",
      "2022": "110",
      "2023": "110",
      "2024": "110",
      "GeoAreaName": "Belarus",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "150",
      "2022": "150",
      "2023": "150",
      "2024": "150",
      "GeoAreaName": "Belgium",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "32",
      "2022": "32",
      "2023": "32",
      "2024": "32",
      "GeoAreaName": "Belize",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "83",
      "2022": "81",
      "2023": "109",
      "2024": "109",
      "GeoAreaName": "Benin",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "47",
      "2022": "46",
      "2023": "46",
      "2024": "46",
      "GeoAreaName": "Bhutan",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "130",
      "2022": "130",
      "2023": "130",
      "2024": "130",
      "GeoAreaName": "Bolivia (Plurinational State of)",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "42",
      "2022": "42",
      "2023": "42",
      "2024": "42",
      "GeoAreaName": "Bosnia and Herzegovina",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "65",
      "2022": "63",
      "2023": "63",
      "2024": "63",
      "GeoAreaName": "Botswana",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "513",
      "2022": "513",
      "2023": "513",
      "2024": "513",
      "GeoAreaName": "Brazil",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "33",
      "2022": "33",
      "2023": "34",
      "2024": "34",
      "GeoAreaName": "Brunei Darussalam",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "240",
      "2022": "240",
      "2023": "240",
      "2024": "240",
      "GeoAreaName": "Bulgaria",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "127",
      "2022": "127",
      "2023": "71",
      "2024": "71",
      "GeoAreaName": "Burkina Faso",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "123",
      "2022": "123",
      "2023": "123",
      "2024": "123",
      "GeoAreaName": "Burundi",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "72",
      "2022": "72",
      "2023": "72",
      "2024": "72",
      "GeoAreaName": "Cabo Verde",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "125",
      "2022": "125",
      "2023": "125",
      "2024": "125",
      "GeoAreaName": "Cambodia",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "180",
      "2022": "180",
      "2023": "180",
      "2024": "180",
      "GeoAreaName": "Cameroon",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "338",
      "2022": "338",
      "2023": "336",
      "2024": "337",
      "GeoAreaName": "Canada",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "1071",
      "2022": "1071",
      "2023": "1072",
      "2024": "956",
      "GeoAreaName": "Caribbean",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "961",
      "2022": "891",
      "2023": "",
      "2024": "",
      "GeoAreaName": "Caucasus and Central Asia",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "140",
      "2022": "140",
      "2023": "140",
      "2024": "140",
      "GeoAreaName": "Central African Republic",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "1123",
      "2022": "1123",
      "2023": "1123",
      "2024": "1123",
      "GeoAreaName": "Central America",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "2956",
      "2022": "2914",
      "2023": "2668",
      "2024": "2636",
      "GeoAreaName": "Central and Southern Asia",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "558",
      "2022": "517",
      "2023": "515",
      "2024": "512",
      "GeoAreaName": "Central Asia",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "156",
      "2022": "93",
      "2023": "197",
      "2024": "197",
      "GeoAreaName": "Chad",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "155",
      "2022": "155",
      "2023": "155",
      "2024": "155",
      "GeoAreaName": "Chile",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "2975",
      "2022": "2975",
      "2023": "2975",
      "2024": "2977",
      "GeoAreaName": "China",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "170",
      "2022": "167",
      "2023": "187",
      "2024": "187",
      "GeoAreaName": "Colombia",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "24",
      "2022": "24",
      "2023": "24",
      "2024": "24",
      "GeoAreaName": "Comoros",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "151",
      "2022": "151",
      "2023": "151",
      "2024": "151",
      "GeoAreaName": "Congo",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "57",
      "2022": "57",
      "2023": "57",
      "2024": "57",
      "GeoAreaName": "Costa Rica",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "255",
      "2022": "254",
      "2023": "255",
      "2024": "254",
      "GeoAreaName": "Côte d'Ivoire",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "151",
      "2022": "151",
      "2023": "151",
      "2024": "151",
      "GeoAreaName": "Croatia",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "586",
      "2022": "586",
      "2023": "586",
      "2024": "470",
      "GeoAreaName": "Cuba",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "56",
      "2022": "56",
      "2023": "56",
      "2024": "56",
      "GeoAreaName": "Cyprus",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "200",
      "2022": "200",
      "2023": "200",
      "2024": "200",
      "GeoAreaName": "Czechia",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "687",
      "2022": "687",
      "2023": "687",
      "2024": "687",
      "GeoAreaName": "Democratic People's Republic of Korea",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "500",
      "2022": "500",
      "2023": "500",
      "2024": "477",
      "GeoAreaName": "Democratic Republic of the Congo",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "179",
      "2022": "179",
      "2023": "179",
      "2024": "179",
      "GeoAreaName": "Denmark",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "11052",
      "2022": "11099",
      "2023": "10868",
      "2024": "10857",
      "GeoAreaName": "Developed regions (Europe, Cyprus, Israel, Northern America, Japan, Australia & New Zealand)",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "27680",
      "2022": "27336",
      "2023": "26555",
      "2024": "26394",
      "GeoAreaName": "Developing regions",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "65",
      "2022": "65",
      "2023": "65",
      "2024": "65",
      "GeoAreaName": "Djibouti",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "32",
      "2022": "32",
      "2023": "32",
      "2024": "32",
      "GeoAreaName": "Dominica",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "190",
      "2022": "190",
      "2023": "190",
      "2024": "190",
      "GeoAreaName": "Dominican Republic",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "3891",
      "2022": "4010",
      "2023": "4016",
      "2024": "4012",
      "GeoAreaName": "Eastern Africa",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "7477",
      "2022": "7503",
      "2023": "7042",
      "2024": "7085",
      "GeoAreaName": "Eastern and South-Eastern Asia",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "4501",
      "2022": "4498",
      "2023": "4499",
      "2024": "4497",
      "GeoAreaName": "Eastern Asia",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "4037",
      "2022": "4033",
      "2023": "",
      "2024": "",
      "GeoAreaName": "Eastern Asia (excluding Japan)",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "2661",
      "2022": "2663",
      "2023": "2656",
      "2024": "2638",
      "GeoAreaName": "Eastern Europe",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "137",
      "2022": "137",
      "2023": "137",
      "2024": "137",
      "GeoAreaName": "Ecuador",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "591",
      "2022": "592",
      "2023": "592",
      "2024": "592",
      "GeoAreaName": "Egypt",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "84",
      "2022": "84",
      "2023": "84",
      "2024": "84",
      "GeoAreaName": "El Salvador",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "100",
      "2022": "100",
      "2023": "100",
      "2024": "100",
      "GeoAreaName": "Equatorial Guinea",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "",
      "2022": "NaN",
      "2023": "NaN",
      "2024": "NaN",
      "GeoAreaName": "Eritrea",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "101",
      "2022": "101",
      "2023": "101",
      "2024": "101",
      "GeoAreaName": "Estonia",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "73",
      "2022": "74",
      "2023": "74",
      "2024": "74",
      "GeoAreaName": "Eswatini",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "547",
      "2022": "470",
      "2023": "472",
      "2024": "472",
      "GeoAreaName": "Ethiopia",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "9372",
      "2022": "9416",
      "2023": "9189",
      "2024": "9174",
      "GeoAreaName": "Europe",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "10141",
      "2022": "10187",
      "2023": "9959",
      "2024": "9944",
      "GeoAreaName": "Europe and Northern America",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "51",
      "2022": "51",
      "2023": "55",
      "2024": "55",
      "GeoAreaName": "Fiji",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "200",
      "2022": "200",
      "2023": "200",
      "2024": "200",
      "GeoAreaName": "Finland",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "577",
      "2022": "577",
      "2023": "577",
      "2024": "577",
      "GeoAreaName": "France",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "142",
      "2022": "143",
      "2023": "143",
      "2024": "98",
      "GeoAreaName": "Gabon",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "58",
      "2022": "58",
      "2023": "58",
      "2024": "58",
      "GeoAreaName": "Gambia",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "150",
      "2022": "147",
      "2023": "141",
      "2024": "140",
      "GeoAreaName": "Georgia",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "709",
      "2022": "736",
      "2023": "736",
      "2024": "736",
      "GeoAreaName": "Germany",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "275",
      "2022": "275",
      "2023": "275",
      "2024": "275",
      "GeoAreaName": "Ghana",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "300",
      "2022": "300",
      "2023": "300",
      "2024": "300",
      "GeoAreaName": "Greece",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "15",
      "2022": "15",
      "2023": "16",
      "2024": "16",
      "GeoAreaName": "Grenada",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "160",
      "2022": "160",
      "2023": "160",
      "2024": "160",
      "GeoAreaName": "Guatemala",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "114",
      "2022": "81",
      "2023": "81",
      "2024": "81",
      "GeoAreaName": "Guinea",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "102",
      "2022": "102",
      "2023": "102",
      "2024": "102",
      "GeoAreaName": "Guinea-Bissau",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "70",
      "2022": "70",
      "2023": "71",
      "2024": "71",
      "GeoAreaName": "Guyana",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "0",
      "2022": "NaN",
      "2023": "NaN",
      "2024": "NaN",
      "GeoAreaName": "Haiti",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "128",
      "2022": "128",
      "2023": "128",
      "2024": "128",
      "GeoAreaName": "Honduras",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "199",
      "2022": "199",
      "2023": "199",
      "2024": "199",
      "GeoAreaName": "Hungary",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "63",
      "2022": "63",
      "2023": "63",
      "2024": "63",
      "GeoAreaName": "Iceland",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "540",
      "2022": "542",
      "2023": "542",
      "2024": "523",
      "GeoAreaName": "India",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "575",
      "2022": "575",
      "2023": "575",
      "2024": "575",
      "GeoAreaName": "Indonesia",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "286",
      "2022": "286",
      "2023": "286",
      "2024": "286",
      "GeoAreaName": "Iran (Islamic Republic of)",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "329",
      "2022": "329",
      "2023": "329",
      "2024": "325",
      "GeoAreaName": "Iraq",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "160",
      "2022": "160",
      "2023": "160",
      "2024": "160",
      "GeoAreaName": "Ireland",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "120",
      "2022": "120",
      "2023": "120",
      "2024": "120",
      "GeoAreaName": "Israel",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "630",
      "2022": "629",
      "2023": "400",
      "2024": "400",
      "GeoAreaName": "Italy",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "63",
      "2022": "63",
      "2023": "63",
      "2024": "62",
      "GeoAreaName": "Jamaica",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "464",
      "2022": "465",
      "2023": "462",
      "2024": "464",
      "GeoAreaName": "Japan",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "130",
      "2022": "130",
      "2023": "130",
      "2024": "130",
      "GeoAreaName": "Jordan",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "107",
      "2022": "106",
      "2023": "106",
      "2024": "98",
      "GeoAreaName": "Kazakhstan",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "347",
      "2022": "350",
      "2023": "348",
      "2024": "348",
      "GeoAreaName": "Kenya",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "45",
      "2022": "45",
      "2023": "45",
      "2024": "45",
      "GeoAreaName": "Kiribati",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "65",
      "2022": "62",
      "2023": "64",
      "2024": "65",
      "GeoAreaName": "Kuwait",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "117",
      "2022": "88",
      "2023": "90",
      "2024": "90",
      "GeoAreaName": "Kyrgyzstan",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "5294",
      "2022": "5281",
      "2023": "5117",
      "2024": "4931",
      "GeoAreaName": "Landlocked developing countries (LLDCs)",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "149",
      "2022": "164",
      "2023": "164",
      "2024": "164",
      "GeoAreaName": "Lao People's Democratic Republic",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "4153",
      "2022": "3983",
      "2023": "4004",
      "2024": "3889",
      "GeoAreaName": "Latin America and the Caribbean",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "100",
      "2022": "100",
      "2023": "100",
      "2024": "100",
      "GeoAreaName": "Latvia",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "7855",
      "2022": "7831",
      "2023": "7274",
      "2024": "7062",
      "GeoAreaName": "Least Developed Countries (LDCs)",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "128",
      "2022": "128",
      "2023": "128",
      "2024": "128",
      "GeoAreaName": "Lebanon",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "120",
      "2022": "115",
      "2023": "121",
      "2024": "120",
      "GeoAreaName": "Lesotho",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "73",
      "2022": "73",
      "2023": "73",
      "2024": "73",
      "GeoAreaName": "Liberia",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "188",
      "2022": "170",
      "2023": "170",
      "2024": "170",
      "GeoAreaName": "Libya",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "25",
      "2022": "25",
      "2023": "25",
      "2024": "25",
      "GeoAreaName": "Liechtenstein",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "141",
      "2022": "141",
      "2023": "141",
      "2024": "140",
      "GeoAreaName": "Lithuania",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "60",
      "2022": "60",
      "2023": "60",
      "2024": "60",
      "GeoAreaName": "Luxembourg",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "151",
      "2022": "151",
      "2023": "151",
      "2024": "151",
      "GeoAreaName": "Madagascar",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "192",
      "2022": "192",
      "2023": "193",
      "2024": "193",
      "GeoAreaName": "Malawi",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "222",
      "2022": "220",
      "2023": "222",
      "2024": "222",
      "GeoAreaName": "Malaysia",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "87",
      "2022": "87",
      "2023": "87",
      "2024": "80",
      "GeoAreaName": "Maldives",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "121",
      "2022": "121",
      "2023": "147",
      "2024": "147",
      "GeoAreaName": "Mali",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "67",
      "2022": "67",
      "2023": "79",
      "2024": "79",
      "GeoAreaName": "Malta",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "33",
      "2022": "33",
      "2023": "33",
      "2024": "33",
      "GeoAreaName": "Marshall Islands",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "153",
      "2022": "153",
      "2023": "153",
      "2024": "176",
      "GeoAreaName": "Mauritania",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "70",
      "2022": "70",
      "2023": "70",
      "2024": "70",
      "GeoAreaName": "Mauritius",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "264",
      "2022": "264",
      "2023": "272",
      "2024": "267",
      "GeoAreaName": "Melanesia",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "500",
      "2022": "500",
      "2023": "500",
      "2024": "500",
      "GeoAreaName": "Mexico",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "127",
      "2022": "127",
      "2023": "127",
      "2024": "126",
      "GeoAreaName": "Micronesia",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "14",
      "2022": "14",
      "2023": "14",
      "2024": "13",
      "GeoAreaName": "Micronesia (Federated States of)",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "1644",
      "2022": "1582",
      "2023": "1686",
      "2024": "1618",
      "GeoAreaName": "Middle Africa",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "24",
      "2022": "24",
      "2023": "22",
      "2024": "24",
      "GeoAreaName": "Monaco",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "75",
      "2022": "76",
      "2023": "76",
      "2024": "72",
      "GeoAreaName": "Mongolia",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "81",
      "2022": "81",
      "2023": "81",
      "2024": "81",
      "GeoAreaName": "Montenegro",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "395",
      "2022": "395",
      "2023": "395",
      "2024": "395",
      "GeoAreaName": "Morocco",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "250",
      "2022": "250",
      "2023": "250",
      "2024": "250",
      "GeoAreaName": "Mozambique",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "425",
      "2022": "425",
      "2023": "NaN",
      "2024": "NaN",
      "GeoAreaName": "Myanmar",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "104",
      "2022": "104",
      "2023": "104",
      "2024": "104",
      "GeoAreaName": "Namibia",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "19",
      "2022": "19",
      "2023": "19",
      "2024": "19",
      "GeoAreaName": "Nauru",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "275",
      "2022": "271",
      "2023": "275",
      "2024": "272",
      "GeoAreaName": "Nepal",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "150",
      "2022": "150",
      "2023": "150",
      "2024": "150",
      "GeoAreaName": "Netherlands (Kingdom of the)",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "120",
      "2022": "120",
      "2023": "120",
      "2024": "123",
      "GeoAreaName": "New Zealand",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "91",
      "2022": "91",
      "2023": "91",
      "2024": "91",
      "GeoAreaName": "Nicaragua",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "166",
      "2022": "166",
      "2023": "166",
      "2024": "NaN",
      "GeoAreaName": "Niger",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "360",
      "2022": "360",
      "2023": "360",
      "2024": "358",
      "GeoAreaName": "Nigeria",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "120",
      "2022": "120",
      "2023": "120",
      "2024": "120",
      "GeoAreaName": "North Macedonia",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "1853",
      "2022": "1781",
      "2023": "1564",
      "2024": "1717",
      "GeoAreaName": "Northern Africa",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "1853",
      "2022": "1781",
      "2023": "",
      "2024": "",
      "GeoAreaName": "Northern Africa (exc. Sudan)",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "4593",
      "2022": "4424",
      "2023": "4194",
      "2024": "4364",
      "GeoAreaName": "Northern Africa and Western Asia",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "769",
      "2022": "771",
      "2023": "770",
      "2024": "770",
      "GeoAreaName": "Northern America",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "2112",
      "2022": "2111",
      "2023": "2111",
      "2024": "2110",
      "GeoAreaName": "Northern Europe",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "169",
      "2022": "169",
      "2023": "169",
      "2024": "169",
      "GeoAreaName": "Norway",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "755",
      "2022": "756",
      "2023": "768",
      "2024": "764",
      "GeoAreaName": "Oceania",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "484",
      "2022": "485",
      "2023": "497",
      "2024": "491",
      "GeoAreaName": "Oceania (exc. Australia and New Zealand)",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "86",
      "2022": "86",
      "2023": "86",
      "2024": "90",
      "GeoAreaName": "Oman",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "342",
      "2022": "342",
      "2023": "342",
      "2024": "342",
      "GeoAreaName": "Pakistan",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "16",
      "2022": "16",
      "2023": "16",
      "2024": "16",
      "GeoAreaName": "Palau",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "71",
      "2022": "71",
      "2023": "71",
      "2024": "71",
      "GeoAreaName": "Panama",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "111",
      "2022": "111",
      "2023": "115",
      "2024": "111",
      "GeoAreaName": "Papua New Guinea",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "80",
      "2022": "80",
      "2023": "80",
      "2024": "80",
      "GeoAreaName": "Paraguay",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "130",
      "2022": "130",
      "2023": "129",
      "2024": "130",
      "GeoAreaName": "Peru",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "304",
      "2022": "307",
      "2023": "311",
      "2024": "311",
      "GeoAreaName": "Philippines",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "459",
      "2022": "460",
      "2023": "460",
      "2024": "460",
      "GeoAreaName": "Poland",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "93",
      "2022": "94",
      "2023": "98",
      "2024": "98",
      "GeoAreaName": "Polynesia",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "230",
      "2022": "230",
      "2023": "230",
      "2024": "230",
      "GeoAreaName": "Portugal",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "41",
      "2022": "45",
      "2023": "45",
      "2024": "45",
      "GeoAreaName": "Qatar",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "300",
      "2022": "295",
      "2023": "299",
      "2024": "297",
      "GeoAreaName": "Republic of Korea",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "101",
      "2022": "101",
      "2023": "101",
      "2024": "98",
      "GeoAreaName": "Republic of Moldova",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "329",
      "2022": "330",
      "2023": "330",
      "2024": "328",
      "GeoAreaName": "Romania",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "450",
      "2022": "450",
      "2023": "450",
      "2024": "450",
      "GeoAreaName": "Russian Federation",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "80",
      "2022": "80",
      "2023": "80",
      "2024": "80",
      "GeoAreaName": "Rwanda",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "16",
      "2022": "16",
      "2023": "16",
      "2024": "16",
      "GeoAreaName": "Saint Kitts and Nevis",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "18",
      "2022": "18",
      "2023": "18",
      "2024": "18",
      "GeoAreaName": "Saint Lucia",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "22",
      "2022": "22",
      "2023": "22",
      "2024": "23",
      "GeoAreaName": "Saint Vincent and the Grenadines",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "50",
      "2022": "51",
      "2023": "54",
      "2024": "54",
      "GeoAreaName": "Samoa",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "60",
      "2022": "60",
      "2023": "60",
      "2024": "60",
      "GeoAreaName": "San Marino",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "55",
      "2022": "55",
      "2023": "55",
      "2024": "55",
      "GeoAreaName": "Sao Tome and Principe",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "151",
      "2022": "151",
      "2023": "151",
      "2024": "151",
      "GeoAreaName": "Saudi Arabia",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "165",
      "2022": "164",
      "2023": "165",
      "2024": "165",
      "GeoAreaName": "Senegal",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "250",
      "2022": "250",
      "2023": "250",
      "2024": "250",
      "GeoAreaName": "Serbia",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "35",
      "2022": "35",
      "2023": "35",
      "2024": "34",
      "GeoAreaName": "Seychelles",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "146",
      "2022": "146",
      "2023": "146",
      "2024": "149",
      "GeoAreaName": "Sierra Leone",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "95",
      "2022": "103",
      "2023": "103",
      "2024": "99",
      "GeoAreaName": "Singapore",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "150",
      "2022": "150",
      "2023": "150",
      "2024": "150",
      "GeoAreaName": "Slovakia",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "90",
      "2022": "90",
      "2023": "90",
      "2024": "90",
      "GeoAreaName": "Slovenia",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "2313",
      "2022": "2322",
      "2023": "2336",
      "2024": "2202",
      "GeoAreaName": "Small island developing States (SIDS)",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "50",
      "2022": "50",
      "2023": "50",
      "2024": "50",
      "GeoAreaName": "Solomon Islands",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "275",
      "2022": "275",
      "2023": "274",
      "2024": "275",
      "GeoAreaName": "Somalia",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "399",
      "2022": "396",
      "2023": "400",
      "2024": "398",
      "GeoAreaName": "South Africa",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "1959",
      "2022": "1789",
      "2023": "1809",
      "2024": "1810",
      "GeoAreaName": "South America",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "383",
      "2022": "550",
      "2023": "550",
      "2024": "550",
      "GeoAreaName": "South Sudan",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "2976",
      "2022": "3005",
      "2023": "2543",
      "2024": "2588",
      "GeoAreaName": "South-Eastern Asia",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "761",
      "2022": "752",
      "2023": "762",
      "2024": "759",
      "GeoAreaName": "Southern Africa",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "2398",
      "2022": "2397",
      "2023": "2153",
      "2024": "2124",
      "GeoAreaName": "Southern Asia",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "2521",
      "2022": "2537",
      "2023": "2320",
      "2024": "2321",
      "GeoAreaName": "Southern Europe",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "350",
      "2022": "349",
      "2023": "349",
      "2024": "350",
      "GeoAreaName": "Spain",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "223",
      "2022": "225",
      "2023": "225",
      "2024": "225",
      "GeoAreaName": "Sri Lanka",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "8657",
      "2022": "8668",
      "2023": "8788",
      "2024": "8569",
      "GeoAreaName": "Sub-Saharan Africa",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "8657",
      "2022": "8668",
      "2023": "",
      "2024": "",
      "GeoAreaName": "Sub-Saharan Africa (inc. Sudan)",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "",
      "2022": "NaN",
      "2023": "NaN",
      "2024": "NaN",
      "GeoAreaName": "Sudan",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "51",
      "2022": "51",
      "2023": "51",
      "2024": "51",
      "GeoAreaName": "Suriname",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "349",
      "2022": "349",
      "2023": "349",
      "2024": "349",
      "GeoAreaName": "Sweden",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "200",
      "2022": "200",
      "2023": "199",
      "2024": "200",
      "GeoAreaName": "Switzerland",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "250",
      "2022": "250",
      "2023": "250",
      "2024": "250",
      "GeoAreaName": "Syrian Arab Republic",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "63",
      "2022": "63",
      "2023": "63",
      "2024": "63",
      "GeoAreaName": "Tajikistan",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "489",
      "2022": "489",
      "2023": "445",
      "2024": "500",
      "GeoAreaName": "Thailand",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "65",
      "2022": "65",
      "2023": "65",
      "2024": "65",
      "GeoAreaName": "Timor-Leste",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "91",
      "2022": "91",
      "2023": "91",
      "2024": "90",
      "GeoAreaName": "Togo",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "27",
      "2022": "27",
      "2023": "28",
      "2024": "28",
      "GeoAreaName": "Tonga",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "42",
      "2022": "42",
      "2023": "42",
      "2024": "42",
      "GeoAreaName": "Trinidad and Tobago",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "217",
      "2022": "217",
      "2023": "NaN",
      "2024": "153",
      "GeoAreaName": "Tunisia",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "600",
      "2022": "582",
      "2023": "580",
      "2024": "599",
      "GeoAreaName": "Türkiye",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "124",
      "2022": "116",
      "2023": "116",
      "2024": "125",
      "GeoAreaName": "Turkmenistan",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "16",
      "2022": "16",
      "2023": "16",
      "2024": "16",
      "GeoAreaName": "Tuvalu",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "528",
      "2022": "556",
      "2023": "556",
      "2024": "557",
      "GeoAreaName": "Uganda",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "423",
      "2022": "423",
      "2023": "416",
      "2024": "403",
      "GeoAreaName": "Ukraine",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "40",
      "2022": "40",
      "2023": "40",
      "2024": "40",
      "GeoAreaName": "United Arab Emirates",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "650",
      "2022": "649",
      "2023": "649",
      "2024": "649",
      "GeoAreaName": "United Kingdom of Great Britain and Northern Ireland",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "384",
      "2022": "388",
      "2023": "393",
      "2024": "393",
      "GeoAreaName": "United Republic of Tanzania",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "431",
      "2022": "433",
      "2023": "434",
      "2024": "433",
      "GeoAreaName": "United States of America",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "99",
      "2022": "99",
      "2023": "99",
      "2024": "99",
      "GeoAreaName": "Uruguay",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "147",
      "2022": "144",
      "2023": "140",
      "2024": "136",
      "GeoAreaName": "Uzbekistan",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "52",
      "2022": "52",
      "2023": "52",
      "2024": "51",
      "GeoAreaName": "Vanuatu",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "167",
      "2022": "NaN",
      "2023": "NaN",
      "2024": "NaN",
      "GeoAreaName": "Venezuela (Bolivarian Republic of)",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "494",
      "2022": "499",
      "2023": "499",
      "2024": "493",
      "GeoAreaName": "Viet Nam",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "2361",
      "2022": "2324",
      "2023": "2324",
      "2024": "2180",
      "GeoAreaName": "Western Africa",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "2740",
      "2022": "2643",
      "2023": "2630",
      "2024": "2647",
      "GeoAreaName": "Western Asia",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "2161",
      "2022": "2093",
      "2023": "",
      "2024": "",
      "GeoAreaName": "Western Asia (exc. Armenia, Azerbaijan, Cyprus, Israel and Georgia)",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "2078",
      "2022": "2105",
      "2023": "2102",
      "2024": "2105",
      "GeoAreaName": "Western Europe",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "38732",
      "2022": "38435",
      "2023": "37423",
      "2024": "37251",
      "GeoAreaName": "World",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "301",
      "2022": "250",
      "2023": "245",
      "2024": "245",
      "GeoAreaName": "Yemen",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "167",
      "2022": "166",
      "2023": "167",
      "2024": "167",
      "GeoAreaName": "Zambia",
      "Sex": "BOTHSEX"
    },
    {
      "2021": "270",
      "2022": "265",
      "2023": "265",
      "2024": "260",
      "GeoAreaName": "Zimbabwe",
      "Sex": "BOTHSEX"
    }
  ]
};

export const numberOfSeatsHeldByWomenInNationalParliaments = {
  "title": "Number of seats held by women in national parliaments",
  "description": "This table provides data on the number of parliamentary seats occupied by women across various countries. Women's representation in national parliaments is a key factor in promoting gender-sensitive legislation, particularly in areas related to climate change and disaster management. A higher number of seats held by women can lead to more inclusive policymaking that addresses the specific needs of women and marginalized groups in the face of climate-related challenges. In contrast, countries where women hold fewer seats may lack the gender diversity needed to fully integrate social equity into national climate adaptation and resilience strategies. This data is critical for understanding the intersection of political representation, gender inequality, and environmental sustainability.",
  "category": "Parliament Representation",
  "type": "country-data",
  "data": [
    {
      "2018": "69",
      "2019": "",
      "2020": "67",
      "2021": "67",
      "2022": "67",
      "2023": "NaN",
      "2024": "NaN",
      "GeoAreaName": "Afghanistan"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "2591",
      "2022": "2626",
      "2023": "2638",
      "2024": "2670",
      "GeoAreaName": "Africa"
    },
    {
      "2018": "39",
      "2019": "41",
      "2020": "36",
      "2021": "36",
      "2022": "50",
      "2023": "50",
      "2024": "50",
      "GeoAreaName": "Albania"
    },
    {
      "2018": "119",
      "2019": "119",
      "2020": "119",
      "2021": "120",
      "2022": "33",
      "2023": "32",
      "2024": "32",
      "GeoAreaName": "Algeria"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "",
      "2021": "1587",
      "2022": "1613",
      "2023": "1666",
      "2024": "1621",
      "GeoAreaName": "Americas"
    },
    {
      "2018": "9",
      "2019": "9",
      "2020": "13",
      "2021": "13",
      "2022": "13",
      "2023": "13",
      "2024": "14",
      "GeoAreaName": "Andorra"
    },
    {
      "2018": "67",
      "2019": "66",
      "2020": "66",
      "2021": "65",
      "2022": "65",
      "2023": "74",
      "2024": "85",
      "GeoAreaName": "Angola"
    },
    {
      "2018": "2",
      "2019": "2",
      "2020": "2",
      "2021": "2",
      "2022": "2",
      "2023": "2",
      "2024": "1",
      "GeoAreaName": "Antigua and Barbuda"
    },
    {
      "2018": "100",
      "2019": "99",
      "2020": "105",
      "2021": "109",
      "2022": "115",
      "2023": "115",
      "2024": "109",
      "GeoAreaName": "Argentina"
    },
    {
      "2018": "19",
      "2019": "32",
      "2020": "31",
      "2021": "30",
      "2022": "37",
      "2023": "38",
      "2024": "39",
      "GeoAreaName": "Armenia"
    },
    {
      "2018": "2268",
      "2019": "2372",
      "2020": "2570",
      "2021": "2606",
      "2022": "2636",
      "2023": "2497",
      "2024": "2565",
      "GeoAreaName": "Asia"
    },
    {
      "2018": "43",
      "2019": "45",
      "2020": "46",
      "2021": "47",
      "2022": "47",
      "2023": "58",
      "2024": "57",
      "GeoAreaName": "Australia"
    },
    {
      "2018": "89",
      "2019": "93",
      "2020": "95",
      "2021": "105",
      "2022": "106",
      "2023": "118",
      "2024": "113",
      "GeoAreaName": "Australia and New Zealand"
    },
    {
      "2018": "63",
      "2019": "68",
      "2020": "72",
      "2021": "73",
      "2022": "76",
      "2023": "74",
      "2024": "75",
      "GeoAreaName": "Austria"
    },
    {
      "2018": "21",
      "2019": "20",
      "2020": "20",
      "2021": "22",
      "2022": "22",
      "2023": "22",
      "2024": "21",
      "GeoAreaName": "Azerbaijan"
    },
    {
      "2018": "5",
      "2019": "5",
      "2020": "5",
      "2021": "5",
      "2022": "7",
      "2023": "7",
      "2024": "7",
      "GeoAreaName": "Bahamas"
    },
    {
      "2018": "3",
      "2019": "6",
      "2020": "6",
      "2021": "6",
      "2022": "6",
      "2023": "8",
      "2024": "8",
      "GeoAreaName": "Bahrain"
    },
    {
      "2018": "71",
      "2019": "72",
      "2020": "73",
      "2021": "73",
      "2022": "73",
      "2023": "73",
      "2024": "73",
      "GeoAreaName": "Bangladesh"
    },
    {
      "2018": "5",
      "2019": "6",
      "2020": "6",
      "2021": "6",
      "2022": "6",
      "2023": "8",
      "2024": "8",
      "GeoAreaName": "Barbados"
    },
    {
      "2018": "38",
      "2019": "38",
      "2020": "44",
      "2021": "44",
      "2022": "44",
      "2023": "44",
      "2024": "44",
      "GeoAreaName": "Belarus"
    },
    {
      "2018": "57",
      "2019": "57",
      "2020": "61",
      "2021": "63",
      "2022": "63",
      "2023": "64",
      "2024": "64",
      "GeoAreaName": "Belgium"
    },
    {
      "2018": "3",
      "2019": "3",
      "2020": "3",
      "2021": "4",
      "2022": "4",
      "2023": "5",
      "2024": "5",
      "GeoAreaName": "Belize"
    },
    {
      "2018": "6",
      "2019": "6",
      "2020": "6",
      "2021": "7",
      "2022": "6",
      "2023": "6",
      "2024": "29",
      "GeoAreaName": "Benin"
    },
    {
      "2018": "4",
      "2019": "7",
      "2020": "7",
      "2021": "7",
      "2022": "8",
      "2023": "8",
      "2024": "8",
      "GeoAreaName": "Bhutan"
    },
    {
      "2018": "69",
      "2019": "69",
      "2020": "69",
      "2021": "60",
      "2022": "60",
      "2023": "60",
      "2024": "60",
      "GeoAreaName": "Bolivia (Plurinational State of)"
    },
    {
      "2018": "9",
      "2019": "9",
      "2020": "9",
      "2021": "11",
      "2022": "11",
      "2023": "8",
      "2024": "8",
      "GeoAreaName": "Bosnia and Herzegovina"
    },
    {
      "2018": "6",
      "2019": "6",
      "2020": "7",
      "2021": "7",
      "2022": "7",
      "2023": "7",
      "2024": "7",
      "GeoAreaName": "Botswana"
    },
    {
      "2018": "55",
      "2019": "77",
      "2020": "75",
      "2021": "78",
      "2022": "76",
      "2023": "91",
      "2024": "90",
      "GeoAreaName": "Brazil"
    },
    {
      "2018": "3",
      "2019": "3",
      "2020": "3",
      "2021": "3",
      "2022": "3",
      "2023": "3",
      "2024": "4",
      "GeoAreaName": "Brunei Darussalam"
    },
    {
      "2018": "57",
      "2019": "62",
      "2020": "64",
      "2021": "65",
      "2022": "54",
      "2023": "58",
      "2024": "61",
      "GeoAreaName": "Bulgaria"
    },
    {
      "2018": "14",
      "2019": "17",
      "2020": "17",
      "2021": "8",
      "2022": "8",
      "2023": "12",
      "2024": "12",
      "GeoAreaName": "Burkina Faso"
    },
    {
      "2018": "44",
      "2019": "44",
      "2020": "44",
      "2021": "47",
      "2022": "47",
      "2023": "47",
      "2024": "47",
      "GeoAreaName": "Burundi"
    },
    {
      "2018": "17",
      "2019": "17",
      "2020": "18",
      "2021": "19",
      "2022": "28",
      "2023": "30",
      "2024": "28",
      "GeoAreaName": "Cabo Verde"
    },
    {
      "2018": "25",
      "2019": "25",
      "2020": "25",
      "2021": "27",
      "2022": "26",
      "2023": "26",
      "2024": "17",
      "GeoAreaName": "Cambodia"
    },
    {
      "2018": "56",
      "2019": "56",
      "2020": "56",
      "2021": "61",
      "2022": "61",
      "2023": "61",
      "2024": "61",
      "GeoAreaName": "Cameroon"
    },
    {
      "2018": "91",
      "2019": "90",
      "2020": "98",
      "2021": "100",
      "2022": "103",
      "2023": "103",
      "2024": "103",
      "GeoAreaName": "Canada"
    },
    {
      "2018": "410",
      "2019": "436",
      "2020": "439",
      "2021": "437",
      "2022": "438",
      "2023": "441",
      "2024": "389",
      "GeoAreaName": "Caribbean"
    },
    {
      "2018": "184",
      "2019": "193",
      "2020": "",
      "2021": "226",
      "2022": "229",
      "2023": "",
      "2024": "",
      "GeoAreaName": "Caucasus and Central Asia"
    },
    {
      "2018": "12",
      "2019": "12",
      "2020": "12",
      "2021": "12",
      "2022": "18",
      "2023": "18",
      "2024": "16",
      "GeoAreaName": "Central African Republic"
    },
    {
      "2018": "365",
      "2019": "407",
      "2020": "414",
      "2021": "417",
      "2022": "431",
      "2023": "434",
      "2024": "438",
      "GeoAreaName": "Central America"
    },
    {
      "2018": "439",
      "2019": "456",
      "2020": "560",
      "2021": "559",
      "2022": "564",
      "2023": "497",
      "2024": "484",
      "GeoAreaName": "Central and Southern Asia"
    },
    {
      "2018": "120",
      "2019": "119",
      "2020": "143",
      "2021": "143",
      "2022": "142",
      "2023": "141",
      "2024": "134",
      "GeoAreaName": "Central Asia"
    },
    {
      "2018": "24",
      "2019": "25",
      "2020": "25",
      "2021": "24",
      "2022": "29",
      "2023": "51",
      "2024": "52",
      "GeoAreaName": "Chad"
    },
    {
      "2018": "",
      "2019": "35",
      "2020": "35",
      "2021": "35",
      "2022": "55",
      "2023": "55",
      "2024": "55",
      "GeoAreaName": "Chile"
    },
    {
      "2018": "709",
      "2019": "742",
      "2020": "742",
      "2021": "742",
      "2022": "742",
      "2023": "742",
      "2024": "790",
      "GeoAreaName": "China"
    },
    {
      "2018": "31",
      "2019": "32",
      "2020": "31",
      "2021": "32",
      "2022": "31",
      "2023": "54",
      "2024": "54",
      "GeoAreaName": "Colombia"
    },
    {
      "2018": "2",
      "2019": "2",
      "2020": "2",
      "2021": "4",
      "2022": "4",
      "2023": "4",
      "2024": "4",
      "GeoAreaName": "Comoros"
    },
    {
      "2018": "17",
      "2019": "17",
      "2020": "17",
      "2021": "17",
      "2022": "17",
      "2023": "22",
      "2024": "22",
      "GeoAreaName": "Congo"
    },
    {
      "2018": "20",
      "2019": "26",
      "2020": "26",
      "2021": "26",
      "2022": "26",
      "2023": "27",
      "2024": "27",
      "GeoAreaName": "Costa Rica"
    },
    {
      "2018": "27",
      "2019": "28",
      "2020": "30",
      "2021": "29",
      "2022": "36",
      "2023": "35",
      "2024": "34",
      "GeoAreaName": "Côte d'Ivoire"
    },
    {
      "2018": "28",
      "2019": "31",
      "2020": "29",
      "2021": "47",
      "2022": "48",
      "2023": "48",
      "2024": "51",
      "GeoAreaName": "Croatia"
    },
    {
      "2018": "299",
      "2019": "322",
      "2020": "322",
      "2021": "313",
      "2022": "313",
      "2023": "313",
      "2024": "262",
      "GeoAreaName": "Cuba"
    },
    {
      "2018": "10",
      "2019": "10",
      "2020": "11",
      "2021": "12",
      "2022": "8",
      "2023": "8",
      "2024": "8",
      "GeoAreaName": "Cyprus"
    },
    {
      "2018": "44",
      "2019": "45",
      "2020": "45",
      "2021": "46",
      "2022": "51",
      "2023": "52",
      "2024": "52",
      "GeoAreaName": "Czechia"
    },
    {
      "2018": "112",
      "2019": "112",
      "2020": "121",
      "2021": "121",
      "2022": "121",
      "2023": "121",
      "2024": "121",
      "GeoAreaName": "Democratic People's Republic of Korea"
    },
    {
      "2018": "44",
      "2019": "50",
      "2020": "64",
      "2021": "64",
      "2022": "64",
      "2023": "64",
      "2024": "61",
      "GeoAreaName": "Democratic Republic of the Congo"
    },
    {
      "2018": "67",
      "2019": "67",
      "2020": "71",
      "2021": "71",
      "2022": "71",
      "2023": "78",
      "2024": "81",
      "GeoAreaName": "Denmark"
    },
    {
      "2018": "3065",
      "2019": "3174",
      "2020": "3324",
      "2021": "3393",
      "2022": "3487",
      "2023": "3405",
      "2024": "3443",
      "GeoAreaName": "Developed regions (Europe, Cyprus, Israel, Northern America, Japan, Australia & New Zealand)"
    },
    {
      "2018": "",
      "2019": "",
      "2020": "6358",
      "2021": "6507",
      "2022": "6592",
      "2023": "6519",
      "2024": "6576",
      "GeoAreaName": "Developing regions"
    },
    {
      "2018": "7",
      "2019": "17",
      "2020": "17",
      "2021": "17",
      "2022": "17",
      "2023": "17",
      "2024": "17",
      "GeoAreaName": "Djibouti"
    },
    {
      "2018": "8",
      "2019": "8",
      "2020": "8",
      "2021": "11",
      "2022": "11",
      "2023": "12",
      "2024": "12",
      "GeoAreaName": "Dominica"
    },
    {
      "2018": "51",
      "2019": "51",
      "2020": "53",
      "2021": "53",
      "2022": "53",
      "2023": "53",
      "2024": "53",
      "GeoAreaName": "Dominican Republic"
    },
    {
      "2018": "1186",
      "2019": "1205",
      "2020": "1187",
      "2021": "1194",
      "2022": "1269",
      "2023": "1264",
      "2024": "1258",
      "GeoAreaName": "Eastern Africa"
    },
    {
      "2018": "1453",
      "2019": "1497",
      "2020": "1586",
      "2021": "1616",
      "2022": "1634",
      "2023": "1564",
      "2024": "1629",
      "GeoAreaName": "Eastern and South-Eastern Asia"
    },
    {
      "2018": "932",
      "2019": "965",
      "2020": "973",
      "2021": "979",
      "2022": "976",
      "2023": "979",
      "2024": "1029",
      "GeoAreaName": "Eastern Asia"
    },
    {
      "2018": "885",
      "2019": "918",
      "2020": "",
      "2021": "933",
      "2022": "931",
      "2023": "",
      "2024": "",
      "GeoAreaName": "Eastern Asia (excluding Japan)"
    },
    {
      "2018": "532",
      "2019": "545",
      "2020": "596",
      "2021": "589",
      "2022": "600",
      "2023": "604",
      "2024": "618",
      "GeoAreaName": "Eastern Europe"
    },
    {
      "2018": "52",
      "2019": "52",
      "2020": "54",
      "2021": "54",
      "2022": "53",
      "2023": "53",
      "2024": "59",
      "GeoAreaName": "Ecuador"
    },
    {
      "2018": "89",
      "2019": "89",
      "2020": "90",
      "2021": "162",
      "2022": "164",
      "2023": "163",
      "2024": "164",
      "GeoAreaName": "Egypt"
    },
    {
      "2018": "27",
      "2019": "26",
      "2020": "28",
      "2021": "28",
      "2022": "23",
      "2023": "23",
      "2024": "23",
      "GeoAreaName": "El Salvador"
    },
    {
      "2018": "20",
      "2019": "20",
      "2020": "21",
      "2021": "23",
      "2022": "22",
      "2023": "31",
      "2024": "32",
      "GeoAreaName": "Equatorial Guinea"
    },
    {
      "2018": "33",
      "2019": "33",
      "2020": "",
      "2021": "NaN",
      "2022": "NaN",
      "2023": "NaN",
      "2024": "NaN",
      "GeoAreaName": "Eritrea"
    },
    {
      "2018": "27",
      "2019": "29",
      "2020": "29",
      "2021": "28",
      "2022": "26",
      "2023": "28",
      "2024": "30",
      "GeoAreaName": "Estonia"
    },
    {
      "2018": "4",
      "2019": "5",
      "2020": "7",
      "2021": "7",
      "2022": "9",
      "2023": "11",
      "2024": "16",
      "GeoAreaName": "Eswatini"
    },
    {
      "2018": "212",
      "2019": "212",
      "2020": "212",
      "2021": "212",
      "2022": "195",
      "2023": "195",
      "2024": "195",
      "GeoAreaName": "Ethiopia"
    },
    {
      "2018": "2711",
      "2019": "2797",
      "2020": "2945",
      "2021": "2980",
      "2022": "3069",
      "2023": "2973",
      "2024": "3015",
      "GeoAreaName": "Europe"
    },
    {
      "2018": "2886",
      "2019": "2989",
      "2020": "3144",
      "2021": "3198",
      "2022": "3292",
      "2023": "3204",
      "2024": "3244",
      "GeoAreaName": "Europe and Northern America"
    },
    {
      "2018": "8",
      "2019": "10",
      "2020": "10",
      "2021": "11",
      "2022": "10",
      "2023": "6",
      "2024": "5",
      "GeoAreaName": "Fiji"
    },
    {
      "2018": "84",
      "2019": "83",
      "2020": "92",
      "2021": "92",
      "2022": "91",
      "2023": "91",
      "2024": "92",
      "GeoAreaName": "Finland"
    },
    {
      "2018": "225",
      "2019": "229",
      "2020": "228",
      "2021": "228",
      "2022": "228",
      "2023": "218",
      "2024": "215",
      "GeoAreaName": "France"
    },
    {
      "2018": "20",
      "2019": "24",
      "2020": "21",
      "2021": "23",
      "2022": "22",
      "2023": "21",
      "2024": "25",
      "GeoAreaName": "Gabon"
    },
    {
      "2018": "6",
      "2019": "6",
      "2020": "5",
      "2021": "5",
      "2022": "6",
      "2023": "5",
      "2024": "5",
      "GeoAreaName": "Gambia"
    },
    {
      "2018": "24",
      "2019": "22",
      "2020": "21",
      "2021": "31",
      "2022": "28",
      "2023": "26",
      "2024": "27",
      "GeoAreaName": "Georgia"
    },
    {
      "2018": "218",
      "2019": "219",
      "2020": "221",
      "2021": "223",
      "2022": "257",
      "2023": "258",
      "2024": "260",
      "GeoAreaName": "Germany"
    },
    {
      "2018": "35",
      "2019": "36",
      "2020": "36",
      "2021": "40",
      "2022": "40",
      "2023": "40",
      "2024": "40",
      "GeoAreaName": "Ghana"
    },
    {
      "2018": "55",
      "2019": "56",
      "2020": "62",
      "2021": "65",
      "2022": "63",
      "2023": "63",
      "2024": "69",
      "GeoAreaName": "Greece"
    },
    {
      "2018": "5",
      "2019": "7",
      "2020": "7",
      "2021": "7",
      "2022": "7",
      "2023": "5",
      "2024": "5",
      "GeoAreaName": "Grenada"
    },
    {
      "2018": "20",
      "2019": "30",
      "2020": "30",
      "2021": "31",
      "2022": "31",
      "2023": "31",
      "2024": "31",
      "GeoAreaName": "Guatemala"
    },
    {
      "2018": "25",
      "2019": "26",
      "2020": "26",
      "2021": "19",
      "2022": "24",
      "2023": "24",
      "2024": "24",
      "GeoAreaName": "Guinea"
    },
    {
      "2018": "14",
      "2019": "14",
      "2020": "14",
      "2021": "14",
      "2022": "14",
      "2023": "14",
      "2024": "10",
      "GeoAreaName": "Guinea-Bissau"
    },
    {
      "2018": "22",
      "2019": "22",
      "2020": "24",
      "2021": "25",
      "2022": "25",
      "2023": "26",
      "2024": "28",
      "GeoAreaName": "Guyana"
    },
    {
      "2018": "3",
      "2019": "3",
      "2020": "3",
      "2021": "NaN",
      "2022": "NaN",
      "2023": "NaN",
      "2024": "NaN",
      "GeoAreaName": "Haiti"
    },
    {
      "2018": "27",
      "2019": "27",
      "2020": "27",
      "2021": "27",
      "2022": "35",
      "2023": "35",
      "2024": "35",
      "GeoAreaName": "Honduras"
    },
    {
      "2018": "20",
      "2019": "25",
      "2020": "24",
      "2021": "25",
      "2022": "26",
      "2023": "26",
      "2024": "29",
      "GeoAreaName": "Hungary"
    },
    {
      "2018": "24",
      "2019": "24",
      "2020": "24",
      "2021": "25",
      "2022": "30",
      "2023": "30",
      "2024": "30",
      "GeoAreaName": "Iceland"
    },
    {
      "2018": "64",
      "2019": "66",
      "2020": "78",
      "2021": "78",
      "2022": "81",
      "2023": "82",
      "2024": "77",
      "GeoAreaName": "India"
    },
    {
      "2018": "111",
      "2019": "102",
      "2020": "117",
      "2021": "121",
      "2022": "126",
      "2023": "124",
      "2024": "126",
      "GeoAreaName": "Indonesia"
    },
    {
      "2018": "17",
      "2019": "17",
      "2020": "17",
      "2021": "16",
      "2022": "16",
      "2023": "16",
      "2024": "16",
      "GeoAreaName": "Iran (Islamic Republic of)"
    },
    {
      "2018": "83",
      "2019": "83",
      "2020": "87",
      "2021": "87",
      "2022": "95",
      "2023": "95",
      "2024": "95",
      "GeoAreaName": "Iraq"
    },
    {
      "2018": "35",
      "2019": "35",
      "2020": "33",
      "2021": "36",
      "2022": "37",
      "2023": "37",
      "2024": "37",
      "GeoAreaName": "Ireland"
    },
    {
      "2018": "33",
      "2019": "35",
      "2020": "28",
      "2021": "32",
      "2022": "36",
      "2023": "29",
      "2024": "30",
      "GeoAreaName": "Israel"
    },
    {
      "2018": "195",
      "2019": "225",
      "2020": "225",
      "2021": "225",
      "2022": "228",
      "2023": "129",
      "2024": "129",
      "GeoAreaName": "Italy"
    },
    {
      "2018": "11",
      "2019": "11",
      "2020": "11",
      "2021": "18",
      "2022": "18",
      "2023": "18",
      "2024": "17",
      "GeoAreaName": "Jamaica"
    },
    {
      "2018": "47",
      "2019": "47",
      "2020": "46",
      "2021": "46",
      "2022": "45",
      "2023": "46",
      "2024": "48",
      "GeoAreaName": "Japan"
    },
    {
      "2018": "20",
      "2019": "20",
      "2020": "20",
      "2021": "15",
      "2022": "16",
      "2023": "16",
      "2024": "17",
      "GeoAreaName": "Jordan"
    },
    {
      "2018": "29",
      "2019": "29",
      "2020": "29",
      "2021": "29",
      "2022": "29",
      "2023": "29",
      "2024": "19",
      "GeoAreaName": "Kazakhstan"
    },
    {
      "2018": "76",
      "2019": "76",
      "2020": "76",
      "2021": "75",
      "2022": "75",
      "2023": "81",
      "2024": "81",
      "GeoAreaName": "Kenya"
    },
    {
      "2018": "3",
      "2019": "3",
      "2020": "3",
      "2021": "3",
      "2022": "3",
      "2023": "3",
      "2024": "3",
      "GeoAreaName": "Kiribati"
    },
    {
      "2018": "2",
      "2019": "3",
      "2020": "4",
      "2021": "1",
      "2022": "1",
      "2023": "4",
      "2024": "2",
      "GeoAreaName": "Kuwait"
    },
    {
      "2018": "23",
      "2019": "23",
      "2020": "23",
      "2021": "20",
      "2022": "18",
      "2023": "18",
      "2024": "19",
      "GeoAreaName": "Kyrgyzstan"
    },
    {
      "2018": "1283",
      "2019": "1329",
      "2020": "1438",
      "2021": "1454",
      "2022": "1562",
      "2023": "1540",
      "2024": "1484",
      "GeoAreaName": "Landlocked developing countries (LLDCs)"
    },
    {
      "2018": "41",
      "2019": "41",
      "2020": "41",
      "2021": "41",
      "2022": "36",
      "2023": "36",
      "2024": "36",
      "GeoAreaName": "Lao People's Democratic Republic"
    },
    {
      "2018": "1221",
      "2019": "1354",
      "2020": "1372",
      "2021": "1369",
      "2022": "1390",
      "2023": "1435",
      "2024": "1392",
      "GeoAreaName": "Latin America and the Caribbean"
    },
    {
      "2018": "16",
      "2019": "31",
      "2020": "30",
      "2021": "29",
      "2022": "27",
      "2023": "29",
      "2024": "32",
      "GeoAreaName": "Latvia"
    },
    {
      "2018": "1886",
      "2019": "1922",
      "2020": "1851",
      "2021": "1895",
      "2022": "1985",
      "2023": "1901",
      "2024": "1890",
      "GeoAreaName": "Least Developed Countries (LDCs)"
    },
    {
      "2018": "4",
      "2019": "6",
      "2020": "6",
      "2021": "6",
      "2022": "6",
      "2023": "8",
      "2024": "8",
      "GeoAreaName": "Lebanon"
    },
    {
      "2018": "27",
      "2019": "28",
      "2020": "28",
      "2021": "28",
      "2022": "28",
      "2023": "32",
      "2024": "30",
      "GeoAreaName": "Lesotho"
    },
    {
      "2018": "7",
      "2019": "9",
      "2020": "9",
      "2021": "8",
      "2022": "8",
      "2023": "8",
      "2024": "8",
      "GeoAreaName": "Liberia"
    },
    {
      "2018": "30",
      "2019": "30",
      "2020": "30",
      "2021": "30",
      "2022": "28",
      "2023": "28",
      "2024": "28",
      "GeoAreaName": "Libya"
    },
    {
      "2018": "3",
      "2019": "3",
      "2020": "3",
      "2021": "3",
      "2022": "7",
      "2023": "7",
      "2024": "7",
      "GeoAreaName": "Liechtenstein"
    },
    {
      "2018": "30",
      "2019": "30",
      "2020": "34",
      "2021": "39",
      "2022": "40",
      "2023": "40",
      "2024": "41",
      "GeoAreaName": "Lithuania"
    },
    {
      "2018": "17",
      "2019": "15",
      "2020": "18",
      "2021": "19",
      "2022": "20",
      "2023": "21",
      "2024": "20",
      "GeoAreaName": "Luxembourg"
    },
    {
      "2018": "29",
      "2019": "29",
      "2020": "24",
      "2021": "27",
      "2022": "28",
      "2023": "28",
      "2024": "28",
      "GeoAreaName": "Madagascar"
    },
    {
      "2018": "32",
      "2019": "32",
      "2020": "44",
      "2021": "44",
      "2022": "44",
      "2023": "40",
      "2024": "40",
      "GeoAreaName": "Malawi"
    },
    {
      "2018": "23",
      "2019": "32",
      "2020": "32",
      "2021": "33",
      "2022": "33",
      "2023": "30",
      "2024": "30",
      "GeoAreaName": "Malaysia"
    },
    {
      "2018": "5",
      "2019": "4",
      "2020": "4",
      "2021": "4",
      "2022": "4",
      "2023": "4",
      "2024": "4",
      "GeoAreaName": "Maldives"
    },
    {
      "2018": "13",
      "2019": "13",
      "2020": "14",
      "2021": "33",
      "2022": "32",
      "2023": "42",
      "2024": "42",
      "GeoAreaName": "Mali"
    },
    {
      "2018": "8",
      "2019": "8",
      "2020": "9",
      "2021": "9",
      "2022": "9",
      "2023": "22",
      "2024": "22",
      "GeoAreaName": "Malta"
    },
    {
      "2018": "3",
      "2019": "3",
      "2020": "2",
      "2021": "2",
      "2022": "2",
      "2023": "2",
      "2024": "4",
      "GeoAreaName": "Marshall Islands"
    },
    {
      "2018": "37",
      "2019": "31",
      "2020": "31",
      "2021": "31",
      "2022": "31",
      "2023": "31",
      "2024": "41",
      "GeoAreaName": "Mauritania"
    },
    {
      "2018": "8",
      "2019": "8",
      "2020": "14",
      "2021": "14",
      "2022": "14",
      "2023": "14",
      "2024": "14",
      "GeoAreaName": "Mauritius"
    },
    {
      "2018": "9",
      "2019": "11",
      "2020": "13",
      "2021": "15",
      "2022": "14",
      "2023": "13",
      "2024": "13",
      "GeoAreaName": "Melanesia"
    },
    {
      "2018": "213",
      "2019": "241",
      "2020": "241",
      "2021": "241",
      "2022": "250",
      "2023": "250",
      "2024": "252",
      "GeoAreaName": "Mexico"
    },
    {
      "2018": "10",
      "2019": "10",
      "2020": "9",
      "2021": "8",
      "2022": "9",
      "2023": "9",
      "2024": "12",
      "GeoAreaName": "Micronesia"
    },
    {
      "2018": "0",
      "2019": "0",
      "2020": "0",
      "2021": "0",
      "2022": "1",
      "2023": "1",
      "2024": "2",
      "GeoAreaName": "Micronesia (Federated States of)"
    },
    {
      "2018": "270",
      "2019": "278",
      "2020": "290",
      "2021": "302",
      "2022": "311",
      "2023": "350",
      "2024": "362",
      "GeoAreaName": "Middle Africa"
    },
    {
      "2018": "5",
      "2019": "8",
      "2020": "8",
      "2021": "8",
      "2022": "8",
      "2023": "8",
      "2024": "11",
      "GeoAreaName": "Monaco"
    },
    {
      "2018": "13",
      "2019": "13",
      "2020": "13",
      "2021": "13",
      "2022": "13",
      "2023": "13",
      "2024": "13",
      "GeoAreaName": "Mongolia"
    },
    {
      "2018": "19",
      "2019": "19",
      "2020": "24",
      "2021": "20",
      "2022": "22",
      "2023": "23",
      "2024": "22",
      "GeoAreaName": "Montenegro"
    },
    {
      "2018": "81",
      "2019": "81",
      "2020": "81",
      "2021": "81",
      "2022": "95",
      "2023": "96",
      "2024": "96",
      "GeoAreaName": "Morocco"
    },
    {
      "2018": "99",
      "2019": "99",
      "2020": "103",
      "2021": "106",
      "2022": "106",
      "2023": "108",
      "2024": "108",
      "GeoAreaName": "Mozambique"
    },
    {
      "2018": "44",
      "2019": "49",
      "2020": "48",
      "2021": "65",
      "2022": "65",
      "2023": "NaN",
      "2024": "NaN",
      "GeoAreaName": "Myanmar"
    },
    {
      "2018": "48",
      "2019": "48",
      "2020": "41",
      "2021": "46",
      "2022": "46",
      "2023": "46",
      "2024": "46",
      "GeoAreaName": "Namibia"
    },
    {
      "2018": "2",
      "2019": "2",
      "2020": "2",
      "2021": "2",
      "2022": "2",
      "2023": "2",
      "2024": "2",
      "GeoAreaName": "Nauru"
    },
    {
      "2018": "90",
      "2019": "90",
      "2020": "90",
      "2021": "90",
      "2022": "91",
      "2023": "91",
      "2024": "90",
      "GeoAreaName": "Nepal"
    },
    {
      "2018": "54",
      "2019": "47",
      "2020": "50",
      "2021": "50",
      "2022": "61",
      "2023": "61",
      "2024": "58",
      "GeoAreaName": "Netherlands (Kingdom of the)"
    },
    {
      "2018": "46",
      "2019": "48",
      "2020": "49",
      "2021": "58",
      "2022": "59",
      "2023": "60",
      "2024": "56",
      "GeoAreaName": "New Zealand"
    },
    {
      "2018": "42",
      "2019": "41",
      "2020": "43",
      "2021": "44",
      "2022": "46",
      "2023": "47",
      "2024": "49",
      "GeoAreaName": "Nicaragua"
    },
    {
      "2018": "29",
      "2019": "29",
      "2020": "29",
      "2021": "43",
      "2022": "43",
      "2023": "51",
      "2024": "NaN",
      "GeoAreaName": "Niger"
    },
    {
      "2018": "20",
      "2019": "20",
      "2020": "12",
      "2021": "13",
      "2022": "13",
      "2023": "13",
      "2024": "14",
      "GeoAreaName": "Nigeria"
    },
    {
      "2018": "45",
      "2019": "46",
      "2020": "48",
      "2021": "47",
      "2022": "50",
      "2023": "50",
      "2024": "51",
      "GeoAreaName": "North Macedonia"
    },
    {
      "2018": "517",
      "2019": "530",
      "2020": "374",
      "2021": "450",
      "2022": "377",
      "2023": "319",
      "2024": "344",
      "GeoAreaName": "Northern Africa"
    },
    {
      "2018": "387",
      "2019": "397",
      "2020": "",
      "2021": "450",
      "2022": "377",
      "2023": "",
      "2024": "",
      "GeoAreaName": "Northern Africa (exc. Sudan)"
    },
    {
      "2018": "893",
      "2019": "949",
      "2020": "798",
      "2021": "881",
      "2022": "815",
      "2023": "755",
      "2024": "796",
      "GeoAreaName": "Northern Africa and Western Asia"
    },
    {
      "2018": "175",
      "2019": "192",
      "2020": "199",
      "2021": "218",
      "2022": "223",
      "2023": "231",
      "2024": "229",
      "GeoAreaName": "Northern America"
    },
    {
      "2018": "713",
      "2019": "741",
      "2020": "767",
      "2021": "779",
      "2022": "782",
      "2023": "797",
      "2024": "806",
      "GeoAreaName": "Northern Europe"
    },
    {
      "2018": "70",
      "2019": "69",
      "2020": "70",
      "2021": "75",
      "2022": "76",
      "2023": "78",
      "2024": "75",
      "GeoAreaName": "Norway"
    },
    {
      "2018": "116",
      "2019": "122",
      "2020": "125",
      "2021": "136",
      "2022": "135",
      "2023": "150",
      "2024": "148",
      "GeoAreaName": "Oceania"
    },
    {
      "2018": "27",
      "2019": "29",
      "2020": "30",
      "2021": "31",
      "2022": "29",
      "2023": "32",
      "2024": "35",
      "GeoAreaName": "Oceania (exc. Australia and New Zealand)"
    },
    {
      "2018": "1",
      "2019": "1",
      "2020": "2",
      "2021": "2",
      "2022": "2",
      "2023": "2",
      "2024": "0",
      "GeoAreaName": "Oman"
    },
    {
      "2018": "70",
      "2019": "69",
      "2020": "69",
      "2021": "69",
      "2022": "70",
      "2023": "70",
      "2024": "70",
      "GeoAreaName": "Pakistan"
    },
    {
      "2018": "2",
      "2019": "2",
      "2020": "2",
      "2021": "1",
      "2022": "1",
      "2023": "1",
      "2024": "1",
      "GeoAreaName": "Palau"
    },
    {
      "2018": "13",
      "2019": "13",
      "2020": "16",
      "2021": "16",
      "2022": "16",
      "2023": "16",
      "2024": "16",
      "GeoAreaName": "Panama"
    },
    {
      "2018": "0",
      "2019": "0",
      "2020": "0",
      "2021": "0",
      "2022": "0",
      "2023": "2",
      "2024": "3",
      "GeoAreaName": "Papua New Guinea"
    },
    {
      "2018": "11",
      "2019": "12",
      "2020": "13",
      "2021": "12",
      "2022": "14",
      "2023": "15",
      "2024": "19",
      "GeoAreaName": "Paraguay"
    },
    {
      "2018": "36",
      "2019": "39",
      "2020": "39",
      "2021": "34",
      "2022": "52",
      "2023": "50",
      "2024": "50",
      "GeoAreaName": "Peru"
    },
    {
      "2018": "86",
      "2019": "86",
      "2020": "85",
      "2021": "85",
      "2022": "85",
      "2023": "85",
      "2024": "85",
      "GeoAreaName": "Philippines"
    },
    {
      "2018": "129",
      "2019": "134",
      "2020": "132",
      "2021": "130",
      "2022": "130",
      "2023": "130",
      "2024": "136",
      "GeoAreaName": "Poland"
    },
    {
      "2018": "8",
      "2019": "8",
      "2020": "8",
      "2021": "8",
      "2022": "6",
      "2023": "10",
      "2024": "10",
      "GeoAreaName": "Polynesia"
    },
    {
      "2018": "80",
      "2019": "82",
      "2020": "92",
      "2021": "92",
      "2022": "92",
      "2023": "83",
      "2024": "84",
      "GeoAreaName": "Portugal"
    },
    {
      "2018": "4",
      "2019": "4",
      "2020": "4",
      "2021": "4",
      "2022": "2",
      "2023": "2",
      "2024": "2",
      "GeoAreaName": "Qatar"
    },
    {
      "2018": "51",
      "2019": "51",
      "2020": "51",
      "2021": "57",
      "2022": "55",
      "2023": "57",
      "2024": "57",
      "GeoAreaName": "Republic of Korea"
    },
    {
      "2018": "23",
      "2019": "23",
      "2020": "25",
      "2021": "25",
      "2022": "41",
      "2023": "39",
      "2024": "40",
      "GeoAreaName": "Republic of Moldova"
    },
    {
      "2018": "68",
      "2019": "68",
      "2020": "72",
      "2021": "61",
      "2022": "63",
      "2023": "63",
      "2024": "63",
      "GeoAreaName": "Romania"
    },
    {
      "2018": "71",
      "2019": "71",
      "2020": "71",
      "2021": "71",
      "2022": "73",
      "2023": "74",
      "2024": "74",
      "GeoAreaName": "Russian Federation"
    },
    {
      "2018": "49",
      "2019": "49",
      "2020": "49",
      "2021": "49",
      "2022": "49",
      "2023": "49",
      "2024": "49",
      "GeoAreaName": "Rwanda"
    },
    {
      "2018": "2",
      "2019": "2",
      "2020": "3",
      "2021": "4",
      "2022": "4",
      "2023": "5",
      "2024": "5",
      "GeoAreaName": "Saint Kitts and Nevis"
    },
    {
      "2018": "3",
      "2019": "3",
      "2020": "3",
      "2021": "3",
      "2022": "2",
      "2023": "2",
      "2024": "2",
      "GeoAreaName": "Saint Lucia"
    },
    {
      "2018": "3",
      "2019": "3",
      "2020": "3",
      "2021": "4",
      "2022": "4",
      "2023": "4",
      "2024": "5",
      "GeoAreaName": "Saint Vincent and the Grenadines"
    },
    {
      "2018": "5",
      "2019": "5",
      "2020": "5",
      "2021": "5",
      "2022": "4",
      "2023": "7",
      "2024": "7",
      "GeoAreaName": "Samoa"
    },
    {
      "2018": "16",
      "2019": "15",
      "2020": "19",
      "2021": "20",
      "2022": "20",
      "2023": "20",
      "2024": "20",
      "GeoAreaName": "San Marino"
    },
    {
      "2018": "10",
      "2019": "8",
      "2020": "8",
      "2021": "13",
      "2022": "13",
      "2023": "8",
      "2024": "8",
      "GeoAreaName": "Sao Tome and Principe"
    },
    {
      "2018": "30",
      "2019": "30",
      "2020": "30",
      "2021": "30",
      "2022": "30",
      "2023": "30",
      "2024": "30",
      "GeoAreaName": "Saudi Arabia"
    },
    {
      "2018": "69",
      "2019": "69",
      "2020": "71",
      "2021": "71",
      "2022": "70",
      "2023": "76",
      "2024": "76",
      "GeoAreaName": "Senegal"
    },
    {
      "2018": "86",
      "2019": "93",
      "2020": "93",
      "2021": "98",
      "2022": "100",
      "2023": "87",
      "2024": "95",
      "GeoAreaName": "Serbia"
    },
    {
      "2018": "7",
      "2019": "7",
      "2020": "7",
      "2021": "8",
      "2022": "8",
      "2023": "8",
      "2024": "7",
      "GeoAreaName": "Seychelles"
    },
    {
      "2018": "15",
      "2019": "18",
      "2020": "18",
      "2021": "18",
      "2022": "18",
      "2023": "19",
      "2024": "44",
      "GeoAreaName": "Sierra Leone"
    },
    {
      "2018": "23",
      "2019": "23",
      "2020": "24",
      "2021": "28",
      "2022": "30",
      "2023": "30",
      "2024": "29",
      "GeoAreaName": "Singapore"
    },
    {
      "2018": "30",
      "2019": "30",
      "2020": "31",
      "2021": "34",
      "2022": "32",
      "2023": "33",
      "2024": "34",
      "GeoAreaName": "Slovakia"
    },
    {
      "2018": "33",
      "2019": "22",
      "2020": "25",
      "2021": "24",
      "2022": "26",
      "2023": "34",
      "2024": "34",
      "GeoAreaName": "Slovenia"
    },
    {
      "2018": "582",
      "2019": "614",
      "2020": "628",
      "2021": "641",
      "2022": "652",
      "2023": "657",
      "2024": "602",
      "GeoAreaName": "Small island developing States (SIDS)"
    },
    {
      "2018": "1",
      "2019": "1",
      "2020": "3",
      "2021": "4",
      "2022": "4",
      "2023": "4",
      "2024": "4",
      "GeoAreaName": "Solomon Islands"
    },
    {
      "2018": "67",
      "2019": "67",
      "2020": "67",
      "2021": "67",
      "2022": "67",
      "2023": "54",
      "2024": "54",
      "GeoAreaName": "Somalia"
    },
    {
      "2018": "167",
      "2019": "168",
      "2020": "184",
      "2021": "182",
      "2022": "185",
      "2023": "185",
      "2024": "183",
      "GeoAreaName": "South Africa"
    },
    {
      "2018": "446",
      "2019": "511",
      "2020": "519",
      "2021": "515",
      "2022": "521",
      "2023": "560",
      "2024": "565",
      "GeoAreaName": "South America"
    },
    {
      "2018": "109",
      "2019": "109",
      "2020": "109",
      "2021": "109",
      "2022": "178",
      "2023": "178",
      "2024": "178",
      "GeoAreaName": "South Sudan"
    },
    {
      "2018": "521",
      "2019": "532",
      "2020": "613",
      "2021": "637",
      "2022": "658",
      "2023": "585",
      "2024": "600",
      "GeoAreaName": "South-Eastern Asia"
    },
    {
      "2018": "252",
      "2019": "255",
      "2020": "267",
      "2021": "270",
      "2022": "275",
      "2023": "281",
      "2024": "282",
      "GeoAreaName": "Southern Africa"
    },
    {
      "2018": "319",
      "2019": "337",
      "2020": "417",
      "2021": "416",
      "2022": "422",
      "2023": "356",
      "2024": "350",
      "GeoAreaName": "Southern Asia"
    },
    {
      "2018": "759",
      "2019": "800",
      "2020": "838",
      "2021": "861",
      "2022": "882",
      "2023": "778",
      "2024": "804",
      "GeoAreaName": "Southern Europe"
    },
    {
      "2018": "137",
      "2019": "144",
      "2020": "154",
      "2021": "154",
      "2022": "150",
      "2023": "148",
      "2024": "155",
      "GeoAreaName": "Spain"
    },
    {
      "2018": "13",
      "2019": "12",
      "2020": "12",
      "2021": "12",
      "2022": "12",
      "2023": "12",
      "2024": "12",
      "GeoAreaName": "Sri Lanka"
    },
    {
      "2018": "2058",
      "2019": "2092",
      "2020": "2097",
      "2021": "2141",
      "2022": "2249",
      "2023": "2319",
      "2024": "2326",
      "GeoAreaName": "Sub-Saharan Africa"
    },
    {
      "2018": "2188",
      "2019": "2225",
      "2020": "",
      "2021": "2141",
      "2022": "2249",
      "2023": "",
      "2024": "",
      "GeoAreaName": "Sub-Saharan Africa (inc. Sudan)"
    },
    {
      "2018": "130",
      "2019": "133",
      "2020": "",
      "2021": "NaN",
      "2022": "NaN",
      "2023": "NaN",
      "2024": "NaN",
      "GeoAreaName": "Sudan"
    },
    {
      "2018": "13",
      "2019": "15",
      "2020": "16",
      "2021": "15",
      "2022": "15",
      "2023": "15",
      "2024": "16",
      "GeoAreaName": "Suriname"
    },
    {
      "2018": "152",
      "2019": "165",
      "2020": "164",
      "2021": "164",
      "2022": "161",
      "2023": "162",
      "2024": "163",
      "GeoAreaName": "Sweden"
    },
    {
      "2018": "65",
      "2019": "65",
      "2020": "83",
      "2021": "84",
      "2022": "85",
      "2023": "83",
      "2024": "77",
      "GeoAreaName": "Switzerland"
    },
    {
      "2018": "33",
      "2019": "33",
      "2020": "31",
      "2021": "28",
      "2022": "28",
      "2023": "27",
      "2024": "26",
      "GeoAreaName": "Syrian Arab Republic"
    },
    {
      "2018": "12",
      "2019": "12",
      "2020": "12",
      "2021": "15",
      "2022": "17",
      "2023": "17",
      "2024": "17",
      "GeoAreaName": "Tajikistan"
    },
    {
      "2018": "12",
      "2019": "13",
      "2020": "81",
      "2021": "77",
      "2022": "77",
      "2023": "74",
      "2024": "97",
      "GeoAreaName": "Thailand"
    },
    {
      "2018": "21",
      "2019": "26",
      "2020": "25",
      "2021": "25",
      "2022": "26",
      "2023": "26",
      "2024": "25",
      "GeoAreaName": "Timor-Leste"
    },
    {
      "2018": "16",
      "2019": "15",
      "2020": "17",
      "2021": "17",
      "2022": "17",
      "2023": "18",
      "2024": "17",
      "GeoAreaName": "Togo"
    },
    {
      "2018": "2",
      "2019": "2",
      "2020": "2",
      "2021": "2",
      "2022": "1",
      "2023": "2",
      "2024": "2",
      "GeoAreaName": "Tonga"
    },
    {
      "2018": "13",
      "2019": "13",
      "2020": "13",
      "2021": "11",
      "2022": "11",
      "2023": "12",
      "2024": "12",
      "GeoAreaName": "Trinidad and Tobago"
    },
    {
      "2018": "68",
      "2019": "78",
      "2020": "54",
      "2021": "57",
      "2022": "57",
      "2023": "NaN",
      "2024": "24",
      "GeoAreaName": "Tunisia"
    },
    {
      "2018": "80",
      "2019": "104",
      "2020": "102",
      "2021": "104",
      "2022": "101",
      "2023": "101",
      "2024": "119",
      "GeoAreaName": "Türkiye"
    },
    {
      "2018": "32",
      "2019": "31",
      "2020": "31",
      "2021": "31",
      "2022": "30",
      "2023": "30",
      "2024": "32",
      "GeoAreaName": "Turkmenistan"
    },
    {
      "2018": "1",
      "2019": "1",
      "2020": "1",
      "2021": "1",
      "2022": "1",
      "2023": "1",
      "2024": "1",
      "GeoAreaName": "Tuvalu"
    },
    {
      "2018": "154",
      "2019": "160",
      "2020": "160",
      "2021": "160",
      "2022": "188",
      "2023": "188",
      "2024": "189",
      "GeoAreaName": "Uganda"
    },
    {
      "2018": "52",
      "2019": "49",
      "2020": "88",
      "2021": "88",
      "2022": "86",
      "2023": "85",
      "2024": "85",
      "GeoAreaName": "Ukraine"
    },
    {
      "2018": "9",
      "2019": "9",
      "2020": "20",
      "2021": "20",
      "2022": "20",
      "2023": "20",
      "2024": "20",
      "GeoAreaName": "United Arab Emirates"
    },
    {
      "2018": "208",
      "2019": "208",
      "2020": "220",
      "2021": "220",
      "2022": "223",
      "2023": "224",
      "2024": "225",
      "GeoAreaName": "United Kingdom of Great Britain and Northern Ireland"
    },
    {
      "2018": "145",
      "2019": "145",
      "2020": "145",
      "2021": "141",
      "2022": "143",
      "2023": "147",
      "2024": "147",
      "GeoAreaName": "United Republic of Tanzania"
    },
    {
      "2018": "84",
      "2019": "102",
      "2020": "101",
      "2021": "118",
      "2022": "120",
      "2023": "128",
      "2024": "126",
      "GeoAreaName": "United States of America"
    },
    {
      "2018": "20",
      "2019": "22",
      "2020": "21",
      "2021": "24",
      "2022": "25",
      "2023": "26",
      "2024": "25",
      "GeoAreaName": "Uruguay"
    },
    {
      "2018": "24",
      "2019": "24",
      "2020": "48",
      "2021": "48",
      "2022": "48",
      "2023": "47",
      "2024": "47",
      "GeoAreaName": "Uzbekistan"
    },
    {
      "2018": "0",
      "2019": "0",
      "2020": "0",
      "2021": "0",
      "2022": "0",
      "2023": "1",
      "2024": "1",
      "GeoAreaName": "Vanuatu"
    },
    {
      "2018": "37",
      "2019": "37",
      "2020": "37",
      "2021": "37",
      "2022": "NaN",
      "2023": "NaN",
      "2024": "NaN",
      "GeoAreaName": "Venezuela (Bolivarian Republic of)"
    },
    {
      "2018": "132",
      "2019": "132",
      "2020": "132",
      "2021": "132",
      "2022": "151",
      "2023": "151",
      "2024": "151",
      "GeoAreaName": "Viet Nam"
    },
    {
      "2018": "350",
      "2019": "354",
      "2020": "353",
      "2021": "375",
      "2022": "394",
      "2023": "424",
      "2024": "424",
      "GeoAreaName": "Western Africa"
    },
    {
      "2018": "376",
      "2019": "419",
      "2020": "424",
      "2021": "431",
      "2022": "438",
      "2023": "436",
      "2024": "452",
      "GeoAreaName": "Western Asia"
    },
    {
      "2018": "269",
      "2019": "300",
      "2020": "",
      "2021": "304",
      "2022": "307",
      "2023": "",
      "2024": "",
      "GeoAreaName": "Western Asia (exc. Armenia, Azerbaijan, Cyprus, Israel and Georgia)"
    },
    {
      "2018": "707",
      "2019": "711",
      "2020": "744",
      "2021": "751",
      "2022": "805",
      "2023": "794",
      "2024": "787",
      "GeoAreaName": "Western Europe"
    },
    {
      "2018": "9066",
      "2019": "9459",
      "2020": "9682",
      "2021": "9900",
      "2022": "10079",
      "2023": "9924",
      "2024": "10019",
      "GeoAreaName": "World"
    },
    {
      "2018": "0",
      "2019": "1",
      "2020": "1",
      "2021": "1",
      "2022": "0",
      "2023": "0",
      "2024": "0",
      "GeoAreaName": "Yemen"
    },
    {
      "2018": "30",
      "2019": "30",
      "2020": "28",
      "2021": "28",
      "2022": "25",
      "2023": "25",
      "2024": "25",
      "GeoAreaName": "Zambia"
    },
    {
      "2018": "83",
      "2019": "86",
      "2020": "86",
      "2021": "86",
      "2022": "81",
      "2023": "81",
      "2024": "75",
      "GeoAreaName": "Zimbabwe"
    }
  ]
};

export const proportionOfWomenAged2024YearsWhoWereMarriedOrInAUnionBeforeAge18 = {
  "title": "Proportion of women aged 20 24 years who were married or in a union before age 18",
  "description": "This table highlights the percentage of women aged 20-24 who were married or in a union before the age of 18. Early marriage is closely linked to gender inequality and can have profound impacts on women's education, health, and economic opportunities. In the context of climate change, women who are married early often face heightened vulnerabilities, such as limited access to resources and decision-making power, which can reduce their resilience to climate-related disasters. By understanding the prevalence of early marriage, this data helps to reveal how gender-based social practices contribute to the compounding challenges women face in adapting to and mitigating the impacts of climate change. Addressing early marriage is crucial to improving gender equality and strengthening climate resilience, particularly in regions most affected by environmental change.",
  "category": "Marriage and Family",
  "type": "country-data",
  "data": [
    {
      "2018": "11.8",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Albania",
      "Age": "20-24"
    },
    {
      "2018": "",
      "2020": "15.5",
      "2022": "",
      "GeoAreaName": "Argentina",
      "Age": "20-24"
    },
    {
      "2018": "",
      "2020": "0.1",
      "2022": "",
      "GeoAreaName": "Belgium",
      "Age": "20-24"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "27.5",
      "GeoAreaName": "Benin",
      "Age": "20-24"
    },
    {
      "2018": "8.4",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Cabo Verde",
      "Age": "20-24"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "17.9",
      "GeoAreaName": "Cambodia",
      "Age": "20-24"
    },
    {
      "2018": "29.8",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Cameroon",
      "Age": "20-24"
    },
    {
      "2018": "30.676",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Central and Southern Asia",
      "Age": "20-24"
    },
    {
      "2018": "6.463",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Central Asia",
      "Age": "20-24"
    },
    {
      "2018": "",
      "2020": "2.8",
      "2022": "",
      "GeoAreaName": "China",
      "Age": "20-24"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "20.7",
      "GeoAreaName": "Comoros",
      "Age": "20-24"
    },
    {
      "2018": "17.1",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Costa Rica",
      "Age": "20-24"
    },
    {
      "2018": "29.1",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Democratic Republic of the Congo",
      "Age": "20-24"
    },
    {
      "2018": "8.548",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Eastern and South-Eastern Asia",
      "Age": "20-24"
    },
    {
      "2018": "3.685",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Eastern Asia",
      "Age": "20-24"
    },
    {
      "2018": "22.2",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Ecuador",
      "Age": "20-24"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "1.9",
      "GeoAreaName": "Eswatini",
      "Age": "20-24"
    },
    {
      "2018": "",
      "2020": "23.1",
      "2022": "",
      "GeoAreaName": "Gambia",
      "Age": "20-24"
    },
    {
      "2018": "13.9",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Georgia",
      "Age": "20-24"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "16.1",
      "GeoAreaName": "Ghana",
      "Age": "20-24"
    },
    {
      "2018": "46.5",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Guinea",
      "Age": "20-24"
    },
    {
      "2018": "",
      "2020": "32.3",
      "2022": "",
      "GeoAreaName": "Guyana",
      "Age": "20-24"
    },
    {
      "2018": "27.9",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Iraq",
      "Age": "20-24"
    },
    {
      "2018": "9.7",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Jordan",
      "Age": "20-24"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "12.5",
      "GeoAreaName": "Kenya",
      "Age": "20-24"
    },
    {
      "2018": "12.9",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Kyrgyzstan",
      "Age": "20-24"
    },
    {
      "2018": "35.299",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Landlocked developing countries (LLDCs)",
      "Age": "20-24"
    },
    {
      "2018": "22.577",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Latin America and the Caribbean",
      "Age": "20-24"
    },
    {
      "2018": "40.049",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Least Developed Countries (LDCs)",
      "Age": "20-24"
    },
    {
      "2018": "16.4",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Lesotho",
      "Age": "20-24"
    },
    {
      "2018": "",
      "2020": "24.9",
      "2022": "",
      "GeoAreaName": "Liberia",
      "Age": "20-24"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "0.2",
      "GeoAreaName": "Lithuania",
      "Age": "20-24"
    },
    {
      "2018": "",
      "2020": "37.7",
      "2022": "",
      "GeoAreaName": "Malawi",
      "Age": "20-24"
    },
    {
      "2018": "53.7",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Mali",
      "Age": "20-24"
    },
    {
      "2018": "20.7",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Mexico",
      "Age": "20-24"
    },
    {
      "2018": "12",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Mongolia",
      "Age": "20-24"
    },
    {
      "2018": "5.8",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Montenegro",
      "Age": "20-24"
    },
    {
      "2018": "13.7",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Morocco",
      "Age": "20-24"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "34.9",
      "GeoAreaName": "Nepal",
      "Age": "20-24"
    },
    {
      "2018": "13.359",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Northern Africa",
      "Age": "20-24"
    },
    {
      "2018": "17.774",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Northern Africa and Western Asia",
      "Age": "20-24"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "0",
      "GeoAreaName": "Norway",
      "Age": "20-24"
    },
    {
      "2018": "25.889",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Oceania (exc. Australia and New Zealand)",
      "Age": "20-24"
    },
    {
      "2018": "18.3",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Pakistan",
      "Age": "20-24"
    },
    {
      "2018": "27.3",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Papua New Guinea",
      "Age": "20-24"
    },
    {
      "2018": "",
      "2020": "14.1",
      "2022": "",
      "GeoAreaName": "Peru",
      "Age": "20-24"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "9.4",
      "GeoAreaName": "Philippines",
      "Age": "20-24"
    },
    {
      "2018": "",
      "2020": "5.5",
      "2022": "",
      "GeoAreaName": "Rwanda",
      "Age": "20-24"
    },
    {
      "2018": "",
      "2020": "7.4",
      "2022": "",
      "GeoAreaName": "Samoa",
      "Age": "20-24"
    },
    {
      "2018": "22.522",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Small island developing States (SIDS)",
      "Age": "20-24"
    },
    {
      "2018": "16.608",
      "2020": "",
      "2022": "",
      "GeoAreaName": "South-Eastern Asia",
      "Age": "20-24"
    },
    {
      "2018": "31.581",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Southern Asia",
      "Age": "20-24"
    },
    {
      "2018": "",
      "2020": "13.4",
      "2022": "",
      "GeoAreaName": "State of Palestine",
      "Age": "20-24"
    },
    {
      "2018": "35.738",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Sub-Saharan Africa",
      "Age": "20-24"
    },
    {
      "2018": "36",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Suriname",
      "Age": "20-24"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "17",
      "GeoAreaName": "Thailand",
      "Age": "20-24"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "4.2",
      "GeoAreaName": "Trinidad and Tobago",
      "Age": "20-24"
    },
    {
      "2018": "1.5",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Tunisia",
      "Age": "20-24"
    },
    {
      "2018": "14.7",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Türkiye",
      "Age": "20-24"
    },
    {
      "2018": "",
      "2020": "23.3",
      "2022": "",
      "GeoAreaName": "Turks and Caicos Islands",
      "Age": "20-24"
    },
    {
      "2018": "",
      "2020": "1.8",
      "2022": "",
      "GeoAreaName": "Tuvalu",
      "Age": "20-24"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "29.1",
      "GeoAreaName": "United Republic of Tanzania",
      "Age": "20-24"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "3.4",
      "GeoAreaName": "Uzbekistan",
      "Age": "20-24"
    },
    {
      "2018": "22.103",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Western Asia",
      "Age": "20-24"
    },
    {
      "2018": "20.876",
      "2020": "",
      "2022": "",
      "GeoAreaName": "World",
      "Age": "20-24"
    },
    {
      "2018": "29",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Zambia",
      "Age": "20-24"
    }
  ]
};

export const violenceAgainstWomenByCountry = {
  "title": "Violence Against Women By Country",
  "description": "This table provides data on the prevalence of violence against women, disaggregated by country. Gender-based violence is a critical indicator of inequality and social vulnerability, which can be exacerbated in regions affected by climate change. Women and gender minorities who experience violence are often more susceptible to the negative impacts of climate-related disasters, as they may have less access to resources, support systems, and decision-making power in their communities. Understanding the prevalence of violence against women is essential for designing comprehensive climate resilience strategies that address not only environmental challenges but also the social and gender dynamics that compound these risks. Reducing violence against women is crucial for fostering gender equity and empowering women to be active participants in climate adaptation and disaster recovery efforts.",
  "category": "Violence Against",
  "type": "country-data",
  "data": [
    {
      "2018": "88.89",
      "2020": "88.89",
      "2022": "88.89",
      "GeoAreaName": "Albania"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "44.44",
      "GeoAreaName": "Antigua and Barbuda"
    },
    {
      "2018": "",
      "2020": "100.00",
      "2022": "100.00",
      "GeoAreaName": "Argentina"
    },
    {
      "2018": "66.67",
      "2020": "77.78",
      "2022": "77.78",
      "GeoAreaName": "Armenia"
    },
    {
      "2018": "100.00",
      "2020": "100.00",
      "2022": "100.00",
      "GeoAreaName": "Australia"
    },
    {
      "2018": "",
      "2020": "94.44",
      "2022": "94.44",
      "GeoAreaName": "Australia and New Zealand"
    },
    {
      "2018": "",
      "2020": "88.89",
      "2022": "88.89",
      "GeoAreaName": "Austria"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "66.67",
      "GeoAreaName": "Azerbaijan"
    },
    {
      "2018": "66.67",
      "2020": "66.67",
      "2022": "66.67",
      "GeoAreaName": "Bangladesh"
    },
    {
      "2018": "66.67",
      "2020": "77.78",
      "2022": "77.78",
      "GeoAreaName": "Barbados"
    },
    {
      "2018": "66.67",
      "2020": "66.67",
      "2022": "66.67",
      "GeoAreaName": "Belarus"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "77.78",
      "GeoAreaName": "Belize"
    },
    {
      "2018": "",
      "2020": "77.78",
      "2022": "77.78",
      "GeoAreaName": "Bolivia (Plurinational State of)"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "77.78",
      "GeoAreaName": "Bosnia and Herzegovina"
    },
    {
      "2018": "88.89",
      "2020": "88.89",
      "2022": "88.89",
      "GeoAreaName": "Brazil"
    },
    {
      "2018": "88.89",
      "2020": "88.89",
      "2022": "88.89",
      "GeoAreaName": "Bulgaria"
    },
    {
      "2018": "77.78",
      "2020": "77.78",
      "2022": "77.78",
      "GeoAreaName": "Cabo Verde"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "77.78",
      "GeoAreaName": "Cambodia"
    },
    {
      "2018": "55.56",
      "2020": "55.56",
      "2022": "66.67",
      "GeoAreaName": "Cameroon"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "88.89",
      "GeoAreaName": "Canada"
    },
    {
      "2018": "",
      "2020": "79.63",
      "2022": "73.61",
      "GeoAreaName": "Central and Southern Asia"
    },
    {
      "2018": "100.00",
      "2020": "100.00",
      "2022": "100.00",
      "GeoAreaName": "Chile"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "66.67",
      "GeoAreaName": "China"
    },
    {
      "2018": "88.89",
      "2020": "77.78",
      "2022": "100.00",
      "GeoAreaName": "Colombia"
    },
    {
      "2018": "77.78",
      "2020": "77.78",
      "2022": "77.78",
      "GeoAreaName": "Costa Rica"
    },
    {
      "2018": "77.78",
      "2020": "77.78",
      "2022": "77.78",
      "GeoAreaName": "Côte d'Ivoire"
    },
    {
      "2018": "88.89",
      "2020": "88.89",
      "2022": "88.89",
      "GeoAreaName": "Croatia"
    },
    {
      "2018": "",
      "2020": "88.89",
      "2022": "88.89",
      "GeoAreaName": "Cyprus"
    },
    {
      "2018": "",
      "2020": "100.00",
      "2022": "100.00",
      "GeoAreaName": "Czechia"
    },
    {
      "2018": "100.00",
      "2020": "100.00",
      "2022": "100.00",
      "GeoAreaName": "Denmark"
    },
    {
      "2018": "77.78",
      "2020": "88.89",
      "2022": "88.89",
      "GeoAreaName": "Dominican Republic"
    },
    {
      "2018": "",
      "2020": "72.22",
      "2022": "72.84",
      "GeoAreaName": "Eastern and South-Eastern Asia"
    },
    {
      "2018": "",
      "2020": "88.89",
      "2022": "88.89",
      "GeoAreaName": "Ecuador"
    },
    {
      "2018": "77.78",
      "2020": "77.78",
      "2022": "77.78",
      "GeoAreaName": "El Salvador"
    },
    {
      "2018": "",
      "2020": "77.78",
      "2022": "77.78",
      "GeoAreaName": "Estonia"
    },
    {
      "2018": "",
      "2020": "44.44",
      "2022": "44.44",
      "GeoAreaName": "Ethiopia"
    },
    {
      "2018": "",
      "2020": "85.71",
      "2022": "86.04",
      "GeoAreaName": "Europe and Northern America"
    },
    {
      "2018": "100.00",
      "2020": "100.00",
      "2022": "100.00",
      "GeoAreaName": "Fiji"
    },
    {
      "2018": "77.78",
      "2020": "77.78",
      "2022": "77.78",
      "GeoAreaName": "Finland"
    },
    {
      "2018": "88.89",
      "2020": "88.89",
      "2022": "88.89",
      "GeoAreaName": "France"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "66.67",
      "GeoAreaName": "Georgia"
    },
    {
      "2018": "100.00",
      "2020": "100.00",
      "2022": "100.00",
      "GeoAreaName": "Germany"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "55.56",
      "GeoAreaName": "Ghana"
    },
    {
      "2018": "66.67",
      "2020": "77.78",
      "2022": "77.78",
      "GeoAreaName": "Greece"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "66.67",
      "GeoAreaName": "Grenada"
    },
    {
      "2018": "77.78",
      "2020": "77.78",
      "2022": "77.78",
      "GeoAreaName": "Guatemala"
    },
    {
      "2018": "",
      "2020": "55.56",
      "2022": "55.56",
      "GeoAreaName": "Guinea"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "44.44",
      "GeoAreaName": "Haiti"
    },
    {
      "2018": "",
      "2020": "77.78",
      "2022": "77.78",
      "GeoAreaName": "Honduras"
    },
    {
      "2018": "",
      "2020": "66.67",
      "2022": "66.67",
      "GeoAreaName": "Hungary"
    },
    {
      "2018": "",
      "2020": "100.00",
      "2022": "100.00",
      "GeoAreaName": "Iceland"
    },
    {
      "2018": "77.78",
      "2020": "77.78",
      "2022": "77.78",
      "GeoAreaName": "India"
    },
    {
      "2018": "55.56",
      "2020": "55.56",
      "2022": "55.56",
      "GeoAreaName": "Iraq"
    },
    {
      "2018": "",
      "2020": "88.89",
      "2022": "88.89",
      "GeoAreaName": "Ireland"
    },
    {
      "2018": "",
      "2020": "77.78",
      "2022": "88.89",
      "GeoAreaName": "Israel"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "77.78",
      "GeoAreaName": "Italy"
    },
    {
      "2018": "",
      "2020": "66.67",
      "2022": "77.78",
      "GeoAreaName": "Jamaica"
    },
    {
      "2018": "",
      "2020": "77.78",
      "2022": "77.78",
      "GeoAreaName": "Japan"
    },
    {
      "2018": "44.44",
      "2020": "44.44",
      "2022": "55.56",
      "GeoAreaName": "Jordan"
    },
    {
      "2018": "",
      "2020": "77.78",
      "2022": "77.78",
      "GeoAreaName": "Kazakhstan"
    },
    {
      "2018": "55.56",
      "2020": "55.56",
      "2022": "55.56",
      "GeoAreaName": "Kenya"
    },
    {
      "2018": "",
      "2020": "88.89",
      "2022": "88.89",
      "GeoAreaName": "Kyrgyzstan"
    },
    {
      "2018": "",
      "2020": "77.78",
      "2022": "74.07",
      "GeoAreaName": "Landlocked developing countries (LLDCs)"
    },
    {
      "2018": "",
      "2020": "82.78",
      "2022": "79.56",
      "GeoAreaName": "Latin America and the Caribbean"
    },
    {
      "2018": "",
      "2020": "77.78",
      "2022": "77.78",
      "GeoAreaName": "Latvia"
    },
    {
      "2018": "",
      "2020": "66.67",
      "2022": "68.75",
      "GeoAreaName": "Least Developed Countries (LDCs)"
    },
    {
      "2018": "55.56",
      "2020": "55.56",
      "2022": "66.67",
      "GeoAreaName": "Lebanon"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "100.00",
      "GeoAreaName": "Liberia"
    },
    {
      "2018": "88.89",
      "2020": "88.89",
      "2022": "88.89",
      "GeoAreaName": "Lithuania"
    },
    {
      "2018": "",
      "2020": "88.89",
      "2022": "88.89",
      "GeoAreaName": "Luxembourg"
    },
    {
      "2018": "44.44",
      "2020": "44.44",
      "2022": "55.56",
      "GeoAreaName": "Madagascar"
    },
    {
      "2018": "",
      "2020": "77.78",
      "2022": "77.78",
      "GeoAreaName": "Malawi"
    },
    {
      "2018": "66.67",
      "2020": "66.67",
      "2022": "66.67",
      "GeoAreaName": "Malaysia"
    },
    {
      "2018": "",
      "2020": "88.89",
      "2022": "88.89",
      "GeoAreaName": "Malta"
    },
    {
      "2018": "",
      "2020": "77.78",
      "2022": "100.00",
      "GeoAreaName": "Mauritius"
    },
    {
      "2018": "77.78",
      "2020": "77.78",
      "2022": "88.89",
      "GeoAreaName": "Mexico"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "77.78",
      "GeoAreaName": "Mongolia"
    },
    {
      "2018": "",
      "2020": "88.89",
      "2022": "88.89",
      "GeoAreaName": "Montenegro"
    },
    {
      "2018": "",
      "2020": "66.67",
      "2022": "77.78",
      "GeoAreaName": "Morocco"
    },
    {
      "2018": "77.78",
      "2020": "77.78",
      "2022": "77.78",
      "GeoAreaName": "Mozambique"
    },
    {
      "2018": "",
      "2020": "88.89",
      "2022": "88.89",
      "GeoAreaName": "Namibia"
    },
    {
      "2018": "",
      "2020": "88.89",
      "2022": "88.89",
      "GeoAreaName": "Nepal"
    },
    {
      "2018": "77.78",
      "2020": "77.78",
      "2022": "77.78",
      "GeoAreaName": "Netherlands (Kingdom of the)"
    },
    {
      "2018": "",
      "2020": "88.89",
      "2022": "88.89",
      "GeoAreaName": "New Zealand"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "55.56",
      "GeoAreaName": "Nicaragua"
    },
    {
      "2018": "66.67",
      "2020": "66.67",
      "2022": "66.67",
      "GeoAreaName": "Nigeria"
    },
    {
      "2018": "",
      "2020": "88.89",
      "2022": "88.89",
      "GeoAreaName": "North Macedonia"
    },
    {
      "2018": "",
      "2020": "64.20",
      "2022": "70.63",
      "GeoAreaName": "Northern Africa and Western Asia"
    },
    {
      "2018": "",
      "2020": "66.67",
      "2022": "88.89",
      "GeoAreaName": "Norway"
    },
    {
      "2018": "",
      "2020": "100.00",
      "2022": "88.89",
      "GeoAreaName": "Oceania (exc. Australia and New Zealand)"
    },
    {
      "2018": "77.78",
      "2020": "77.78",
      "2022": "77.78",
      "GeoAreaName": "Pakistan"
    },
    {
      "2018": "88.89",
      "2020": "88.89",
      "2022": "88.89",
      "GeoAreaName": "Panama"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "66.67",
      "GeoAreaName": "Papua New Guinea"
    },
    {
      "2018": "88.89",
      "2020": "88.89",
      "2022": "88.89",
      "GeoAreaName": "Paraguay"
    },
    {
      "2018": "77.78",
      "2020": "77.78",
      "2022": "77.78",
      "GeoAreaName": "Peru"
    },
    {
      "2018": "55.56",
      "2020": "55.56",
      "2022": "55.56",
      "GeoAreaName": "Philippines"
    },
    {
      "2018": "",
      "2020": "88.89",
      "2022": "88.89",
      "GeoAreaName": "Poland"
    },
    {
      "2018": "",
      "2020": "88.89",
      "2022": "88.89",
      "GeoAreaName": "Portugal"
    },
    {
      "2018": "",
      "2020": "88.89",
      "2022": "88.89",
      "GeoAreaName": "Republic of Korea"
    },
    {
      "2018": "",
      "2020": "77.78",
      "2022": "77.78",
      "GeoAreaName": "Republic of Moldova"
    },
    {
      "2018": "",
      "2020": "77.78",
      "2022": "77.78",
      "GeoAreaName": "Romania"
    },
    {
      "2018": "",
      "2020": "88.89",
      "2022": "88.89",
      "GeoAreaName": "Rwanda"
    },
    {
      "2018": "55.56",
      "2020": "55.56",
      "2022": "55.56",
      "GeoAreaName": "Serbia"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "88.89",
      "GeoAreaName": "Seychelles"
    },
    {
      "2018": "",
      "2020": "88.89",
      "2022": "88.89",
      "GeoAreaName": "Slovakia"
    },
    {
      "2018": "88.89",
      "2020": "88.89",
      "2022": "88.89",
      "GeoAreaName": "Slovenia"
    },
    {
      "2018": "",
      "2020": "80.56",
      "2022": "77.78",
      "GeoAreaName": "Small island developing States (SIDS)"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "100.00",
      "GeoAreaName": "Solomon Islands"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "55.56",
      "GeoAreaName": "South Sudan"
    },
    {
      "2018": "100.00",
      "2020": "100.00",
      "2022": "100.00",
      "GeoAreaName": "Spain"
    },
    {
      "2018": "55.56",
      "2020": "55.56",
      "2022": "55.56",
      "GeoAreaName": "State of Palestine"
    },
    {
      "2018": "",
      "2020": "66.67",
      "2022": "71.11",
      "GeoAreaName": "Sub-Saharan Africa"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "44.44",
      "GeoAreaName": "Sudan"
    },
    {
      "2018": "",
      "2020": "77.78",
      "2022": "77.78",
      "GeoAreaName": "Suriname"
    },
    {
      "2018": "88.89",
      "2020": "100.00",
      "2022": "100.00",
      "GeoAreaName": "Sweden"
    },
    {
      "2018": "",
      "2020": "88.89",
      "2022": "88.89",
      "GeoAreaName": "Switzerland"
    },
    {
      "2018": "",
      "2020": "55.56",
      "2022": "55.56",
      "GeoAreaName": "Thailand"
    },
    {
      "2018": "77.78",
      "2020": "77.78",
      "2022": "77.78",
      "GeoAreaName": "Trinidad and Tobago"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "88.89",
      "GeoAreaName": "Tunisia"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "88.89",
      "GeoAreaName": "Türkiye"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "44.44",
      "GeoAreaName": "Turkmenistan"
    },
    {
      "2018": "77.78",
      "2020": "77.78",
      "2022": "77.78",
      "GeoAreaName": "Uganda"
    },
    {
      "2018": "77.78",
      "2020": "77.78",
      "2022": "77.78",
      "GeoAreaName": "Ukraine"
    },
    {
      "2018": "44.44",
      "2020": "55.56",
      "2022": "66.67",
      "GeoAreaName": "United Arab Emirates"
    },
    {
      "2018": "100.00",
      "2020": "100.00",
      "2022": "100.00",
      "GeoAreaName": "United Kingdom of Great Britain and Northern Ireland"
    },
    {
      "2018": "44.44",
      "2020": "44.44",
      "2022": "44.44",
      "GeoAreaName": "United Republic of Tanzania"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "88.89",
      "GeoAreaName": "United States of America"
    },
    {
      "2018": "",
      "2020": "88.89",
      "2022": "88.89",
      "GeoAreaName": "Uruguay"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "66.67",
      "GeoAreaName": "Uzbekistan"
    },
    {
      "2018": "88.89",
      "2020": "88.89",
      "2022": "88.89",
      "GeoAreaName": "Viet Nam"
    },
    {
      "2018": "76.31",
      "2020": "78.95",
      "2022": "78.80",
      "GeoAreaName": "World"
    },
    {
      "2018": "",
      "2020": "55.56",
      "2022": "66.67",
      "GeoAreaName": "Zimbabwe"
    }
  ]
};

export const overarchingLegalFrameworksAndPublicLife = {
  "title": "Overarching Legal Frameworks and Public Life",
  "description": "This table examines the presence and effectiveness of legal frameworks that promote gender equality in public life, including constitutional guarantees, anti-discrimination laws, and policies aimed at increasing women's participation in the public sphere. A robust legal framework is essential for addressing the intersection of gender inequality and climate change, as it can empower women to take leadership roles in climate governance, influence decision-making, and secure equal rights in climate-related resource distribution. In countries where legal protections for women are weak or absent, women may face greater barriers in adapting to and mitigating the impacts of climate disasters. This data underscores the importance of strong legal systems to ensure that climate resilience efforts are inclusive, equitable, and sustainable for all genders.",
  "category": "Gender Discrimination",
  "type": "country-data",
  "data": [
    {
      "2018": "100.00",
      "2020": "100.00",
      "2022": "100.00",
      "GeoAreaName": "Albania"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "30.00",
      "GeoAreaName": "Antigua and Barbuda"
    },
    {
      "2018": "",
      "2020": "80.00",
      "2022": "80.00",
      "GeoAreaName": "Argentina"
    },
    {
      "2018": "90.00",
      "2020": "90.00",
      "2022": "90.00",
      "GeoAreaName": "Armenia"
    },
    {
      "2018": "80.00",
      "2020": "80.00",
      "2022": "80.00",
      "GeoAreaName": "Australia"
    },
    {
      "2018": "",
      "2020": "75.00",
      "2022": "75.00",
      "GeoAreaName": "Australia and New Zealand"
    },
    {
      "2018": "",
      "2020": "70.00",
      "2022": "70.00",
      "GeoAreaName": "Austria"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "40.00",
      "GeoAreaName": "Azerbaijan"
    },
    {
      "2018": "75.00",
      "2020": "75.00",
      "2022": "75.00",
      "GeoAreaName": "Bangladesh"
    },
    {
      "2018": "40.00",
      "2020": "40.00",
      "2022": "40.00",
      "GeoAreaName": "Barbados"
    },
    {
      "2018": "50.00",
      "2020": "50.00",
      "2022": "50.00",
      "GeoAreaName": "Belarus"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "30.00",
      "GeoAreaName": "Belize"
    },
    {
      "2018": "",
      "2020": "80.00",
      "2022": "80.00",
      "GeoAreaName": "Bolivia (Plurinational State of)"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "100.00",
      "GeoAreaName": "Bosnia and Herzegovina"
    },
    {
      "2018": "70.00",
      "2020": "70.00",
      "2022": "80.00",
      "GeoAreaName": "Brazil"
    },
    {
      "2018": "80.00",
      "2020": "80.00",
      "2022": "80.00",
      "GeoAreaName": "Bulgaria"
    },
    {
      "2018": "60.00",
      "2020": "60.00",
      "2022": "60.00",
      "GeoAreaName": "Cabo Verde"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "50.00",
      "GeoAreaName": "Cambodia"
    },
    {
      "2018": "50.00",
      "2020": "50.00",
      "2022": "50.00",
      "GeoAreaName": "Cameroon"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "70.00",
      "GeoAreaName": "Canada"
    },
    {
      "2018": "",
      "2020": "68.26",
      "2022": "68.69",
      "GeoAreaName": "Central and Southern Asia"
    },
    {
      "2018": "80.00",
      "2020": "80.00",
      "2022": "80.00",
      "GeoAreaName": "Chile"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "70.00",
      "GeoAreaName": "China"
    },
    {
      "2018": "70.00",
      "2020": "70.00",
      "2022": "70.00",
      "GeoAreaName": "Colombia"
    },
    {
      "2018": "80.00",
      "2020": "80.00",
      "2022": "90.00",
      "GeoAreaName": "Costa Rica"
    },
    {
      "2018": "63.64",
      "2020": "63.64",
      "2022": "63.64",
      "GeoAreaName": "Côte d'Ivoire"
    },
    {
      "2018": "100.00",
      "2020": "100.00",
      "2022": "100.00",
      "GeoAreaName": "Croatia"
    },
    {
      "2018": "",
      "2020": "70.00",
      "2022": "70.00",
      "GeoAreaName": "Cyprus"
    },
    {
      "2018": "",
      "2020": "70.00",
      "2022": "70.00",
      "GeoAreaName": "Czechia"
    },
    {
      "2018": "80.00",
      "2020": "80.00",
      "2022": "80.00",
      "GeoAreaName": "Denmark"
    },
    {
      "2018": "70.00",
      "2020": "70.00",
      "2022": "70.00",
      "GeoAreaName": "Dominican Republic"
    },
    {
      "2018": "",
      "2020": "62.22",
      "2022": "64.81",
      "GeoAreaName": "Eastern and South-Eastern Asia"
    },
    {
      "2018": "",
      "2020": "90.00",
      "2022": "90.00",
      "GeoAreaName": "Ecuador"
    },
    {
      "2018": "100.00",
      "2020": "100.00",
      "2022": "100.00",
      "GeoAreaName": "El Salvador"
    },
    {
      "2018": "",
      "2020": "70.00",
      "2022": "70.00",
      "GeoAreaName": "Estonia"
    },
    {
      "2018": "",
      "2020": "75.00",
      "2022": "75.00",
      "GeoAreaName": "Ethiopia"
    },
    {
      "2018": "",
      "2020": "80.00",
      "2022": "80.00",
      "GeoAreaName": "Europe and Northern America"
    },
    {
      "2018": "60.00",
      "2020": "60.00",
      "2022": "60.00",
      "GeoAreaName": "Fiji"
    },
    {
      "2018": "70.00",
      "2020": "70.00",
      "2022": "70.00",
      "GeoAreaName": "Finland"
    },
    {
      "2018": "80.00",
      "2020": "80.00",
      "2022": "80.00",
      "GeoAreaName": "France"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "100.00",
      "GeoAreaName": "Georgia"
    },
    {
      "2018": "70.00",
      "2020": "70.00",
      "2022": "70.00",
      "GeoAreaName": "Germany"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "45.45",
      "GeoAreaName": "Ghana"
    },
    {
      "2018": "70.00",
      "2020": "70.00",
      "2022": "70.00",
      "GeoAreaName": "Greece"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "40.00",
      "GeoAreaName": "Grenada"
    },
    {
      "2018": "70.00",
      "2020": "70.00",
      "2022": "70.00",
      "GeoAreaName": "Guatemala"
    },
    {
      "2018": "",
      "2020": "70.00",
      "2022": "70.00",
      "GeoAreaName": "Guinea"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "50.00",
      "GeoAreaName": "Haiti"
    },
    {
      "2018": "",
      "2020": "90.00",
      "2022": "90.00",
      "GeoAreaName": "Honduras"
    },
    {
      "2018": "",
      "2020": "70.00",
      "2022": "70.00",
      "GeoAreaName": "Hungary"
    },
    {
      "2018": "",
      "2020": "80.00",
      "2022": "80.00",
      "GeoAreaName": "Iceland"
    },
    {
      "2018": "54.55",
      "2020": "54.55",
      "2022": "54.55",
      "GeoAreaName": "India"
    },
    {
      "2018": "45.45",
      "2020": "45.45",
      "2022": "45.45",
      "GeoAreaName": "Iraq"
    },
    {
      "2018": "",
      "2020": "70.00",
      "2022": "70.00",
      "GeoAreaName": "Ireland"
    },
    {
      "2018": "",
      "2020": "54.55",
      "2022": "54.55",
      "GeoAreaName": "Israel"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "80.00",
      "GeoAreaName": "Italy"
    },
    {
      "2018": "",
      "2020": "50.00",
      "2022": "50.00",
      "GeoAreaName": "Jamaica"
    },
    {
      "2018": "",
      "2020": "60.00",
      "2022": "60.00",
      "GeoAreaName": "Japan"
    },
    {
      "2018": "54.55",
      "2020": "54.55",
      "2022": "54.55",
      "GeoAreaName": "Jordan"
    },
    {
      "2018": "",
      "2020": "60.00",
      "2022": "60.00",
      "GeoAreaName": "Kazakhstan"
    },
    {
      "2018": "83.33",
      "2020": "83.33",
      "2022": "83.33",
      "GeoAreaName": "Kenya"
    },
    {
      "2018": "",
      "2020": "100.00",
      "2022": "100.00",
      "GeoAreaName": "Kyrgyzstan"
    },
    {
      "2018": "",
      "2020": "80.57",
      "2022": "76.77",
      "GeoAreaName": "Landlocked developing countries (LLDCs)"
    },
    {
      "2018": "",
      "2020": "73.50",
      "2022": "68.40",
      "GeoAreaName": "Latin America and the Caribbean"
    },
    {
      "2018": "",
      "2020": "70.00",
      "2022": "70.00",
      "GeoAreaName": "Latvia"
    },
    {
      "2018": "",
      "2020": "67.33",
      "2022": "64.01",
      "GeoAreaName": "Least Developed Countries (LDCs)"
    },
    {
      "2018": "27.27",
      "2020": "27.27",
      "2022": "27.27",
      "GeoAreaName": "Lebanon"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "72.73",
      "GeoAreaName": "Liberia"
    },
    {
      "2018": "70.00",
      "2020": "70.00",
      "2022": "70.00",
      "GeoAreaName": "Lithuania"
    },
    {
      "2018": "",
      "2020": "70.00",
      "2022": "70.00",
      "GeoAreaName": "Luxembourg"
    },
    {
      "2018": "30.00",
      "2020": "30.00",
      "2022": "30.00",
      "GeoAreaName": "Madagascar"
    },
    {
      "2018": "",
      "2020": "54.55",
      "2022": "54.55",
      "GeoAreaName": "Malawi"
    },
    {
      "2018": "33.33",
      "2020": "33.33",
      "2022": "33.33",
      "GeoAreaName": "Malaysia"
    },
    {
      "2018": "",
      "2020": "80.00",
      "2022": "80.00",
      "GeoAreaName": "Malta"
    },
    {
      "2018": "",
      "2020": "58.33",
      "2022": "58.33",
      "GeoAreaName": "Mauritius"
    },
    {
      "2018": "90.00",
      "2020": "90.00",
      "2022": "90.00",
      "GeoAreaName": "Mexico"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "90.00",
      "GeoAreaName": "Mongolia"
    },
    {
      "2018": "",
      "2020": "100.00",
      "2022": "100.00",
      "GeoAreaName": "Montenegro"
    },
    {
      "2018": "",
      "2020": "63.64",
      "2022": "63.64",
      "GeoAreaName": "Morocco"
    },
    {
      "2018": "63.64",
      "2020": "63.64",
      "2022": "63.64",
      "GeoAreaName": "Mozambique"
    },
    {
      "2018": "",
      "2020": "72.73",
      "2022": "72.73",
      "GeoAreaName": "Namibia"
    },
    {
      "2018": "",
      "2020": "70.00",
      "2022": "70.00",
      "GeoAreaName": "Nepal"
    },
    {
      "2018": "70.00",
      "2020": "70.00",
      "2022": "70.00",
      "GeoAreaName": "Netherlands (Kingdom of the)"
    },
    {
      "2018": "",
      "2020": "70.00",
      "2022": "70.00",
      "GeoAreaName": "New Zealand"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "70.00",
      "GeoAreaName": "Nicaragua"
    },
    {
      "2018": "58.33",
      "2020": "58.33",
      "2022": "58.33",
      "GeoAreaName": "Nigeria"
    },
    {
      "2018": "",
      "2020": "100.00",
      "2022": "100.00",
      "GeoAreaName": "North Macedonia"
    },
    {
      "2018": "",
      "2020": "54.14",
      "2022": "59.09",
      "GeoAreaName": "Northern Africa and Western Asia"
    },
    {
      "2018": "",
      "2020": "70.00",
      "2022": "70.00",
      "GeoAreaName": "Norway"
    },
    {
      "2018": "",
      "2020": "60.00",
      "2022": "62.42",
      "GeoAreaName": "Oceania (exc. Australia and New Zealand)"
    },
    {
      "2018": "50.00",
      "2020": "50.00",
      "2022": "50.00",
      "GeoAreaName": "Pakistan"
    },
    {
      "2018": "80.00",
      "2020": "80.00",
      "2022": "80.00",
      "GeoAreaName": "Panama"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "63.64",
      "GeoAreaName": "Papua New Guinea"
    },
    {
      "2018": "80.00",
      "2020": "80.00",
      "2022": "80.00",
      "GeoAreaName": "Paraguay"
    },
    {
      "2018": "80.00",
      "2020": "80.00",
      "2022": "80.00",
      "GeoAreaName": "Peru"
    },
    {
      "2018": "70.00",
      "2020": "70.00",
      "2022": "70.00",
      "GeoAreaName": "Philippines"
    },
    {
      "2018": "",
      "2020": "100.00",
      "2022": "100.00",
      "GeoAreaName": "Poland"
    },
    {
      "2018": "",
      "2020": "100.00",
      "2022": "100.00",
      "GeoAreaName": "Portugal"
    },
    {
      "2018": "",
      "2020": "90.00",
      "2022": "90.00",
      "GeoAreaName": "Republic of Korea"
    },
    {
      "2018": "",
      "2020": "100.00",
      "2022": "100.00",
      "GeoAreaName": "Republic of Moldova"
    },
    {
      "2018": "",
      "2020": "70.00",
      "2022": "70.00",
      "GeoAreaName": "Romania"
    },
    {
      "2018": "",
      "2020": "81.82",
      "2022": "81.82",
      "GeoAreaName": "Rwanda"
    },
    {
      "2018": "90.00",
      "2020": "90.00",
      "2022": "90.00",
      "GeoAreaName": "Serbia"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "60.00",
      "GeoAreaName": "Seychelles"
    },
    {
      "2018": "",
      "2020": "70.00",
      "2022": "70.00",
      "GeoAreaName": "Slovakia"
    },
    {
      "2018": "90.00",
      "2020": "90.00",
      "2022": "90.00",
      "GeoAreaName": "Slovenia"
    },
    {
      "2018": "",
      "2020": "57.29",
      "2022": "53.04",
      "GeoAreaName": "Small island developing States (SIDS)"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "63.64",
      "GeoAreaName": "Solomon Islands"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "72.73",
      "GeoAreaName": "South Sudan"
    },
    {
      "2018": "100.00",
      "2020": "100.00",
      "2022": "100.00",
      "GeoAreaName": "Spain"
    },
    {
      "2018": "63.64",
      "2020": "63.64",
      "2022": "63.64",
      "GeoAreaName": "State of Palestine"
    },
    {
      "2018": "",
      "2020": "65.46",
      "2022": "64.50",
      "GeoAreaName": "Sub-Saharan Africa"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "50.00",
      "GeoAreaName": "Sudan"
    },
    {
      "2018": "",
      "2020": "50.00",
      "2022": "50.00",
      "GeoAreaName": "Suriname"
    },
    {
      "2018": "80.00",
      "2020": "80.00",
      "2022": "80.00",
      "GeoAreaName": "Sweden"
    },
    {
      "2018": "",
      "2020": "70.00",
      "2022": "70.00",
      "GeoAreaName": "Switzerland"
    },
    {
      "2018": "",
      "2020": "50.00",
      "2022": "50.00",
      "GeoAreaName": "Thailand"
    },
    {
      "2018": "70.00",
      "2020": "70.00",
      "2022": "70.00",
      "GeoAreaName": "Trinidad and Tobago"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "80.00",
      "GeoAreaName": "Tunisia"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "70.00",
      "GeoAreaName": "Türkiye"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "70.00",
      "GeoAreaName": "Turkmenistan"
    },
    {
      "2018": "83.33",
      "2020": "83.33",
      "2022": "75.00",
      "GeoAreaName": "Uganda"
    },
    {
      "2018": "100.00",
      "2020": "100.00",
      "2022": "100.00",
      "GeoAreaName": "Ukraine"
    },
    {
      "2018": "9.09",
      "2020": "18.18",
      "2022": "18.18",
      "GeoAreaName": "United Arab Emirates"
    },
    {
      "2018": "70.00",
      "2020": "70.00",
      "2022": "70.00",
      "GeoAreaName": "United Kingdom of Great Britain and Northern Ireland"
    },
    {
      "2018": "70.00",
      "2020": "70.00",
      "2022": "70.00",
      "GeoAreaName": "United Republic of Tanzania"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "70.00",
      "GeoAreaName": "United States of America"
    },
    {
      "2018": "",
      "2020": "50.00",
      "2022": "50.00",
      "GeoAreaName": "Uruguay"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "70.00",
      "GeoAreaName": "Uzbekistan"
    },
    {
      "2018": "70.00",
      "2020": "70.00",
      "2022": "70.00",
      "GeoAreaName": "Viet Nam"
    },
    {
      "2018": "69.72",
      "2020": "71.55",
      "2022": "70.15",
      "GeoAreaName": "World"
    },
    {
      "2018": "",
      "2020": "72.73",
      "2022": "72.73",
      "GeoAreaName": "Zimbabwe"
    }
  ]
};

export const proportionOfWomenAged2024YearsWhoWereMarriedOrInAUnionBeforeAge15 = {
  "title": "Proportion of Women Aged 20 24 Years Who Were Married or in a Union Before Age 15",
  "description": "This table presents the percentage of women aged 20-24 who were married or entered into a union before the age of 15. Early marriage at such a young age is a significant indicator of gender inequality, severely limiting educational and economic opportunities for women and increasing their vulnerability to climate-related risks. Girls who marry early are often more exposed to poverty, health risks, and reduced autonomy, making them less resilient to the impacts of climate disasters. In the context of climate change, early marriage compounds the challenges women face, as it often prevents them from accessing resources, education, and decision-making power, all of which are critical for coping with environmental crises. Addressing the root causes of early marriage is vital for improving gender equality and ensuring that all individuals have the capacity to adapt to the growing impacts of climate change.",
  "category": "Marriage and Family",
  "type": "country-data",
  "data": [
    {
      "2018": "1.4",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Albania",
      "Age": "20-24"
    },
    {
      "2018": "",
      "2020": "2.4",
      "2022": "",
      "GeoAreaName": "Argentina",
      "Age": "20-24"
    },
    {
      "2018": "",
      "2020": "0",
      "2022": "",
      "GeoAreaName": "Belgium",
      "Age": "20-24"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "5.9",
      "GeoAreaName": "Benin",
      "Age": "20-24"
    },
    {
      "2018": "1.8",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Cabo Verde",
      "Age": "20-24"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "1.9",
      "GeoAreaName": "Cambodia",
      "Age": "20-24"
    },
    {
      "2018": "10.7",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Cameroon",
      "Age": "20-24"
    },
    {
      "2018": "8.403",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Central and Southern Asia",
      "Age": "20-24"
    },
    {
      "2018": "0.1",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Central Asia",
      "Age": "20-24"
    },
    {
      "2018": "",
      "2020": "0.1",
      "2022": "",
      "GeoAreaName": "China",
      "Age": "20-24"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "4.9",
      "GeoAreaName": "Comoros",
      "Age": "20-24"
    },
    {
      "2018": "2",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Costa Rica",
      "Age": "20-24"
    },
    {
      "2018": "8.4",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Democratic Republic of the Congo",
      "Age": "20-24"
    },
    {
      "2018": "1.012",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Eastern and South-Eastern Asia",
      "Age": "20-24"
    },
    {
      "2018": "0.148",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Eastern Asia",
      "Age": "20-24"
    },
    {
      "2018": "3.8",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Ecuador",
      "Age": "20-24"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "0.1",
      "GeoAreaName": "Eswatini",
      "Age": "20-24"
    },
    {
      "2018": "",
      "2020": "5.6",
      "2022": "",
      "GeoAreaName": "Gambia",
      "Age": "20-24"
    },
    {
      "2018": "0.3",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Georgia",
      "Age": "20-24"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "3.3",
      "GeoAreaName": "Ghana",
      "Age": "20-24"
    },
    {
      "2018": "17",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Guinea",
      "Age": "20-24"
    },
    {
      "2018": "",
      "2020": "6.3",
      "2022": "",
      "GeoAreaName": "Guyana",
      "Age": "20-24"
    },
    {
      "2018": "7.2",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Iraq",
      "Age": "20-24"
    },
    {
      "2018": "1.5",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Jordan",
      "Age": "20-24"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "2.2",
      "GeoAreaName": "Kenya",
      "Age": "20-24"
    },
    {
      "2018": "0.3",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Kyrgyzstan",
      "Age": "20-24"
    },
    {
      "2018": "10.183",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Landlocked developing countries (LLDCs)",
      "Age": "20-24"
    },
    {
      "2018": "4.941",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Latin America and the Caribbean",
      "Age": "20-24"
    },
    {
      "2018": "12.467",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Least Developed Countries (LDCs)",
      "Age": "20-24"
    },
    {
      "2018": "1",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Lesotho",
      "Age": "20-24"
    },
    {
      "2018": "",
      "2020": "5.8",
      "2022": "",
      "GeoAreaName": "Liberia",
      "Age": "20-24"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "0",
      "GeoAreaName": "Lithuania",
      "Age": "20-24"
    },
    {
      "2018": "",
      "2020": "7.5",
      "2022": "",
      "GeoAreaName": "Malawi",
      "Age": "20-24"
    },
    {
      "2018": "15.9",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Mali",
      "Age": "20-24"
    },
    {
      "2018": "3.6",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Mexico",
      "Age": "20-24"
    },
    {
      "2018": "0.9",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Mongolia",
      "Age": "20-24"
    },
    {
      "2018": "1.9",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Montenegro",
      "Age": "20-24"
    },
    {
      "2018": "0.5",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Morocco",
      "Age": "20-24"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "5.8",
      "GeoAreaName": "Nepal",
      "Age": "20-24"
    },
    {
      "2018": "1.632",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Northern Africa",
      "Age": "20-24"
    },
    {
      "2018": "3.108",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Northern Africa and Western Asia",
      "Age": "20-24"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "0",
      "GeoAreaName": "Norway",
      "Age": "20-24"
    },
    {
      "2018": "8.498",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Oceania (exc. Australia and New Zealand)",
      "Age": "20-24"
    },
    {
      "2018": "3.6",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Pakistan",
      "Age": "20-24"
    },
    {
      "2018": "8",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Papua New Guinea",
      "Age": "20-24"
    },
    {
      "2018": "",
      "2020": "2",
      "2022": "",
      "GeoAreaName": "Peru",
      "Age": "20-24"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "1.5",
      "GeoAreaName": "Philippines",
      "Age": "20-24"
    },
    {
      "2018": "",
      "2020": "0.3",
      "2022": "",
      "GeoAreaName": "Rwanda",
      "Age": "20-24"
    },
    {
      "2018": "",
      "2020": "0.9",
      "2022": "",
      "GeoAreaName": "Samoa",
      "Age": "20-24"
    },
    {
      "2018": "6.2",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Small island developing States (SIDS)",
      "Age": "20-24"
    },
    {
      "2018": "2.443",
      "2020": "",
      "2022": "",
      "GeoAreaName": "South-Eastern Asia",
      "Age": "20-24"
    },
    {
      "2018": "8.713",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Southern Asia",
      "Age": "20-24"
    },
    {
      "2018": "",
      "2020": "0.7",
      "2022": "",
      "GeoAreaName": "State of Palestine",
      "Age": "20-24"
    },
    {
      "2018": "11.234",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Sub-Saharan Africa",
      "Age": "20-24"
    },
    {
      "2018": "8.8",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Suriname",
      "Age": "20-24"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "5.5",
      "GeoAreaName": "Thailand",
      "Age": "20-24"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "0.7",
      "GeoAreaName": "Trinidad and Tobago",
      "Age": "20-24"
    },
    {
      "2018": "0",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Tunisia",
      "Age": "20-24"
    },
    {
      "2018": "2",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Türkiye",
      "Age": "20-24"
    },
    {
      "2018": "",
      "2020": "0",
      "2022": "",
      "GeoAreaName": "Turks and Caicos Islands",
      "Age": "20-24"
    },
    {
      "2018": "",
      "2020": "0",
      "2022": "",
      "GeoAreaName": "Tuvalu",
      "Age": "20-24"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "5.2",
      "GeoAreaName": "United Republic of Tanzania",
      "Age": "20-24"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "0.2",
      "GeoAreaName": "Uzbekistan",
      "Age": "20-24"
    },
    {
      "2018": "4.555",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Western Asia",
      "Age": "20-24"
    },
    {
      "2018": "5.325",
      "2020": "",
      "2022": "",
      "GeoAreaName": "World",
      "Age": "20-24"
    },
    {
      "2018": "5.2",
      "2020": "",
      "2022": "",
      "GeoAreaName": "Zambia",
      "Age": "20-24"
    }
  ]
};

export const proportionOfEverPartneredWomenAndGirlsSubjectedToPhysicalAndSexualViolenceByACurrentOrFormerIntimatePartnerInThePrevious12Months = {
  "title": "Proportion of Ever Partnered Women and Girls Subjected To Physical and Sexual Violence By A Current Or Former Intimate Partner In The Previous 12 Months",
  "description": "This table provides data on the percentage of women and girls who have experienced physical or sexual violence from a current or former intimate partner within the past 12 months. Gender-based violence is a critical issue that intersects with both gender inequality and climate vulnerability. Women and girls subjected to intimate partner violence often face greater social and economic marginalization, which can limit their capacity to cope with the effects of climate change. In regions prone to climate-related disasters, survivors of violence may struggle to access support services or resources that are essential for recovery and resilience. This data is crucial for understanding the compounded vulnerabilities women face, and it highlights the need for integrated strategies that address both gender-based violence and climate resilience to ensure equitable and sustainable responses to environmental challenges.",
  "category": "Violence Against",
  "type": "country-data",
  "data": [
    {
      "2018": "33.6",
      "GeoAreaName": "Afghanistan",
      "Age": "15+"
    },
    {
      "2018": "34.7",
      "GeoAreaName": "Afghanistan",
      "Age": "15-49"
    },
    {
      "2018": "5.1",
      "GeoAreaName": "Albania",
      "Age": "15+"
    },
    {
      "2018": "6.2",
      "GeoAreaName": "Albania",
      "Age": "15-49"
    },
    {
      "2018": "22.1",
      "GeoAreaName": "Angola",
      "Age": "15+"
    },
    {
      "2018": "24.7",
      "GeoAreaName": "Angola",
      "Age": "15-49"
    },
    {
      "2018": "3.7",
      "GeoAreaName": "Argentina",
      "Age": "15+"
    },
    {
      "2018": "4.5",
      "GeoAreaName": "Argentina",
      "Age": "15-49"
    },
    {
      "2018": "4.5",
      "GeoAreaName": "Armenia",
      "Age": "15+"
    },
    {
      "2018": "4.6",
      "GeoAreaName": "Armenia",
      "Age": "15-49"
    },
    {
      "2018": "2.0",
      "GeoAreaName": "Australia",
      "Age": "15+"
    },
    {
      "2018": "2.9",
      "GeoAreaName": "Australia",
      "Age": "15-49"
    },
    {
      "2018": "2.2",
      "GeoAreaName": "Australia and New Zealand",
      "Age": "15+"
    },
    {
      "2018": "3.2",
      "GeoAreaName": "Australia and New Zealand",
      "Age": "15-49"
    },
    {
      "2018": "2.8",
      "GeoAreaName": "Austria",
      "Age": "15+"
    },
    {
      "2018": "3.6",
      "GeoAreaName": "Austria",
      "Age": "15-49"
    },
    {
      "2018": "4.0",
      "GeoAreaName": "Azerbaijan",
      "Age": "15+"
    },
    {
      "2018": "5.2",
      "GeoAreaName": "Azerbaijan",
      "Age": "15-49"
    },
    {
      "2018": "20.8",
      "GeoAreaName": "Bangladesh",
      "Age": "15+"
    },
    {
      "2018": "23.2",
      "GeoAreaName": "Bangladesh",
      "Age": "15-49"
    },
    {
      "2018": "5.2",
      "GeoAreaName": "Belarus",
      "Age": "15+"
    },
    {
      "2018": "6.3",
      "GeoAreaName": "Belarus",
      "Age": "15-49"
    },
    {
      "2018": "3.3",
      "GeoAreaName": "Belgium",
      "Age": "15+"
    },
    {
      "2018": "4.8",
      "GeoAreaName": "Belgium",
      "Age": "15-49"
    },
    {
      "2018": "6.6",
      "GeoAreaName": "Belize",
      "Age": "15+"
    },
    {
      "2018": "7.8",
      "GeoAreaName": "Belize",
      "Age": "15-49"
    },
    {
      "2018": "13.2",
      "GeoAreaName": "Benin",
      "Age": "15+"
    },
    {
      "2018": "14.6",
      "GeoAreaName": "Benin",
      "Age": "15-49"
    },
    {
      "2018": "8.4",
      "GeoAreaName": "Bhutan",
      "Age": "15+"
    },
    {
      "2018": "8.6",
      "GeoAreaName": "Bhutan",
      "Age": "15-49"
    },
    {
      "2018": "15.5",
      "GeoAreaName": "Bolivia (Plurinational State of)",
      "Age": "15+"
    },
    {
      "2018": "18.3",
      "GeoAreaName": "Bolivia (Plurinational State of)",
      "Age": "15-49"
    },
    {
      "2018": "2.7",
      "GeoAreaName": "Bosnia and Herzegovina",
      "Age": "15+"
    },
    {
      "2018": "3.4",
      "GeoAreaName": "Bosnia and Herzegovina",
      "Age": "15-49"
    },
    {
      "2018": "15.2",
      "GeoAreaName": "Botswana",
      "Age": "15+"
    },
    {
      "2018": "17.1",
      "GeoAreaName": "Botswana",
      "Age": "15-49"
    },
    {
      "2018": "5.3",
      "GeoAreaName": "Brazil",
      "Age": "15+"
    },
    {
      "2018": "6.5",
      "GeoAreaName": "Brazil",
      "Age": "15-49"
    },
    {
      "2018": "4.1",
      "GeoAreaName": "Bulgaria",
      "Age": "15+"
    },
    {
      "2018": "5.9",
      "GeoAreaName": "Bulgaria",
      "Age": "15-49"
    },
    {
      "2018": "10.6",
      "GeoAreaName": "Burkina Faso",
      "Age": "15+"
    },
    {
      "2018": "11.2",
      "GeoAreaName": "Burkina Faso",
      "Age": "15-49"
    },
    {
      "2018": "20.1",
      "GeoAreaName": "Burundi",
      "Age": "15+"
    },
    {
      "2018": "22.1",
      "GeoAreaName": "Burundi",
      "Age": "15-49"
    },
    {
      "2018": "10.2",
      "GeoAreaName": "Cabo Verde",
      "Age": "15+"
    },
    {
      "2018": "10.9",
      "GeoAreaName": "Cabo Verde",
      "Age": "15-49"
    },
    {
      "2018": "8.2",
      "GeoAreaName": "Cambodia",
      "Age": "15+"
    },
    {
      "2018": "9.1",
      "GeoAreaName": "Cambodia",
      "Age": "15-49"
    },
    {
      "2018": "19.0",
      "GeoAreaName": "Cameroon",
      "Age": "15+"
    },
    {
      "2018": "22.0",
      "GeoAreaName": "Cameroon",
      "Age": "15-49"
    },
    {
      "2018": "1.7",
      "GeoAreaName": "Canada",
      "Age": "15+"
    },
    {
      "2018": "2.6",
      "GeoAreaName": "Canada",
      "Age": "15-49"
    },
    {
      "2018": "18.1",
      "GeoAreaName": "Central African Republic",
      "Age": "15+"
    },
    {
      "2018": "20.9",
      "GeoAreaName": "Central African Republic",
      "Age": "15-49"
    },
    {
      "2018": "7.3",
      "GeoAreaName": "Central Asia",
      "Age": "15+"
    },
    {
      "2018": "8.5",
      "GeoAreaName": "Central Asia",
      "Age": "15-49"
    },
    {
      "2018": "14.6",
      "GeoAreaName": "Chad",
      "Age": "15+"
    },
    {
      "2018": "16.2",
      "GeoAreaName": "Chad",
      "Age": "15-49"
    },
    {
      "2018": "4.8",
      "GeoAreaName": "Chile",
      "Age": "15+"
    },
    {
      "2018": "5.8",
      "GeoAreaName": "Chile",
      "Age": "15-49"
    },
    {
      "2018": "5.9",
      "GeoAreaName": "China",
      "Age": "15+"
    },
    {
      "2018": "7.6",
      "GeoAreaName": "China",
      "Age": "15-49"
    },
    {
      "2018": "1.7",
      "GeoAreaName": "China, Hong Kong Special Administrative Region",
      "Age": "15+"
    },
    {
      "2018": "2.5",
      "GeoAreaName": "China, Hong Kong Special Administrative Region",
      "Age": "15-49"
    },
    {
      "2018": "10.0",
      "GeoAreaName": "Colombia",
      "Age": "15+"
    },
    {
      "2018": "11.9",
      "GeoAreaName": "Colombia",
      "Age": "15-49"
    },
    {
      "2018": "7.3",
      "GeoAreaName": "Comoros",
      "Age": "15+"
    },
    {
      "2018": "8.2",
      "GeoAreaName": "Comoros",
      "Age": "15-49"
    },
    {
      "2018": "10.7",
      "GeoAreaName": "Cook Islands",
      "Age": "15+"
    },
    {
      "2018": "13.7",
      "GeoAreaName": "Cook Islands",
      "Age": "15-49"
    },
    {
      "2018": "5.8",
      "GeoAreaName": "Costa Rica",
      "Age": "15+"
    },
    {
      "2018": "7.2",
      "GeoAreaName": "Costa Rica",
      "Age": "15-49"
    },
    {
      "2018": "15.4",
      "GeoAreaName": "Côte d'Ivoire",
      "Age": "15+"
    },
    {
      "2018": "16.4",
      "GeoAreaName": "Côte d'Ivoire",
      "Age": "15-49"
    },
    {
      "2018": "2.8",
      "GeoAreaName": "Croatia",
      "Age": "15+"
    },
    {
      "2018": "4.0",
      "GeoAreaName": "Croatia",
      "Age": "15-49"
    },
    {
      "2018": "3.4",
      "GeoAreaName": "Cuba",
      "Age": "15+"
    },
    {
      "2018": "4.6",
      "GeoAreaName": "Cuba",
      "Age": "15-49"
    },
    {
      "2018": "3.0",
      "GeoAreaName": "Cyprus",
      "Age": "15+"
    },
    {
      "2018": "3.1",
      "GeoAreaName": "Cyprus",
      "Age": "15-49"
    },
    {
      "2018": "2.9",
      "GeoAreaName": "Czechia",
      "Age": "15+"
    },
    {
      "2018": "4.1",
      "GeoAreaName": "Czechia",
      "Age": "15-49"
    },
    {
      "2018": "31.9",
      "GeoAreaName": "Democratic Republic of the Congo",
      "Age": "15+"
    },
    {
      "2018": "35.6",
      "GeoAreaName": "Democratic Republic of the Congo",
      "Age": "15-49"
    },
    {
      "2018": "2.0",
      "GeoAreaName": "Denmark",
      "Age": "15+"
    },
    {
      "2018": "3.3",
      "GeoAreaName": "Denmark",
      "Age": "15-49"
    },
    {
      "2018": "7.8",
      "GeoAreaName": "Dominican Republic",
      "Age": "15+"
    },
    {
      "2018": "9.6",
      "GeoAreaName": "Dominican Republic",
      "Age": "15-49"
    },
    {
      "2018": "5.7",
      "GeoAreaName": "Eastern Asia",
      "Age": "15+"
    },
    {
      "2018": "7.4",
      "GeoAreaName": "Eastern Asia",
      "Age": "15-49"
    },
    {
      "2018": "5.6",
      "GeoAreaName": "Eastern Europe",
      "Age": "15+"
    },
    {
      "2018": "6.7",
      "GeoAreaName": "Eastern Europe",
      "Age": "15-49"
    },
    {
      "2018": "6.6",
      "GeoAreaName": "Ecuador",
      "Age": "15+"
    },
    {
      "2018": "8.1",
      "GeoAreaName": "Ecuador",
      "Age": "15-49"
    },
    {
      "2018": "11.9",
      "GeoAreaName": "Egypt",
      "Age": "15+"
    },
    {
      "2018": "15.1",
      "GeoAreaName": "Egypt",
      "Age": "15-49"
    },
    {
      "2018": "4.8",
      "GeoAreaName": "El Salvador",
      "Age": "15+"
    },
    {
      "2018": "5.7",
      "GeoAreaName": "El Salvador",
      "Age": "15-49"
    },
    {
      "2018": "25.6",
      "GeoAreaName": "Equatorial Guinea",
      "Age": "15+"
    },
    {
      "2018": "28.7",
      "GeoAreaName": "Equatorial Guinea",
      "Age": "15-49"
    },
    {
      "2018": "2.7",
      "GeoAreaName": "Estonia",
      "Age": "15+"
    },
    {
      "2018": "4.2",
      "GeoAreaName": "Estonia",
      "Age": "15-49"
    },
    {
      "2018": "16.0",
      "GeoAreaName": "Eswatini",
      "Age": "15+"
    },
    {
      "2018": "17.7",
      "GeoAreaName": "Eswatini",
      "Age": "15-49"
    },
    {
      "2018": "22.8",
      "GeoAreaName": "Ethiopia",
      "Age": "15+"
    },
    {
      "2018": "26.5",
      "GeoAreaName": "Ethiopia",
      "Age": "15-49"
    },
    {
      "2018": "4.2",
      "GeoAreaName": "Europe",
      "Age": "15+"
    },
    {
      "2018": "5.3",
      "GeoAreaName": "Europe",
      "Age": "15-49"
    },
    {
      "2018": "16.4",
      "GeoAreaName": "Fiji",
      "Age": "15+"
    },
    {
      "2018": "23.2",
      "GeoAreaName": "Fiji",
      "Age": "15-49"
    },
    {
      "2018": "5.6",
      "GeoAreaName": "Finland",
      "Age": "15+"
    },
    {
      "2018": "8.1",
      "GeoAreaName": "Finland",
      "Age": "15-49"
    },
    {
      "2018": "3.5",
      "GeoAreaName": "France",
      "Age": "15+"
    },
    {
      "2018": "5.0",
      "GeoAreaName": "France",
      "Age": "15-49"
    },
    {
      "2018": "20.9",
      "GeoAreaName": "Gabon",
      "Age": "15+"
    },
    {
      "2018": "22.0",
      "GeoAreaName": "Gabon",
      "Age": "15-49"
    },
    {
      "2018": "9.0",
      "GeoAreaName": "Gambia",
      "Age": "15+"
    },
    {
      "2018": "10.0",
      "GeoAreaName": "Gambia",
      "Age": "15-49"
    },
    {
      "2018": "2.2",
      "GeoAreaName": "Georgia",
      "Age": "15+"
    },
    {
      "2018": "2.9",
      "GeoAreaName": "Georgia",
      "Age": "15-49"
    },
    {
      "2018": "9.5",
      "GeoAreaName": "Ghana",
      "Age": "15+"
    },
    {
      "2018": "10.2",
      "GeoAreaName": "Ghana",
      "Age": "15-49"
    },
    {
      "2018": "3.7",
      "GeoAreaName": "Greece",
      "Age": "15+"
    },
    {
      "2018": "5.1",
      "GeoAreaName": "Greece",
      "Age": "15-49"
    },
    {
      "2018": "5.6",
      "GeoAreaName": "Grenada",
      "Age": "15+"
    },
    {
      "2018": "7.8",
      "GeoAreaName": "Grenada",
      "Age": "15-49"
    },
    {
      "2018": "6.3",
      "GeoAreaName": "Guatemala",
      "Age": "15+"
    },
    {
      "2018": "7.3",
      "GeoAreaName": "Guatemala",
      "Age": "15-49"
    },
    {
      "2018": "18.6",
      "GeoAreaName": "Guinea",
      "Age": "15+"
    },
    {
      "2018": "20.8",
      "GeoAreaName": "Guinea",
      "Age": "15-49"
    },
    {
      "2018": "8.5",
      "GeoAreaName": "Guyana",
      "Age": "15+"
    },
    {
      "2018": "10.5",
      "GeoAreaName": "Guyana",
      "Age": "15-49"
    },
    {
      "2018": "10.1",
      "GeoAreaName": "Haiti",
      "Age": "15+"
    },
    {
      "2018": "12.2",
      "GeoAreaName": "Haiti",
      "Age": "15-49"
    },
    {
      "2018": "6.8",
      "GeoAreaName": "Honduras",
      "Age": "15+"
    },
    {
      "2018": "7.2",
      "GeoAreaName": "Honduras",
      "Age": "15-49"
    },
    {
      "2018": "4.2",
      "GeoAreaName": "Hungary",
      "Age": "15+"
    },
    {
      "2018": "5.7",
      "GeoAreaName": "Hungary",
      "Age": "15-49"
    },
    {
      "2018": "1.8",
      "GeoAreaName": "Iceland",
      "Age": "15+"
    },
    {
      "2018": "2.8",
      "GeoAreaName": "Iceland",
      "Age": "15-49"
    },
    {
      "2018": "15.9",
      "GeoAreaName": "India",
      "Age": "15+"
    },
    {
      "2018": "18.4",
      "GeoAreaName": "India",
      "Age": "15-49"
    },
    {
      "2018": "7.5",
      "GeoAreaName": "Indonesia",
      "Age": "15+"
    },
    {
      "2018": "8.9",
      "GeoAreaName": "Indonesia",
      "Age": "15-49"
    },
    {
      "2018": "15.2",
      "GeoAreaName": "Iran (Islamic Republic of)",
      "Age": "15+"
    },
    {
      "2018": "17.6",
      "GeoAreaName": "Iran (Islamic Republic of)",
      "Age": "15-49"
    },
    {
      "2018": "2.7",
      "GeoAreaName": "Ireland",
      "Age": "15+"
    },
    {
      "2018": "3.3",
      "GeoAreaName": "Ireland",
      "Age": "15-49"
    },
    {
      "2018": "4.4",
      "GeoAreaName": "Israel",
      "Age": "15+"
    },
    {
      "2018": "5.6",
      "GeoAreaName": "Israel",
      "Age": "15-49"
    },
    {
      "2018": "2.2",
      "GeoAreaName": "Italy",
      "Age": "15+"
    },
    {
      "2018": "3.5",
      "GeoAreaName": "Italy",
      "Age": "15-49"
    },
    {
      "2018": "5.7",
      "GeoAreaName": "Jamaica",
      "Age": "15+"
    },
    {
      "2018": "7.3",
      "GeoAreaName": "Jamaica",
      "Age": "15-49"
    },
    {
      "2018": "3.0",
      "GeoAreaName": "Japan",
      "Age": "15+"
    },
    {
      "2018": "3.9",
      "GeoAreaName": "Japan",
      "Age": "15-49"
    },
    {
      "2018": "12.1",
      "GeoAreaName": "Jordan",
      "Age": "15+"
    },
    {
      "2018": "13.5",
      "GeoAreaName": "Jordan",
      "Age": "15-49"
    },
    {
      "2018": "4.9",
      "GeoAreaName": "Kazakhstan",
      "Age": "15+"
    },
    {
      "2018": "6.0",
      "GeoAreaName": "Kazakhstan",
      "Age": "15-49"
    },
    {
      "2018": "21.4",
      "GeoAreaName": "Kenya",
      "Age": "15+"
    },
    {
      "2018": "22.8",
      "GeoAreaName": "Kenya",
      "Age": "15-49"
    },
    {
      "2018": "19.5",
      "GeoAreaName": "Kiribati",
      "Age": "15+"
    },
    {
      "2018": "25.2",
      "GeoAreaName": "Kiribati",
      "Age": "15-49"
    },
    {
      "2018": "11.6",
      "GeoAreaName": "Kyrgyzstan",
      "Age": "15+"
    },
    {
      "2018": "13.3",
      "GeoAreaName": "Kyrgyzstan",
      "Age": "15-49"
    },
    {
      "2018": "16.8",
      "GeoAreaName": "Landlocked developing countries (LLDCs)",
      "Age": "15+"
    },
    {
      "2018": "19.2",
      "GeoAreaName": "Landlocked developing countries (LLDCs)",
      "Age": "15-49"
    },
    {
      "2018": "6.7",
      "GeoAreaName": "Lao People's Democratic Republic",
      "Age": "15+"
    },
    {
      "2018": "8.0",
      "GeoAreaName": "Lao People's Democratic Republic",
      "Age": "15-49"
    },
    {
      "2018": "7.0",
      "GeoAreaName": "Latin America and the Caribbean",
      "Age": "15+"
    },
    {
      "2018": "8.3",
      "GeoAreaName": "Latin America and the Caribbean",
      "Age": "15-49"
    },
    {
      "2018": "4.4",
      "GeoAreaName": "Latvia",
      "Age": "15+"
    },
    {
      "2018": "6.3",
      "GeoAreaName": "Latvia",
      "Age": "15-49"
    },
    {
      "2018": "19.7",
      "GeoAreaName": "Least Developed Countries (LDCs)",
      "Age": "15+"
    },
    {
      "2018": "22.0",
      "GeoAreaName": "Least Developed Countries (LDCs)",
      "Age": "15-49"
    },
    {
      "2018": "14.3",
      "GeoAreaName": "Lesotho",
      "Age": "15+"
    },
    {
      "2018": "16.5",
      "GeoAreaName": "Lesotho",
      "Age": "15-49"
    },
    {
      "2018": "23.2",
      "GeoAreaName": "Liberia",
      "Age": "15+"
    },
    {
      "2018": "26.9",
      "GeoAreaName": "Liberia",
      "Age": "15-49"
    },
    {
      "2018": "4.1",
      "GeoAreaName": "Lithuania",
      "Age": "15+"
    },
    {
      "2018": "5.2",
      "GeoAreaName": "Lithuania",
      "Age": "15-49"
    },
    {
      "2018": "2.7",
      "GeoAreaName": "Luxembourg",
      "Age": "15+"
    },
    {
      "2018": "3.5",
      "GeoAreaName": "Luxembourg",
      "Age": "15-49"
    },
    {
      "2018": "15.2",
      "GeoAreaName": "Malawi",
      "Age": "15+"
    },
    {
      "2018": "16.6",
      "GeoAreaName": "Malawi",
      "Age": "15-49"
    },
    {
      "2018": "5.3",
      "GeoAreaName": "Maldives",
      "Age": "15+"
    },
    {
      "2018": "6.1",
      "GeoAreaName": "Maldives",
      "Age": "15-49"
    },
    {
      "2018": "16.7",
      "GeoAreaName": "Mali",
      "Age": "15+"
    },
    {
      "2018": "18.4",
      "GeoAreaName": "Mali",
      "Age": "15-49"
    },
    {
      "2018": "3.1",
      "GeoAreaName": "Malta",
      "Age": "15+"
    },
    {
      "2018": "4.0",
      "GeoAreaName": "Malta",
      "Age": "15-49"
    },
    {
      "2018": "15.0",
      "GeoAreaName": "Marshall Islands",
      "Age": "15+"
    },
    {
      "2018": "19.3",
      "GeoAreaName": "Marshall Islands",
      "Age": "15-49"
    },
    {
      "2018": "24.5",
      "GeoAreaName": "Melanesia",
      "Age": "15+"
    },
    {
      "2018": "29.8",
      "GeoAreaName": "Melanesia",
      "Age": "15-49"
    },
    {
      "2018": "8.9",
      "GeoAreaName": "Mexico",
      "Age": "15+"
    },
    {
      "2018": "9.9",
      "GeoAreaName": "Mexico",
      "Age": "15-49"
    },
    {
      "2018": "17.0",
      "GeoAreaName": "Micronesia",
      "Age": "15+"
    },
    {
      "2018": "21.6",
      "GeoAreaName": "Micronesia",
      "Age": "15-49"
    },
    {
      "2018": "18.8",
      "GeoAreaName": "Micronesia (Federated States of)",
      "Age": "15+"
    },
    {
      "2018": "21.1",
      "GeoAreaName": "Micronesia (Federated States of)",
      "Age": "15-49"
    },
    {
      "2018": "9.3",
      "GeoAreaName": "Mongolia",
      "Age": "15+"
    },
    {
      "2018": "11.5",
      "GeoAreaName": "Mongolia",
      "Age": "15-49"
    },
    {
      "2018": "3.5",
      "GeoAreaName": "Montenegro",
      "Age": "15+"
    },
    {
      "2018": "4.4",
      "GeoAreaName": "Montenegro",
      "Age": "15-49"
    },
    {
      "2018": "8.5",
      "GeoAreaName": "Morocco",
      "Age": "15+"
    },
    {
      "2018": "10.5",
      "GeoAreaName": "Morocco",
      "Age": "15-49"
    },
    {
      "2018": "15.7",
      "GeoAreaName": "Mozambique",
      "Age": "15+"
    },
    {
      "2018": "16.4",
      "GeoAreaName": "Mozambique",
      "Age": "15-49"
    },
    {
      "2018": "8.7",
      "GeoAreaName": "Myanmar",
      "Age": "15+"
    },
    {
      "2018": "10.7",
      "GeoAreaName": "Myanmar",
      "Age": "15-49"
    },
    {
      "2018": "14.9",
      "GeoAreaName": "Namibia",
      "Age": "15+"
    },
    {
      "2018": "15.9",
      "GeoAreaName": "Namibia",
      "Age": "15-49"
    },
    {
      "2018": "15.5",
      "GeoAreaName": "Nauru",
      "Age": "15+"
    },
    {
      "2018": "20.0",
      "GeoAreaName": "Nauru",
      "Age": "15-49"
    },
    {
      "2018": "10.3",
      "GeoAreaName": "Nepal",
      "Age": "15+"
    },
    {
      "2018": "11.4",
      "GeoAreaName": "Nepal",
      "Age": "15-49"
    },
    {
      "2018": "3.5",
      "GeoAreaName": "Netherlands (Kingdom of the)",
      "Age": "15+"
    },
    {
      "2018": "5.1",
      "GeoAreaName": "Netherlands (Kingdom of the)",
      "Age": "15-49"
    },
    {
      "2018": "3.2",
      "GeoAreaName": "New Zealand",
      "Age": "15+"
    },
    {
      "2018": "4.2",
      "GeoAreaName": "New Zealand",
      "Age": "15-49"
    },
    {
      "2018": "5.6",
      "GeoAreaName": "Nicaragua",
      "Age": "15+"
    },
    {
      "2018": "6.4",
      "GeoAreaName": "Nicaragua",
      "Age": "15-49"
    },
    {
      "2018": "13.9",
      "GeoAreaName": "Niger",
      "Age": "15+"
    },
    {
      "2018": "12.9",
      "GeoAreaName": "Niger",
      "Age": "15-49"
    },
    {
      "2018": "11.7",
      "GeoAreaName": "Nigeria",
      "Age": "15+"
    },
    {
      "2018": "13.2",
      "GeoAreaName": "Nigeria",
      "Age": "15-49"
    },
    {
      "2018": "3.3",
      "GeoAreaName": "North Macedonia",
      "Age": "15+"
    },
    {
      "2018": "4.2",
      "GeoAreaName": "North Macedonia",
      "Age": "15-49"
    },
    {
      "2018": "12.1",
      "GeoAreaName": "Northern Africa",
      "Age": "15+"
    },
    {
      "2018": "14.7",
      "GeoAreaName": "Northern Africa",
      "Age": "15-49"
    },
    {
      "2018": "4.0",
      "GeoAreaName": "Northern America",
      "Age": "15+"
    },
    {
      "2018": "5.7",
      "GeoAreaName": "Northern America",
      "Age": "15-49"
    },
    {
      "2018": "3.8",
      "GeoAreaName": "Northern Europe",
      "Age": "15+"
    },
    {
      "2018": "4.7",
      "GeoAreaName": "Northern Europe",
      "Age": "15-49"
    },
    {
      "2018": "3.4",
      "GeoAreaName": "Norway",
      "Age": "15+"
    },
    {
      "2018": "4.4",
      "GeoAreaName": "Norway",
      "Age": "15-49"
    },
    {
      "2018": "23.3",
      "GeoAreaName": "Oceania (exc. Australia and New Zealand)",
      "Age": "15+"
    },
    {
      "2018": "28.6",
      "GeoAreaName": "Oceania (exc. Australia and New Zealand)",
      "Age": "15-49"
    },
    {
      "2018": "14.6",
      "GeoAreaName": "Pakistan",
      "Age": "15+"
    },
    {
      "2018": "16.2",
      "GeoAreaName": "Pakistan",
      "Age": "15-49"
    },
    {
      "2018": "10.9",
      "GeoAreaName": "Palau",
      "Age": "15+"
    },
    {
      "2018": "13.8",
      "GeoAreaName": "Palau",
      "Age": "15-49"
    },
    {
      "2018": "6.4",
      "GeoAreaName": "Panama",
      "Age": "15+"
    },
    {
      "2018": "7.8",
      "GeoAreaName": "Panama",
      "Age": "15-49"
    },
    {
      "2018": "25.5",
      "GeoAreaName": "Papua New Guinea",
      "Age": "15+"
    },
    {
      "2018": "30.6",
      "GeoAreaName": "Papua New Guinea",
      "Age": "15-49"
    },
    {
      "2018": "4.9",
      "GeoAreaName": "Paraguay",
      "Age": "15+"
    },
    {
      "2018": "5.5",
      "GeoAreaName": "Paraguay",
      "Age": "15-49"
    },
    {
      "2018": "9.1",
      "GeoAreaName": "Peru",
      "Age": "15+"
    },
    {
      "2018": "11.1",
      "GeoAreaName": "Peru",
      "Age": "15-49"
    },
    {
      "2018": "4.9",
      "GeoAreaName": "Philippines",
      "Age": "15+"
    },
    {
      "2018": "5.9",
      "GeoAreaName": "Philippines",
      "Age": "15-49"
    },
    {
      "2018": "2.6",
      "GeoAreaName": "Poland",
      "Age": "15+"
    },
    {
      "2018": "3.1",
      "GeoAreaName": "Poland",
      "Age": "15-49"
    },
    {
      "2018": "14.3",
      "GeoAreaName": "Polynesia",
      "Age": "15+"
    },
    {
      "2018": "18.6",
      "GeoAreaName": "Polynesia",
      "Age": "15-49"
    },
    {
      "2018": "3.6",
      "GeoAreaName": "Portugal",
      "Age": "15+"
    },
    {
      "2018": "4.4",
      "GeoAreaName": "Portugal",
      "Age": "15-49"
    },
    {
      "2018": "8.8",
      "GeoAreaName": "Republic of Korea",
      "Age": "15+"
    },
    {
      "2018": "8.0",
      "GeoAreaName": "Republic of Korea",
      "Age": "15-49"
    },
    {
      "2018": "8.2",
      "GeoAreaName": "Republic of Moldova",
      "Age": "15+"
    },
    {
      "2018": "9.1",
      "GeoAreaName": "Republic of Moldova",
      "Age": "15-49"
    },
    {
      "2018": "6.7",
      "GeoAreaName": "Romania",
      "Age": "15+"
    },
    {
      "2018": "6.9",
      "GeoAreaName": "Romania",
      "Age": "15-49"
    },
    {
      "2018": "21.5",
      "GeoAreaName": "Rwanda",
      "Age": "15+"
    },
    {
      "2018": "23.5",
      "GeoAreaName": "Rwanda",
      "Age": "15-49"
    },
    {
      "2018": "13.5",
      "GeoAreaName": "Samoa",
      "Age": "15+"
    },
    {
      "2018": "17.8",
      "GeoAreaName": "Samoa",
      "Age": "15-49"
    },
    {
      "2018": "15.5",
      "GeoAreaName": "Sao Tome and Principe",
      "Age": "15+"
    },
    {
      "2018": "18.1",
      "GeoAreaName": "Sao Tome and Principe",
      "Age": "15-49"
    },
    {
      "2018": "10.8",
      "GeoAreaName": "Senegal",
      "Age": "15+"
    },
    {
      "2018": "12.4",
      "GeoAreaName": "Senegal",
      "Age": "15-49"
    },
    {
      "2018": "3.0",
      "GeoAreaName": "Serbia",
      "Age": "15+"
    },
    {
      "2018": "3.9",
      "GeoAreaName": "Serbia",
      "Age": "15-49"
    },
    {
      "2018": "17.2",
      "GeoAreaName": "Sierra Leone",
      "Age": "15+"
    },
    {
      "2018": "19.8",
      "GeoAreaName": "Sierra Leone",
      "Age": "15-49"
    },
    {
      "2018": "2.0",
      "GeoAreaName": "Singapore",
      "Age": "15+"
    },
    {
      "2018": "2.4",
      "GeoAreaName": "Singapore",
      "Age": "15-49"
    },
    {
      "2018": "4.4",
      "GeoAreaName": "Slovakia",
      "Age": "15+"
    },
    {
      "2018": "5.9",
      "GeoAreaName": "Slovakia",
      "Age": "15-49"
    },
    {
      "2018": "2.6",
      "GeoAreaName": "Slovenia",
      "Age": "15+"
    },
    {
      "2018": "3.4",
      "GeoAreaName": "Slovenia",
      "Age": "15-49"
    },
    {
      "2018": "12.0",
      "GeoAreaName": "Small island developing States (SIDS)",
      "Age": "15+"
    },
    {
      "2018": "12.0",
      "GeoAreaName": "Small island developing States (SIDS)",
      "Age": "15-49"
    },
    {
      "2018": "23.6",
      "GeoAreaName": "Solomon Islands",
      "Age": "15+"
    },
    {
      "2018": "28.1",
      "GeoAreaName": "Solomon Islands",
      "Age": "15-49"
    },
    {
      "2018": "11.0",
      "GeoAreaName": "South Africa",
      "Age": "15+"
    },
    {
      "2018": "13.1",
      "GeoAreaName": "South Africa",
      "Age": "15-49"
    },
    {
      "2018": "24.0",
      "GeoAreaName": "South Sudan",
      "Age": "15+"
    },
    {
      "2018": "26.7",
      "GeoAreaName": "South Sudan",
      "Age": "15-49"
    },
    {
      "2018": "7.3",
      "GeoAreaName": "South-Eastern Asia",
      "Age": "15+"
    },
    {
      "2018": "8.9",
      "GeoAreaName": "South-Eastern Asia",
      "Age": "15-49"
    },
    {
      "2018": "16.3",
      "GeoAreaName": "Southern Asia",
      "Age": "15+"
    },
    {
      "2018": "18.8",
      "GeoAreaName": "Southern Asia",
      "Age": "15-49"
    },
    {
      "2018": "2.7",
      "GeoAreaName": "Southern Europe",
      "Age": "15+"
    },
    {
      "2018": "3.7",
      "GeoAreaName": "Southern Europe",
      "Age": "15-49"
    },
    {
      "2018": "2.6",
      "GeoAreaName": "Spain",
      "Age": "15+"
    },
    {
      "2018": "2.9",
      "GeoAreaName": "Spain",
      "Age": "15-49"
    },
    {
      "2018": "3.3",
      "GeoAreaName": "Sri Lanka",
      "Age": "15+"
    },
    {
      "2018": "4.1",
      "GeoAreaName": "Sri Lanka",
      "Age": "15-49"
    },
    {
      "2018": "17.1",
      "GeoAreaName": "State of Palestine",
      "Age": "15+"
    },
    {
      "2018": "19.1",
      "GeoAreaName": "State of Palestine",
      "Age": "15-49"
    },
    {
      "2018": "18.2",
      "GeoAreaName": "Sub-Saharan Africa",
      "Age": "15+"
    },
    {
      "2018": "20.4",
      "GeoAreaName": "Sub-Saharan Africa",
      "Age": "15-49"
    },
    {
      "2018": "14.8",
      "GeoAreaName": "Sudan",
      "Age": "15+"
    },
    {
      "2018": "16.7",
      "GeoAreaName": "Sudan",
      "Age": "15-49"
    },
    {
      "2018": "5.9",
      "GeoAreaName": "Suriname",
      "Age": "15+"
    },
    {
      "2018": "7.7",
      "GeoAreaName": "Suriname",
      "Age": "15-49"
    },
    {
      "2018": "4.8",
      "GeoAreaName": "Sweden",
      "Age": "15+"
    },
    {
      "2018": "6.3",
      "GeoAreaName": "Sweden",
      "Age": "15-49"
    },
    {
      "2018": "1.2",
      "GeoAreaName": "Switzerland",
      "Age": "15+"
    },
    {
      "2018": "1.7",
      "GeoAreaName": "Switzerland",
      "Age": "15-49"
    },
    {
      "2018": "12.0",
      "GeoAreaName": "Tajikistan",
      "Age": "15+"
    },
    {
      "2018": "14.0",
      "GeoAreaName": "Tajikistan",
      "Age": "15-49"
    },
    {
      "2018": "7.1",
      "GeoAreaName": "Thailand",
      "Age": "15+"
    },
    {
      "2018": "9.3",
      "GeoAreaName": "Thailand",
      "Age": "15-49"
    },
    {
      "2018": "24.6",
      "GeoAreaName": "Timor-Leste",
      "Age": "15+"
    },
    {
      "2018": "28.2",
      "GeoAreaName": "Timor-Leste",
      "Age": "15-49"
    },
    {
      "2018": "11.2",
      "GeoAreaName": "Togo",
      "Age": "15+"
    },
    {
      "2018": "12.7",
      "GeoAreaName": "Togo",
      "Age": "15-49"
    },
    {
      "2018": "12.1",
      "GeoAreaName": "Tonga",
      "Age": "15+"
    },
    {
      "2018": "16.9",
      "GeoAreaName": "Tonga",
      "Age": "15-49"
    },
    {
      "2018": "5.6",
      "GeoAreaName": "Trinidad and Tobago",
      "Age": "15+"
    },
    {
      "2018": "7.5",
      "GeoAreaName": "Trinidad and Tobago",
      "Age": "15-49"
    },
    {
      "2018": "8.3",
      "GeoAreaName": "Tunisia",
      "Age": "15+"
    },
    {
      "2018": "10.1",
      "GeoAreaName": "Tunisia",
      "Age": "15-49"
    },
    {
      "2018": "9.5",
      "GeoAreaName": "Türkiye",
      "Age": "15+"
    },
    {
      "2018": "12.1",
      "GeoAreaName": "Türkiye",
      "Age": "15-49"
    },
    {
      "2018": "15.4",
      "GeoAreaName": "Tuvalu",
      "Age": "15+"
    },
    {
      "2018": "19.8",
      "GeoAreaName": "Tuvalu",
      "Age": "15-49"
    },
    {
      "2018": "24.2",
      "GeoAreaName": "Uganda",
      "Age": "15+"
    },
    {
      "2018": "26.1",
      "GeoAreaName": "Uganda",
      "Age": "15-49"
    },
    {
      "2018": "8.3",
      "GeoAreaName": "Ukraine",
      "Age": "15+"
    },
    {
      "2018": "8.7",
      "GeoAreaName": "Ukraine",
      "Age": "15-49"
    },
    {
      "2018": "3.6",
      "GeoAreaName": "United Kingdom of Great Britain and Northern Ireland",
      "Age": "15+"
    },
    {
      "2018": "4.2",
      "GeoAreaName": "United Kingdom of Great Britain and Northern Ireland",
      "Age": "15-49"
    },
    {
      "2018": "21.7",
      "GeoAreaName": "United Republic of Tanzania",
      "Age": "15+"
    },
    {
      "2018": "24.3",
      "GeoAreaName": "United Republic of Tanzania",
      "Age": "15-49"
    },
    {
      "2018": "4.2",
      "GeoAreaName": "United States of America",
      "Age": "15+"
    },
    {
      "2018": "6.0",
      "GeoAreaName": "United States of America",
      "Age": "15-49"
    },
    {
      "2018": "3.4",
      "GeoAreaName": "Uruguay",
      "Age": "15+"
    },
    {
      "2018": "4.3",
      "GeoAreaName": "Uruguay",
      "Age": "15-49"
    },
    {
      "2018": "24.2",
      "GeoAreaName": "Vanuatu",
      "Age": "15+"
    },
    {
      "2018": "29.4",
      "GeoAreaName": "Vanuatu",
      "Age": "15-49"
    },
    {
      "2018": "7.3",
      "GeoAreaName": "Venezuela (Bolivarian Republic of)",
      "Age": "15+"
    },
    {
      "2018": "8.5",
      "GeoAreaName": "Venezuela (Bolivarian Republic of)",
      "Age": "15-49"
    },
    {
      "2018": "7.3",
      "GeoAreaName": "Viet Nam",
      "Age": "15+"
    },
    {
      "2018": "9.5",
      "GeoAreaName": "Viet Nam",
      "Age": "15-49"
    },
    {
      "2018": "11.2",
      "GeoAreaName": "Western Asia",
      "Age": "15+"
    },
    {
      "2018": "13.4",
      "GeoAreaName": "Western Asia",
      "Age": "15-49"
    },
    {
      "2018": "3.1",
      "GeoAreaName": "Western Europe",
      "Age": "15+"
    },
    {
      "2018": "4.8",
      "GeoAreaName": "Western Europe",
      "Age": "15-49"
    },
    {
      "2018": "9.9",
      "GeoAreaName": "World",
      "Age": "15+"
    },
    {
      "2018": "12.5",
      "GeoAreaName": "World",
      "Age": "15-49"
    },
    {
      "2018": "25.2",
      "GeoAreaName": "Zambia",
      "Age": "15+"
    },
    {
      "2018": "27.8",
      "GeoAreaName": "Zambia",
      "Age": "15-49"
    },
    {
      "2018": "15.8",
      "GeoAreaName": "Zimbabwe",
      "Age": "15+"
    },
    {
      "2018": "18.2",
      "GeoAreaName": "Zimbabwe",
      "Age": "15-49"
    }
  ]
};

export const marriageAndFamilyByCountry = {
  "title": "Marriage and Family By Country",
  "description": "This table presents data on marriage and family-related indicators across various countries, including rates of marriage, divorce, and family structure dynamics. Understanding marriage and family patterns is essential for analyzing how gender roles and societal norms influence women’s ability to respond to climate change. In regions where traditional family structures place significant burdens on women, such as caregiving responsibilities and limited economic autonomy, women may face increased vulnerability during climate-related events. These family dynamics can limit women’s mobility, access to resources, and participation in decision-making processes, all of which are crucial for building climate resilience. By examining marriage and family data, this table helps to shed light on how social structures intersect with gender inequality, shaping women’s capacity to adapt to and mitigate the impacts of climate change.",
  "category": "Marriage and Family",
  "type": "country-data",
  "data": [
    {
      "2018": "90.91",
      "2020": "90.91",
      "2022": "90.91",
      "GeoAreaName": "Albania"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "90.91",
      "GeoAreaName": "Antigua and Barbuda"
    },
    {
      "2018": "",
      "2020": "90.91",
      "2022": "90.91",
      "GeoAreaName": "Argentina"
    },
    {
      "2018": "81.82",
      "2020": "81.82",
      "2022": "81.82",
      "GeoAreaName": "Armenia"
    },
    {
      "2018": "90.91",
      "2020": "90.91",
      "2022": "90.91",
      "GeoAreaName": "Australia"
    },
    {
      "2018": "",
      "2020": "90.91",
      "2022": "90.91",
      "GeoAreaName": "Australia and New Zealand"
    },
    {
      "2018": "",
      "2020": "81.82",
      "2022": "81.82",
      "GeoAreaName": "Austria"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "81.82",
      "GeoAreaName": "Azerbaijan"
    },
    {
      "2018": "63.64",
      "2020": "63.64",
      "2022": "63.64",
      "GeoAreaName": "Bangladesh"
    },
    {
      "2018": "72.73",
      "2020": "72.73",
      "2022": "72.73",
      "GeoAreaName": "Barbados"
    },
    {
      "2018": "81.82",
      "2020": "81.82",
      "2022": "81.82",
      "GeoAreaName": "Belarus"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "81.82",
      "GeoAreaName": "Belize"
    },
    {
      "2018": "",
      "2020": "81.82",
      "2022": "81.82",
      "GeoAreaName": "Bolivia (Plurinational State of)"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "81.82",
      "GeoAreaName": "Bosnia and Herzegovina"
    },
    {
      "2018": "72.73",
      "2020": "72.73",
      "2022": "72.73",
      "GeoAreaName": "Brazil"
    },
    {
      "2018": "81.82",
      "2020": "81.82",
      "2022": "81.82",
      "GeoAreaName": "Bulgaria"
    },
    {
      "2018": "81.82",
      "2020": "81.82",
      "2022": "81.82",
      "GeoAreaName": "Cabo Verde"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "81.82",
      "GeoAreaName": "Cambodia"
    },
    {
      "2018": "9.09",
      "2020": "9.09",
      "2022": "9.09",
      "GeoAreaName": "Cameroon"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "81.82",
      "GeoAreaName": "Canada"
    },
    {
      "2018": "",
      "2020": "77.27",
      "2022": "77.27",
      "GeoAreaName": "Central and Southern Asia"
    },
    {
      "2018": "63.64",
      "2020": "63.64",
      "2022": "63.64",
      "GeoAreaName": "Chile"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "90.91",
      "GeoAreaName": "China"
    },
    {
      "2018": "90.91",
      "2020": "90.91",
      "2022": "90.91",
      "GeoAreaName": "Colombia"
    },
    {
      "2018": "100.00",
      "2020": "100.00",
      "2022": "100.00",
      "GeoAreaName": "Costa Rica"
    },
    {
      "2018": "72.73",
      "2020": "90.91",
      "2022": "90.91",
      "GeoAreaName": "Côte d'Ivoire"
    },
    {
      "2018": "81.82",
      "2020": "81.82",
      "2022": "81.82",
      "GeoAreaName": "Croatia"
    },
    {
      "2018": "",
      "2020": "81.82",
      "2022": "90.91",
      "GeoAreaName": "Cyprus"
    },
    {
      "2018": "",
      "2020": "81.82",
      "2022": "72.73",
      "GeoAreaName": "Czechia"
    },
    {
      "2018": "90.91",
      "2020": "90.91",
      "2022": "90.91",
      "GeoAreaName": "Denmark"
    },
    {
      "2018": "81.82",
      "2020": "81.82",
      "2022": "90.91",
      "GeoAreaName": "Dominican Republic"
    },
    {
      "2018": "",
      "2020": "78.79",
      "2022": "81.82",
      "GeoAreaName": "Eastern and South-Eastern Asia"
    },
    {
      "2018": "",
      "2020": "100.00",
      "2022": "100.00",
      "GeoAreaName": "Ecuador"
    },
    {
      "2018": "100.00",
      "2020": "100.00",
      "2022": "100.00",
      "GeoAreaName": "El Salvador"
    },
    {
      "2018": "",
      "2020": "81.82",
      "2022": "81.82",
      "GeoAreaName": "Estonia"
    },
    {
      "2018": "",
      "2020": "81.82",
      "2022": "81.82",
      "GeoAreaName": "Ethiopia"
    },
    {
      "2018": "",
      "2020": "84.68",
      "2022": "84.15",
      "GeoAreaName": "Europe and Northern America"
    },
    {
      "2018": "90.91",
      "2020": "100.00",
      "2022": "100.00",
      "GeoAreaName": "Fiji"
    },
    {
      "2018": "72.73",
      "2020": "81.82",
      "2022": "81.82",
      "GeoAreaName": "Finland"
    },
    {
      "2018": "90.91",
      "2020": "90.91",
      "2022": "90.91",
      "GeoAreaName": "France"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "90.91",
      "GeoAreaName": "Georgia"
    },
    {
      "2018": "100.00",
      "2020": "100.00",
      "2022": "100.00",
      "GeoAreaName": "Germany"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "81.82",
      "GeoAreaName": "Ghana"
    },
    {
      "2018": "72.73",
      "2020": "72.73",
      "2022": "72.73",
      "GeoAreaName": "Greece"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "81.82",
      "GeoAreaName": "Grenada"
    },
    {
      "2018": "100.00",
      "2020": "100.00",
      "2022": "100.00",
      "GeoAreaName": "Guatemala"
    },
    {
      "2018": "",
      "2020": "72.73",
      "2022": "72.73",
      "GeoAreaName": "Guinea"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "54.55",
      "GeoAreaName": "Haiti"
    },
    {
      "2018": "",
      "2020": "100.00",
      "2022": "100.00",
      "GeoAreaName": "Honduras"
    },
    {
      "2018": "",
      "2020": "81.82",
      "2022": "81.82",
      "GeoAreaName": "Hungary"
    },
    {
      "2018": "",
      "2020": "72.73",
      "2022": "72.73",
      "GeoAreaName": "Iceland"
    },
    {
      "2018": "100.00",
      "2020": "100.00",
      "2022": "100.00",
      "GeoAreaName": "India"
    },
    {
      "2018": "45.45",
      "2020": "36.36",
      "2022": "36.36",
      "GeoAreaName": "Iraq"
    },
    {
      "2018": "",
      "2020": "100.00",
      "2022": "100.00",
      "GeoAreaName": "Ireland"
    },
    {
      "2018": "",
      "2020": "81.82",
      "2022": "81.82",
      "GeoAreaName": "Israel"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "81.82",
      "GeoAreaName": "Italy"
    },
    {
      "2018": "",
      "2020": "90.91",
      "2022": "90.91",
      "GeoAreaName": "Jamaica"
    },
    {
      "2018": "",
      "2020": "90.91",
      "2022": "90.91",
      "GeoAreaName": "Japan"
    },
    {
      "2018": "27.27",
      "2020": "36.36",
      "2022": "36.36",
      "GeoAreaName": "Jordan"
    },
    {
      "2018": "",
      "2020": "81.82",
      "2022": "81.82",
      "GeoAreaName": "Kazakhstan"
    },
    {
      "2018": "100.00",
      "2020": "100.00",
      "2022": "100.00",
      "GeoAreaName": "Kenya"
    },
    {
      "2018": "",
      "2020": "81.82",
      "2022": "81.82",
      "GeoAreaName": "Kyrgyzstan"
    },
    {
      "2018": "",
      "2020": "79.02",
      "2022": "79.29",
      "GeoAreaName": "Landlocked developing countries (LLDCs)"
    },
    {
      "2018": "",
      "2020": "87.27",
      "2022": "86.18",
      "GeoAreaName": "Latin America and the Caribbean"
    },
    {
      "2018": "",
      "2020": "81.82",
      "2022": "81.82",
      "GeoAreaName": "Latvia"
    },
    {
      "2018": "",
      "2020": "72.73",
      "2022": "68.18",
      "GeoAreaName": "Least Developed Countries (LDCs)"
    },
    {
      "2018": "70.00",
      "2020": "70.00",
      "2022": "70.00",
      "GeoAreaName": "Lebanon"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "72.73",
      "GeoAreaName": "Liberia"
    },
    {
      "2018": "81.82",
      "2020": "81.82",
      "2022": "81.82",
      "GeoAreaName": "Lithuania"
    },
    {
      "2018": "",
      "2020": "72.73",
      "2022": "72.73",
      "GeoAreaName": "Luxembourg"
    },
    {
      "2018": "63.64",
      "2020": "63.64",
      "2022": "63.64",
      "GeoAreaName": "Madagascar"
    },
    {
      "2018": "",
      "2020": "63.64",
      "2022": "63.64",
      "GeoAreaName": "Malawi"
    },
    {
      "2018": "63.64",
      "2020": "63.64",
      "2022": "63.64",
      "GeoAreaName": "Malaysia"
    },
    {
      "2018": "",
      "2020": "90.91",
      "2022": "90.91",
      "GeoAreaName": "Malta"
    },
    {
      "2018": "",
      "2020": "81.82",
      "2022": "81.82",
      "GeoAreaName": "Mauritius"
    },
    {
      "2018": "100.00",
      "2020": "100.00",
      "2022": "100.00",
      "GeoAreaName": "Mexico"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "90.91",
      "GeoAreaName": "Mongolia"
    },
    {
      "2018": "",
      "2020": "81.82",
      "2022": "81.82",
      "GeoAreaName": "Montenegro"
    },
    {
      "2018": "",
      "2020": "63.64",
      "2022": "63.64",
      "GeoAreaName": "Morocco"
    },
    {
      "2018": "81.82",
      "2020": "81.82",
      "2022": "81.82",
      "GeoAreaName": "Mozambique"
    },
    {
      "2018": "",
      "2020": "63.64",
      "2022": "63.64",
      "GeoAreaName": "Namibia"
    },
    {
      "2018": "",
      "2020": "72.73",
      "2022": "72.73",
      "GeoAreaName": "Nepal"
    },
    {
      "2018": "81.82",
      "2020": "81.82",
      "2022": "81.82",
      "GeoAreaName": "Netherlands (Kingdom of the)"
    },
    {
      "2018": "",
      "2020": "90.91",
      "2022": "90.91",
      "GeoAreaName": "New Zealand"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "90.91",
      "GeoAreaName": "Nicaragua"
    },
    {
      "2018": "72.73",
      "2020": "72.73",
      "2022": "72.73",
      "GeoAreaName": "Nigeria"
    },
    {
      "2018": "",
      "2020": "81.82",
      "2022": "81.82",
      "GeoAreaName": "North Macedonia"
    },
    {
      "2018": "",
      "2020": "63.33",
      "2022": "65.39",
      "GeoAreaName": "Northern Africa and Western Asia"
    },
    {
      "2018": "",
      "2020": "90.91",
      "2022": "81.82",
      "GeoAreaName": "Norway"
    },
    {
      "2018": "",
      "2020": "100.00",
      "2022": "75.76",
      "GeoAreaName": "Oceania (exc. Australia and New Zealand)"
    },
    {
      "2018": "54.55",
      "2020": "63.64",
      "2022": "63.64",
      "GeoAreaName": "Pakistan"
    },
    {
      "2018": "100.00",
      "2020": "100.00",
      "2022": "100.00",
      "GeoAreaName": "Panama"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "72.73",
      "GeoAreaName": "Papua New Guinea"
    },
    {
      "2018": "81.82",
      "2020": "81.82",
      "2022": "81.82",
      "GeoAreaName": "Paraguay"
    },
    {
      "2018": "81.82",
      "2020": "81.82",
      "2022": "81.82",
      "GeoAreaName": "Peru"
    },
    {
      "2018": "54.55",
      "2020": "54.55",
      "2022": "54.55",
      "GeoAreaName": "Philippines"
    },
    {
      "2018": "",
      "2020": "90.91",
      "2022": "90.91",
      "GeoAreaName": "Poland"
    },
    {
      "2018": "",
      "2020": "90.91",
      "2022": "90.91",
      "GeoAreaName": "Portugal"
    },
    {
      "2018": "",
      "2020": "90.91",
      "2022": "90.91",
      "GeoAreaName": "Republic of Korea"
    },
    {
      "2018": "",
      "2020": "81.82",
      "2022": "81.82",
      "GeoAreaName": "Republic of Moldova"
    },
    {
      "2018": "",
      "2020": "81.82",
      "2022": "81.82",
      "GeoAreaName": "Romania"
    },
    {
      "2018": "",
      "2020": "81.82",
      "2022": "81.82",
      "GeoAreaName": "Rwanda"
    },
    {
      "2018": "81.82",
      "2020": "81.82",
      "2022": "81.82",
      "GeoAreaName": "Serbia"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "81.82",
      "GeoAreaName": "Seychelles"
    },
    {
      "2018": "",
      "2020": "81.82",
      "2022": "81.82",
      "GeoAreaName": "Slovakia"
    },
    {
      "2018": "81.82",
      "2020": "81.82",
      "2022": "81.82",
      "GeoAreaName": "Slovenia"
    },
    {
      "2018": "",
      "2020": "82.95",
      "2022": "79.39",
      "GeoAreaName": "Small island developing States (SIDS)"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "54.55",
      "GeoAreaName": "Solomon Islands"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "72.73",
      "GeoAreaName": "South Sudan"
    },
    {
      "2018": "81.82",
      "2020": "81.82",
      "2022": "81.82",
      "GeoAreaName": "Spain"
    },
    {
      "2018": "54.55",
      "2020": "54.55",
      "2022": "54.55",
      "GeoAreaName": "State of Palestine"
    },
    {
      "2018": "",
      "2020": "73.30",
      "2022": "74.09",
      "GeoAreaName": "Sub-Saharan Africa"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "27.27",
      "GeoAreaName": "Sudan"
    },
    {
      "2018": "",
      "2020": "63.64",
      "2022": "63.64",
      "GeoAreaName": "Suriname"
    },
    {
      "2018": "90.91",
      "2020": "90.91",
      "2022": "90.91",
      "GeoAreaName": "Sweden"
    },
    {
      "2018": "",
      "2020": "90.91",
      "2022": "90.91",
      "GeoAreaName": "Switzerland"
    },
    {
      "2018": "",
      "2020": "81.82",
      "2022": "81.82",
      "GeoAreaName": "Thailand"
    },
    {
      "2018": "90.91",
      "2020": "90.91",
      "2022": "90.91",
      "GeoAreaName": "Trinidad and Tobago"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "54.55",
      "GeoAreaName": "Tunisia"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "81.82",
      "GeoAreaName": "Türkiye"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "81.82",
      "GeoAreaName": "Turkmenistan"
    },
    {
      "2018": "63.64",
      "2020": "72.73",
      "2022": "72.73",
      "GeoAreaName": "Uganda"
    },
    {
      "2018": "81.82",
      "2020": "81.82",
      "2022": "81.82",
      "GeoAreaName": "Ukraine"
    },
    {
      "2018": "27.27",
      "2020": "63.64",
      "2022": "63.64",
      "GeoAreaName": "United Arab Emirates"
    },
    {
      "2018": "90.91",
      "2020": "90.91",
      "2022": "90.91",
      "GeoAreaName": "United Kingdom of Great Britain and Northern Ireland"
    },
    {
      "2018": "72.73",
      "2020": "72.73",
      "2022": "72.73",
      "GeoAreaName": "United Republic of Tanzania"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "90.91",
      "GeoAreaName": "United States of America"
    },
    {
      "2018": "",
      "2020": "81.82",
      "2022": "81.82",
      "GeoAreaName": "Uruguay"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "72.73",
      "GeoAreaName": "Uzbekistan"
    },
    {
      "2018": "90.91",
      "2020": "90.91",
      "2022": "90.91",
      "GeoAreaName": "Viet Nam"
    },
    {
      "2018": "77.48",
      "2020": "80.74",
      "2022": "79.98",
      "GeoAreaName": "World"
    },
    {
      "2018": "",
      "2020": "81.82",
      "2022": "81.82",
      "GeoAreaName": "Zimbabwe"
    }
  ]
};

export const employmentAndEconomicBenefitsByCountry = {
  "title": "Employment and Economic Benefits By Country",
  "description": "This table provides data on employment rates and access to economic benefits for women across different countries. Employment is a key factor in determining economic independence and resilience, particularly in the face of climate change. Women who have stable employment and access to economic benefits, such as social security, healthcare, and parental leave, are better positioned to cope with climate-related challenges. Conversely, in countries where women face barriers to employment or lack access to economic benefits, they are more vulnerable to the effects of climate disasters, including displacement, income loss, and food insecurity. This data is crucial for understanding the relationship between gender inequality in the labor market and the ability of women to build resilience against environmental risks, emphasizing the need for inclusive economic policies that support both gender equality and climate adaptation efforts.",
  "category": "Gender Discrimination",
  "type": "country-data",
  "data": [
    {
      "2018": "80.00",
      "2020": "80.00",
      "2022": "80.00",
      "GeoAreaName": "Albania"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "60.00",
      "GeoAreaName": "Antigua and Barbuda"
    },
    {
      "2018": "",
      "2020": "60.00",
      "2022": "60.00",
      "GeoAreaName": "Argentina"
    },
    {
      "2018": "80.00",
      "2020": "80.00",
      "2022": "90.00",
      "GeoAreaName": "Armenia"
    },
    {
      "2018": "100.00",
      "2020": "100.00",
      "2022": "100.00",
      "GeoAreaName": "Australia"
    },
    {
      "2018": "",
      "2020": "100.00",
      "2022": "100.00",
      "GeoAreaName": "Australia and New Zealand"
    },
    {
      "2018": "",
      "2020": "100.00",
      "2022": "100.00",
      "GeoAreaName": "Austria"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "50.00",
      "GeoAreaName": "Azerbaijan"
    },
    {
      "2018": "20.00",
      "2020": "20.00",
      "2022": "20.00",
      "GeoAreaName": "Bangladesh"
    },
    {
      "2018": "60.00",
      "2020": "60.00",
      "2022": "60.00",
      "GeoAreaName": "Barbados"
    },
    {
      "2018": "60.00",
      "2020": "60.00",
      "2022": "70.00",
      "GeoAreaName": "Belarus"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "40.00",
      "GeoAreaName": "Belize"
    },
    {
      "2018": "",
      "2020": "80.00",
      "2022": "80.00",
      "GeoAreaName": "Bolivia (Plurinational State of)"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "70.00",
      "GeoAreaName": "Bosnia and Herzegovina"
    },
    {
      "2018": "80.00",
      "2020": "80.00",
      "2022": "80.00",
      "GeoAreaName": "Brazil"
    },
    {
      "2018": "100.00",
      "2020": "100.00",
      "2022": "100.00",
      "GeoAreaName": "Bulgaria"
    },
    {
      "2018": "70.00",
      "2020": "70.00",
      "2022": "70.00",
      "GeoAreaName": "Cabo Verde"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "60.00",
      "GeoAreaName": "Cambodia"
    },
    {
      "2018": "50.00",
      "2020": "50.00",
      "2022": "50.00",
      "GeoAreaName": "Cameroon"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "90.00",
      "GeoAreaName": "Canada"
    },
    {
      "2018": "",
      "2020": "43.33",
      "2022": "50.00",
      "GeoAreaName": "Central and Southern Asia"
    },
    {
      "2018": "80.00",
      "2020": "80.00",
      "2022": "80.00",
      "GeoAreaName": "Chile"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "60.00",
      "GeoAreaName": "China"
    },
    {
      "2018": "80.00",
      "2020": "80.00",
      "2022": "80.00",
      "GeoAreaName": "Colombia"
    },
    {
      "2018": "60.00",
      "2020": "80.00",
      "2022": "80.00",
      "GeoAreaName": "Costa Rica"
    },
    {
      "2018": "80.00",
      "2020": "80.00",
      "2022": "80.00",
      "GeoAreaName": "Côte d'Ivoire"
    },
    {
      "2018": "100.00",
      "2020": "100.00",
      "2022": "100.00",
      "GeoAreaName": "Croatia"
    },
    {
      "2018": "",
      "2020": "90.00",
      "2022": "90.00",
      "GeoAreaName": "Cyprus"
    },
    {
      "2018": "",
      "2020": "90.00",
      "2022": "90.00",
      "GeoAreaName": "Czechia"
    },
    {
      "2018": "90.00",
      "2020": "90.00",
      "2022": "90.00",
      "GeoAreaName": "Denmark"
    },
    {
      "2018": "90.00",
      "2020": "90.00",
      "2022": "90.00",
      "GeoAreaName": "Dominican Republic"
    },
    {
      "2018": "",
      "2020": "70.00",
      "2022": "71.11",
      "GeoAreaName": "Eastern and South-Eastern Asia"
    },
    {
      "2018": "",
      "2020": "80.00",
      "2022": "80.00",
      "GeoAreaName": "Ecuador"
    },
    {
      "2018": "90.00",
      "2020": "90.00",
      "2022": "90.00",
      "GeoAreaName": "El Salvador"
    },
    {
      "2018": "",
      "2020": "100.00",
      "2022": "100.00",
      "GeoAreaName": "Estonia"
    },
    {
      "2018": "",
      "2020": "50.00",
      "2022": "50.00",
      "GeoAreaName": "Ethiopia"
    },
    {
      "2018": "",
      "2020": "92.57",
      "2022": "92.82",
      "GeoAreaName": "Europe and Northern America"
    },
    {
      "2018": "60.00",
      "2020": "80.00",
      "2022": "80.00",
      "GeoAreaName": "Fiji"
    },
    {
      "2018": "100.00",
      "2020": "100.00",
      "2022": "100.00",
      "GeoAreaName": "Finland"
    },
    {
      "2018": "90.00",
      "2020": "90.00",
      "2022": "90.00",
      "GeoAreaName": "France"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "90.00",
      "GeoAreaName": "Georgia"
    },
    {
      "2018": "100.00",
      "2020": "100.00",
      "2022": "100.00",
      "GeoAreaName": "Germany"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "60.00",
      "GeoAreaName": "Ghana"
    },
    {
      "2018": "100.00",
      "2020": "100.00",
      "2022": "100.00",
      "GeoAreaName": "Greece"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "80.00",
      "GeoAreaName": "Grenada"
    },
    {
      "2018": "60.00",
      "2020": "60.00",
      "2022": "60.00",
      "GeoAreaName": "Guatemala"
    },
    {
      "2018": "",
      "2020": "50.00",
      "2022": "50.00",
      "GeoAreaName": "Guinea"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "70.00",
      "GeoAreaName": "Haiti"
    },
    {
      "2018": "",
      "2020": "60.00",
      "2022": "60.00",
      "GeoAreaName": "Honduras"
    },
    {
      "2018": "",
      "2020": "90.00",
      "2022": "90.00",
      "GeoAreaName": "Hungary"
    },
    {
      "2018": "",
      "2020": "100.00",
      "2022": "100.00",
      "GeoAreaName": "Iceland"
    },
    {
      "2018": "30.00",
      "2020": "40.00",
      "2022": "40.00",
      "GeoAreaName": "India"
    },
    {
      "2018": "70.00",
      "2020": "70.00",
      "2022": "70.00",
      "GeoAreaName": "Iraq"
    },
    {
      "2018": "",
      "2020": "90.00",
      "2022": "90.00",
      "GeoAreaName": "Ireland"
    },
    {
      "2018": "",
      "2020": "70.00",
      "2022": "70.00",
      "GeoAreaName": "Israel"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "100.00",
      "GeoAreaName": "Italy"
    },
    {
      "2018": "",
      "2020": "50.00",
      "2022": "50.00",
      "GeoAreaName": "Jamaica"
    },
    {
      "2018": "",
      "2020": "70.00",
      "2022": "70.00",
      "GeoAreaName": "Japan"
    },
    {
      "2018": "20.00",
      "2020": "40.00",
      "2022": "40.00",
      "GeoAreaName": "Jordan"
    },
    {
      "2018": "",
      "2020": "60.00",
      "2022": "60.00",
      "GeoAreaName": "Kazakhstan"
    },
    {
      "2018": "90.00",
      "2020": "90.00",
      "2022": "90.00",
      "GeoAreaName": "Kenya"
    },
    {
      "2018": "",
      "2020": "30.00",
      "2022": "40.00",
      "GeoAreaName": "Kyrgyzstan"
    },
    {
      "2018": "",
      "2020": "73.85",
      "2022": "72.78",
      "GeoAreaName": "Landlocked developing countries (LLDCs)"
    },
    {
      "2018": "",
      "2020": "78.00",
      "2022": "75.20",
      "GeoAreaName": "Latin America and the Caribbean"
    },
    {
      "2018": "",
      "2020": "100.00",
      "2022": "100.00",
      "GeoAreaName": "Latvia"
    },
    {
      "2018": "",
      "2020": "62.00",
      "2022": "58.75",
      "GeoAreaName": "Least Developed Countries (LDCs)"
    },
    {
      "2018": "50.00",
      "2020": "50.00",
      "2022": "50.00",
      "GeoAreaName": "Lebanon"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "90.00",
      "GeoAreaName": "Liberia"
    },
    {
      "2018": "100.00",
      "2020": "100.00",
      "2022": "100.00",
      "GeoAreaName": "Lithuania"
    },
    {
      "2018": "",
      "2020": "100.00",
      "2022": "100.00",
      "GeoAreaName": "Luxembourg"
    },
    {
      "2018": "40.00",
      "2020": "40.00",
      "2022": "40.00",
      "GeoAreaName": "Madagascar"
    },
    {
      "2018": "",
      "2020": "70.00",
      "2022": "70.00",
      "GeoAreaName": "Malawi"
    },
    {
      "2018": "40.00",
      "2020": "40.00",
      "2022": "40.00",
      "GeoAreaName": "Malaysia"
    },
    {
      "2018": "",
      "2020": "90.00",
      "2022": "90.00",
      "GeoAreaName": "Malta"
    },
    {
      "2018": "",
      "2020": "90.00",
      "2022": "100.00",
      "GeoAreaName": "Mauritius"
    },
    {
      "2018": "80.00",
      "2020": "80.00",
      "2022": "80.00",
      "GeoAreaName": "Mexico"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "80.00",
      "GeoAreaName": "Mongolia"
    },
    {
      "2018": "",
      "2020": "80.00",
      "2022": "80.00",
      "GeoAreaName": "Montenegro"
    },
    {
      "2018": "",
      "2020": "70.00",
      "2022": "70.00",
      "GeoAreaName": "Morocco"
    },
    {
      "2018": "70.00",
      "2020": "70.00",
      "2022": "70.00",
      "GeoAreaName": "Mozambique"
    },
    {
      "2018": "",
      "2020": "70.00",
      "2022": "70.00",
      "GeoAreaName": "Namibia"
    },
    {
      "2018": "",
      "2020": "70.00",
      "2022": "70.00",
      "GeoAreaName": "Nepal"
    },
    {
      "2018": "100.00",
      "2020": "100.00",
      "2022": "100.00",
      "GeoAreaName": "Netherlands (Kingdom of the)"
    },
    {
      "2018": "",
      "2020": "100.00",
      "2022": "100.00",
      "GeoAreaName": "New Zealand"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "70.00",
      "GeoAreaName": "Nicaragua"
    },
    {
      "2018": "40.00",
      "2020": "40.00",
      "2022": "40.00",
      "GeoAreaName": "Nigeria"
    },
    {
      "2018": "",
      "2020": "80.00",
      "2022": "80.00",
      "GeoAreaName": "North Macedonia"
    },
    {
      "2018": "",
      "2020": "64.44",
      "2022": "61.43",
      "GeoAreaName": "Northern Africa and Western Asia"
    },
    {
      "2018": "",
      "2020": "100.00",
      "2022": "100.00",
      "GeoAreaName": "Norway"
    },
    {
      "2018": "",
      "2020": "80.00",
      "2022": "43.33",
      "GeoAreaName": "Oceania (exc. Australia and New Zealand)"
    },
    {
      "2018": "30.00",
      "2020": "40.00",
      "2022": "50.00",
      "GeoAreaName": "Pakistan"
    },
    {
      "2018": "70.00",
      "2020": "80.00",
      "2022": "80.00",
      "GeoAreaName": "Panama"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "30.00",
      "GeoAreaName": "Papua New Guinea"
    },
    {
      "2018": "100.00",
      "2020": "100.00",
      "2022": "100.00",
      "GeoAreaName": "Paraguay"
    },
    {
      "2018": "100.00",
      "2020": "100.00",
      "2022": "100.00",
      "GeoAreaName": "Peru"
    },
    {
      "2018": "90.00",
      "2020": "100.00",
      "2022": "100.00",
      "GeoAreaName": "Philippines"
    },
    {
      "2018": "",
      "2020": "100.00",
      "2022": "100.00",
      "GeoAreaName": "Poland"
    },
    {
      "2018": "",
      "2020": "100.00",
      "2022": "100.00",
      "GeoAreaName": "Portugal"
    },
    {
      "2018": "",
      "2020": "70.00",
      "2022": "70.00",
      "GeoAreaName": "Republic of Korea"
    },
    {
      "2018": "",
      "2020": "100.00",
      "2022": "100.00",
      "GeoAreaName": "Republic of Moldova"
    },
    {
      "2018": "",
      "2020": "100.00",
      "2022": "100.00",
      "GeoAreaName": "Romania"
    },
    {
      "2018": "",
      "2020": "90.00",
      "2022": "90.00",
      "GeoAreaName": "Rwanda"
    },
    {
      "2018": "100.00",
      "2020": "100.00",
      "2022": "100.00",
      "GeoAreaName": "Serbia"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "80.00",
      "GeoAreaName": "Seychelles"
    },
    {
      "2018": "",
      "2020": "90.00",
      "2022": "90.00",
      "GeoAreaName": "Slovakia"
    },
    {
      "2018": "90.00",
      "2020": "90.00",
      "2022": "90.00",
      "GeoAreaName": "Slovenia"
    },
    {
      "2018": "",
      "2020": "75.00",
      "2022": "66.00",
      "GeoAreaName": "Small island developing States (SIDS)"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "20.00",
      "GeoAreaName": "Solomon Islands"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "80.00",
      "GeoAreaName": "South Sudan"
    },
    {
      "2018": "100.00",
      "2020": "100.00",
      "2022": "100.00",
      "GeoAreaName": "Spain"
    },
    {
      "2018": "30.00",
      "2020": "30.00",
      "2022": "30.00",
      "GeoAreaName": "State of Palestine"
    },
    {
      "2018": "",
      "2020": "68.13",
      "2022": "70.50",
      "GeoAreaName": "Sub-Saharan Africa"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "0.00",
      "GeoAreaName": "Sudan"
    },
    {
      "2018": "",
      "2020": "80.00",
      "2022": "80.00",
      "GeoAreaName": "Suriname"
    },
    {
      "2018": "100.00",
      "2020": "100.00",
      "2022": "100.00",
      "GeoAreaName": "Sweden"
    },
    {
      "2018": "",
      "2020": "90.00",
      "2022": "100.00",
      "GeoAreaName": "Switzerland"
    },
    {
      "2018": "",
      "2020": "60.00",
      "2022": "60.00",
      "GeoAreaName": "Thailand"
    },
    {
      "2018": "80.00",
      "2020": "80.00",
      "2022": "80.00",
      "GeoAreaName": "Trinidad and Tobago"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "40.00",
      "GeoAreaName": "Tunisia"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "90.00",
      "GeoAreaName": "Türkiye"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "60.00",
      "GeoAreaName": "Turkmenistan"
    },
    {
      "2018": "80.00",
      "2020": "80.00",
      "2022": "80.00",
      "GeoAreaName": "Uganda"
    },
    {
      "2018": "40.00",
      "2020": "40.00",
      "2022": "50.00",
      "GeoAreaName": "Ukraine"
    },
    {
      "2018": "10.00",
      "2020": "80.00",
      "2022": "80.00",
      "GeoAreaName": "United Arab Emirates"
    },
    {
      "2018": "90.00",
      "2020": "90.00",
      "2022": "100.00",
      "GeoAreaName": "United Kingdom of Great Britain and Northern Ireland"
    },
    {
      "2018": "80.00",
      "2020": "80.00",
      "2022": "80.00",
      "GeoAreaName": "United Republic of Tanzania"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "80.00",
      "GeoAreaName": "United States of America"
    },
    {
      "2018": "",
      "2020": "90.00",
      "2022": "90.00",
      "GeoAreaName": "Uruguay"
    },
    {
      "2018": "",
      "2020": "",
      "2022": "60.00",
      "GeoAreaName": "Uzbekistan"
    },
    {
      "2018": "80.00",
      "2020": "80.00",
      "2022": "100.00",
      "GeoAreaName": "Viet Nam"
    },
    {
      "2018": "73.21",
      "2020": "78.21",
      "2022": "76.17",
      "GeoAreaName": "World"
    },
    {
      "2018": "",
      "2020": "70.00",
      "2022": "70.00",
      "GeoAreaName": "Zimbabwe"
    }
  ]
};

export const countryData = [
    proportionsOfElectedSeatsHeldByWomenInDeliberativeBodiesOfLocalGovernments,
    proportionOfWomenInSeniorAndMiddleManagementPositions,
    proportionOfWomenInManagerialPositions,
    proportionOfSeatsHeldByWomenInNationalParliaments,
    currentNumberOfSeatsInNationalParliaments,
    numberOfSeatsHeldByWomenInNationalParliaments,
    proportionOfWomenAged2024YearsWhoWereMarriedOrInAUnionBeforeAge18,
    violenceAgainstWomenByCountry,
    overarchingLegalFrameworksAndPublicLife,
    proportionOfWomenAged2024YearsWhoWereMarriedOrInAUnionBeforeAge15,
    proportionOfEverPartneredWomenAndGirlsSubjectedToPhysicalAndSexualViolenceByACurrentOrFormerIntimatePartnerInThePrevious12Months,
    marriageAndFamilyByCountry,
    employmentAndEconomicBenefitsByCountry,
]
