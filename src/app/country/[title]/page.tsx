"use client";

import Breadcrumb from "@/app/components/breadcrumb";
import MapChart from "@/app/components/map/MapChart";
import {countryData} from "@/app/data";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const CountryChartDetail = ({ params }) => {
    const title = params.title.replace(/-/g, ' ');
    const chartData = countryData.find(data => data.title === decodeURIComponent(title));

    if (!chartData) {
        return <div>{'No data'}</div>;
    }

    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'Country Data', href: '/country' },
        { label: chartData.title, href: `/country/${params.title}` }
    ];

    return (
        <div>
            <Breadcrumb items={breadcrumbItems} />
            <div className="p-5">
                <h1 className="text-4xl font-bold mb-4">{chartData.title}</h1>
                <p className="mb-4">{chartData.description}</p>
                <MapChart data={chartData} />
            </div>
        </div>
    );
};

export default CountryChartDetail;
