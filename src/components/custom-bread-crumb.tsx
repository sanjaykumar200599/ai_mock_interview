import { BreadcrumbPage } from "./ui/breadcrumb";

interface CustomBreadCrumbProps={
    breadCrumbPage:string;
    breadCrumbItems?: {link : string; label: string}[];
}



export const CustomBreadCrumb=({
    breadCrumbPage,
    breadCrumbItems,
}: CustomBreadCrumbProps)=<{
    return <div>
}