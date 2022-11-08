import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getEmployeeStagingHistorics = createAsyncThunk('getEmployeeStagingHistorics', async () => {
    const response = await axios.get('/api/StagingEmployeesHistoric');
    const data = await response.data;
    return data;
});

const employeeStagingHistoricsSlice = createSlice({
    name: 'employeeStagingHistorics',
    initialState: [
        {
            id: 1,
            hasErrors: 0,
            processExecutionId: 3,
            globalEmployeeId: '50003069',
            employeeId: '50003069',
            effectDt: '2022-01/01 08:00:00',
            isPartner: 'N',
            lastName: 'Messi',
            firstName: 'Lionel',
            midName: 'GPS',
            nameSuffixCode: 'SU4',
            namePrfxCd: 'SU4',
            preferredName: 'PFN',
            originalHireDate:'2022-01/01 08:00:00',
            terminationDate: null,
            emailId: 'test@abc.com',
            costCenter: '100060145',
            annualWorkingHours: 2080,
            annualSalary: 123561,
            currency: 'USD',
            birthDt: '2022-01/01 08:00:00',
            timeSheetSchedule: 'WS_40',
            laborLocationCode: 'DFLT',
            contractorFlag: 'Y',
            employeeStatusCode: 'A',
            sEmplTypeCd: 'R',
            annualAmount: 123561,
            salaryRateType: 'A',
            serviceAreaDescription: '115',
            serviceLineDescription: 'Cyber Infraestructure',
            nationality: 'USA',
            personalAreaCountry: 'USA',
            personalAreaCity: 'Baltimore',
            personalAreaState: 'MD',
            personalAreaStateDescription: 'Maryland',
            preferredContact: '(187) 699-8222',
            phoneDesk: '(187) 699-8222',
            standardHours: '40.0',
            wageType: 'ET3',
            activityType: 'P3',
            countryGrouping: 'US',
            organizationUnit: '3000007',
            eEGroup: 'Standard',
            eEGroupCode: 'EC1',
            employeeSubgroupCode: 'ET3',
            employeeStatusDescription: 'Active',
            managerId: '50000024',
            jobKey: '50003860',
            jobDescription: 'Consultant HC HR StratCom',
            companyCode: '1000',
            companyCodeDescription: 'CompanyCodeDescription'
        },
        {
            id: 2,
            hasErrors: 1,
            processExecutionId: 3,
            globalEmployeeId: '50003070',
            employeeId: '50003070',
            effectDt: '2022-01/01 08:00:00',
            isPartner: 'N',
            lastName: 'Cristiano',
            firstName: 'Ronaldo',
            midName: 'GPS',
            nameSuffixCode: 'SU4',
            namePrfxCd: 'SU4',
            preferredName: 'PFN',
            originalHireDate:'2022-01/01 08:00:00',
            terminationDate: null,
            emailId: 'test@abc.com',
            costCenter: '100060145',
            annualWorkingHours: 2080,
            annualSalary: 123561,
            currency: 'USD',
            birthDt: '2022-01/01 08:00:00',
            timeSheetSchedule: 'WS_40',
            laborLocationCode: 'DFLT',
            contractorFlag: 'Y',
            employeeStatusCode: 'A',
            sEmplTypeCd: 'R',
            annualAmount: 123561,
            salaryRateType: 'A',
            serviceAreaDescription: '115',
            serviceLineDescription: 'Cyber Infraestructure',
            nationality: 'USA',
            personalAreaCountry: 'USA',
            personalAreaCity: 'Baltimore',
            personalAreaState: 'MD',
            personalAreaStateDescription: 'Maryland',
            preferredContact: '(187) 699-8222',
            phoneDesk: '(187) 699-8222',
            standardHours: '40.0',
            wageType: 'ET3',
            activityType: 'P3',
            countryGrouping: 'US',
            organizationUnit: '3000007',
            eEGroup: 'Standard',
            eEGroupCode: 'EC1',
            employeeSubgroupCode: 'ET3',
            employeeStatusDescription: 'Active',
            managerId: '50000024',
            jobKey: '50003860',
            jobDescription: 'Consultant HC HR StratCom',
            companyCode: '1000',
            companyCodeDescription: 'CompanyCodeDescription'
        },
        {
            id: 3,
            hasErrors: 0,
            processExecutionId: 3,
            globalEmployeeId: '50003071',
            employeeId: '50003071',
            effectDt: '2022-01/01 08:00:00',
            isPartner: 'N',
            lastName: 'Mo',
            firstName: 'Salah',
            midName: 'GPS',
            nameSuffixCode: 'SU4',
            namePrfxCd: 'SU4',
            preferredName: 'PFN',
            originalHireDate:'2022-01/01 08:00:00',
            terminationDate: null,
            emailId: 'test@abc.com',
            costCenter: '100060145',
            annualWorkingHours: 2080,
            annualSalary: 123561,
            currency: 'USD',
            birthDt: '2022-01/01 08:00:00',
            timeSheetSchedule: 'WS_40',
            laborLocationCode: 'DFLT',
            contractorFlag: 'Y',
            employeeStatusCode: 'A',
            sEmplTypeCd: 'R',
            annualAmount: 123561,
            salaryRateType: 'A',
            serviceAreaDescription: '115',
            serviceLineDescription: 'Cyber Infraestructure',
            nationality: 'USA',
            personalAreaCountry: 'USA',
            personalAreaCity: 'Baltimore',
            personalAreaState: 'MD',
            personalAreaStateDescription: 'Maryland',
            preferredContact: '(187) 699-8222',
            phoneDesk: '(187) 699-8222',
            standardHours: '40.0',
            wageType: 'ET3',
            activityType: 'P3',
            countryGrouping: 'US',
            organizationUnit: '3000007',
            eEGroup: 'Standard',
            eEGroupCode: 'EC1',
            employeeSubgroupCode: 'ET3',
            employeeStatusDescription: 'Active',
            managerId: '50000024',
            jobKey: '50003860',
            jobDescription: 'Consultant HC HR StratCom',
            companyCode: '1000',
            companyCodeDescription: 'CompanyCodeDescription'
        },
        {
            id: 4,
            hasErrors: 0,
            processExecutionId: 3,
            globalEmployeeId: '50003072',
            employeeId: '50003072',
            effectDt: '2022-01/01 08:00:00',
            isPartner: 'N',
            lastName: 'Neymar',
            firstName: 'Jr',
            midName: 'GPS',
            nameSuffixCode: 'SU4',
            namePrfxCd: 'SU4',
            preferredName: 'PFN',
            originalHireDate:'2022-01/01 08:00:00',
            terminationDate: null,
            emailId: 'test@abc.com',
            costCenter: '100060145',
            annualWorkingHours: 2080,
            annualSalary: 123561,
            currency: 'USD',
            birthDt: '2022-01/01 08:00:00',
            timeSheetSchedule: 'WS_40',
            laborLocationCode: 'DFLT',
            contractorFlag: 'Y',
            employeeStatusCode: 'A',
            sEmplTypeCd: 'R',
            annualAmount: 123561,
            salaryRateType: 'A',
            serviceAreaDescription: '115',
            serviceLineDescription: 'Cyber Infraestructure',
            nationality: 'USA',
            personalAreaCountry: 'USA',
            personalAreaCity: 'Baltimore',
            personalAreaState: 'MD',
            personalAreaStateDescription: 'Maryland',
            preferredContact: '(187) 699-8222',
            phoneDesk: '(187) 699-8222',
            standardHours: '40.0',
            wageType: 'ET3',
            activityType: 'P3',
            countryGrouping: 'US',
            organizationUnit: '3000007',
            eEGroup: 'Standard',
            eEGroupCode: 'EC1',
            employeeSubgroupCode: 'ET3',
            employeeStatusDescription: 'Active',
            managerId: '50000024',
            jobKey: '50003860',
            jobDescription: 'Consultant HC HR StratCom',
            companyCode: '1000',
            companyCodeDescription: 'CompanyCodeDescription'
        },
        {
            id: 5,
            hasErrors: 0,
            processExecutionId: 3,
            globalEmployeeId: '50003069',
            employeeId: '50003069',
            effectDt: '2022-01/01 08:00:00',
            isPartner: 'N',
            lastName: 'Messi',
            firstName: 'Lionel',
            midName: 'GPS',
            nameSuffixCode: 'SU4',
            namePrfxCd: 'SU4',
            preferredName: 'PFN',
            originalHireDate:'2022-01/01 08:00:00',
            terminationDate: null,
            emailId: 'test@abc.com',
            costCenter: '100060145',
            annualWorkingHours: 2080,
            annualSalary: 123561,
            currency: 'USD',
            birthDt: '2022-01/01 08:00:00',
            timeSheetSchedule: 'WS_40',
            laborLocationCode: 'DFLT',
            contractorFlag: 'Y',
            employeeStatusCode: 'A',
            sEmplTypeCd: 'R',
            annualAmount: 123561,
            salaryRateType: 'A',
            serviceAreaDescription: '115',
            serviceLineDescription: 'Cyber Infraestructure',
            nationality: 'USA',
            personalAreaCountry: 'USA',
            personalAreaCity: 'Baltimore',
            personalAreaState: 'MD',
            personalAreaStateDescription: 'Maryland',
            preferredContact: '(187) 699-8222',
            phoneDesk: '(187) 699-8222',
            standardHours: '40.0',
            wageType: 'ET3',
            activityType: 'P3',
            countryGrouping: 'US',
            organizationUnit: '3000007',
            eEGroup: 'Standard',
            eEGroupCode: 'EC1',
            employeeSubgroupCode: 'ET3',
            employeeStatusDescription: 'Active',
            managerId: '50000024',
            jobKey: '50003860',
            jobDescription: 'Consultant HC HR StratCom',
            companyCode: '1000',
            companyCodeDescription: 'CompanyCodeDescription'
        },
        {
            id: 6,
            hasErrors: 0,
            processExecutionId: 3,
            globalEmployeeId: '50003070',
            employeeId: '50003070',
            effectDt: '2022-01/01 08:00:00',
            isPartner: 'N',
            lastName: 'Cristiano',
            firstName: 'Ronaldo',
            midName: 'GPS',
            nameSuffixCode: 'SU4',
            namePrfxCd: 'SU4',
            preferredName: 'PFN',
            originalHireDate:'2022-01/01 08:00:00',
            terminationDate: null,
            emailId: 'test@abc.com',
            costCenter: '100060145',
            annualWorkingHours: 2080,
            annualSalary: 123561,
            currency: 'USD',
            birthDt: '2022-01/01 08:00:00',
            timeSheetSchedule: 'WS_40',
            laborLocationCode: 'DFLT',
            contractorFlag: 'Y',
            employeeStatusCode: 'A',
            sEmplTypeCd: 'R',
            annualAmount: 123561,
            salaryRateType: 'A',
            serviceAreaDescription: '115',
            serviceLineDescription: 'Cyber Infraestructure',
            nationality: 'USA',
            personalAreaCountry: 'USA',
            personalAreaCity: 'Baltimore',
            personalAreaState: 'MD',
            personalAreaStateDescription: 'Maryland',
            preferredContact: '(187) 699-8222',
            phoneDesk: '(187) 699-8222',
            standardHours: '40.0',
            wageType: 'ET3',
            activityType: 'P3',
            countryGrouping: 'US',
            organizationUnit: '3000007',
            eEGroup: 'Standard',
            eEGroupCode: 'EC1',
            employeeSubgroupCode: 'ET3',
            employeeStatusDescription: 'Active',
            managerId: '50000024',
            jobKey: '50003860',
            jobDescription: 'Consultant HC HR StratCom',
            companyCode: '1000',
            companyCodeDescription: 'CompanyCodeDescription'
        },
        {
            id: 7,
            hasErrors: 0,
            processExecutionId: 3,
            globalEmployeeId: '50003071',
            employeeId: '50003071',
            effectDt: '2022-01/01 08:00:00',
            isPartner: 'N',
            lastName: 'Mo',
            firstName: 'Salah',
            midName: 'GPS',
            nameSuffixCode: 'SU4',
            namePrfxCd: 'SU4',
            preferredName: 'PFN',
            originalHireDate:'2022-01/01 08:00:00',
            terminationDate: null,
            emailId: 'test@abc.com',
            costCenter: '100060145',
            annualWorkingHours: 2080,
            annualSalary: 123561,
            currency: 'USD',
            birthDt: '2022-01/01 08:00:00',
            timeSheetSchedule: 'WS_40',
            laborLocationCode: 'DFLT',
            contractorFlag: 'Y',
            employeeStatusCode: 'A',
            sEmplTypeCd: 'R',
            annualAmount: 123561,
            salaryRateType: 'A',
            serviceAreaDescription: '115',
            serviceLineDescription: 'Cyber Infraestructure',
            nationality: 'USA',
            personalAreaCountry: 'USA',
            personalAreaCity: 'Baltimore',
            personalAreaState: 'MD',
            personalAreaStateDescription: 'Maryland',
            preferredContact: '(187) 699-8222',
            phoneDesk: '(187) 699-8222',
            standardHours: '40.0',
            wageType: 'ET3',
            activityType: 'P3',
            countryGrouping: 'US',
            organizationUnit: '3000007',
            eEGroup: 'Standard',
            eEGroupCode: 'EC1',
            employeeSubgroupCode: 'ET3',
            employeeStatusDescription: 'Active',
            managerId: '50000024',
            jobKey: '50003860',
            jobDescription: 'Consultant HC HR StratCom',
            companyCode: '1000',
            companyCodeDescription: 'CompanyCodeDescription'
        },
        {
            id: 8,
            hasErrors: 0,
            processExecutionId: 3,
            globalEmployeeId: '50003072',
            employeeId: '50003072',
            effectDt: '2022-01/01 08:00:00',
            isPartner: 'N',
            lastName: 'Neymar',
            firstName: 'Jr',
            midName: 'GPS',
            nameSuffixCode: 'SU4',
            namePrfxCd: 'SU4',
            preferredName: 'PFN',
            originalHireDate:'2022-01/01 08:00:00',
            terminationDate: null,
            emailId: 'test@abc.com',
            costCenter: '100060145',
            annualWorkingHours: 2080,
            annualSalary: 123561,
            currency: 'USD',
            birthDt: '2022-01/01 08:00:00',
            timeSheetSchedule: 'WS_40',
            laborLocationCode: 'DFLT',
            contractorFlag: 'Y',
            employeeStatusCode: 'A',
            sEmplTypeCd: 'R',
            annualAmount: 123561,
            salaryRateType: 'A',
            serviceAreaDescription: '115',
            serviceLineDescription: 'Cyber Infraestructure',
            nationality: 'USA',
            personalAreaCountry: 'USA',
            personalAreaCity: 'Baltimore',
            personalAreaState: 'MD',
            personalAreaStateDescription: 'Maryland',
            preferredContact: '(187) 699-8222',
            phoneDesk: '(187) 699-8222',
            standardHours: '40.0',
            wageType: 'ET3',
            activityType: 'P3',
            countryGrouping: 'US',
            organizationUnit: '3000007',
            eEGroup: 'Standard',
            eEGroupCode: 'EC1',
            employeeSubgroupCode: 'ET3',
            employeeStatusDescription: 'Active',
            managerId: '50000024',
            jobKey: '50003860',
            jobDescription: 'Consultant HC HR StratCom',
            companyCode: '1000',
            companyCodeDescription: 'CompanyCodeDescription'
        },
        {
            id: 9,
            hasErrors: 0,
            processExecutionId: 3,
            globalEmployeeId: '50003069',
            employeeId: '50003069',
            effectDt: '2022-01/01 08:00:00',
            isPartner: 'N',
            lastName: 'Messi',
            firstName: 'Lionel',
            midName: 'GPS',
            nameSuffixCode: 'SU4',
            namePrfxCd: 'SU4',
            preferredName: 'PFN',
            originalHireDate:'2022-01/01 08:00:00',
            terminationDate: null,
            emailId: 'test@abc.com',
            costCenter: '100060145',
            annualWorkingHours: 2080,
            annualSalary: 123561,
            currency: 'USD',
            birthDt: '2022-01/01 08:00:00',
            timeSheetSchedule: 'WS_40',
            laborLocationCode: 'DFLT',
            contractorFlag: 'Y',
            employeeStatusCode: 'A',
            sEmplTypeCd: 'R',
            annualAmount: 123561,
            salaryRateType: 'A',
            serviceAreaDescription: '115',
            serviceLineDescription: 'Cyber Infraestructure',
            nationality: 'USA',
            personalAreaCountry: 'USA',
            personalAreaCity: 'Baltimore',
            personalAreaState: 'MD',
            personalAreaStateDescription: 'Maryland',
            preferredContact: '(187) 699-8222',
            phoneDesk: '(187) 699-8222',
            standardHours: '40.0',
            wageType: 'ET3',
            activityType: 'P3',
            countryGrouping: 'US',
            organizationUnit: '3000007',
            eEGroup: 'Standard',
            eEGroupCode: 'EC1',
            employeeSubgroupCode: 'ET3',
            employeeStatusDescription: 'Active',
            managerId: '50000024',
            jobKey: '50003860',
            jobDescription: 'Consultant HC HR StratCom',
            companyCode: '1000',
            companyCodeDescription: 'CompanyCodeDescription'
        },
        {
            id: 10,
            hasErrors: 0,
            processExecutionId: 3,
            globalEmployeeId: '50003070',
            employeeId: '50003070',
            effectDt: '2022-01/01 08:00:00',
            isPartner: 'N',
            lastName: 'Cristiano',
            firstName: 'Ronaldo',
            midName: 'GPS',
            nameSuffixCode: 'SU4',
            namePrfxCd: 'SU4',
            preferredName: 'PFN',
            originalHireDate:'2022-01/01 08:00:00',
            terminationDate: null,
            emailId: 'test@abc.com',
            costCenter: '100060145',
            annualWorkingHours: 2080,
            annualSalary: 123561,
            currency: 'USD',
            birthDt: '2022-01/01 08:00:00',
            timeSheetSchedule: 'WS_40',
            laborLocationCode: 'DFLT',
            contractorFlag: 'Y',
            employeeStatusCode: 'A',
            sEmplTypeCd: 'R',
            annualAmount: 123561,
            salaryRateType: 'A',
            serviceAreaDescription: '115',
            serviceLineDescription: 'Cyber Infraestructure',
            nationality: 'USA',
            personalAreaCountry: 'USA',
            personalAreaCity: 'Baltimore',
            personalAreaState: 'MD',
            personalAreaStateDescription: 'Maryland',
            preferredContact: '(187) 699-8222',
            phoneDesk: '(187) 699-8222',
            standardHours: '40.0',
            wageType: 'ET3',
            activityType: 'P3',
            countryGrouping: 'US',
            organizationUnit: '3000007',
            eEGroup: 'Standard',
            eEGroupCode: 'EC1',
            employeeSubgroupCode: 'ET3',
            employeeStatusDescription: 'Active',
            managerId: '50000024',
            jobKey: '50003860',
            jobDescription: 'Consultant HC HR StratCom',
            companyCode: '1000',
            companyCodeDescription: 'CompanyCodeDescription'
        },
        {
            id: 11,
            hasErrors: 0,
            processExecutionId: 3,
            globalEmployeeId: '50003071',
            employeeId: '50003071',
            effectDt: '2022-01/01 08:00:00',
            isPartner: 'N',
            lastName: 'Mo',
            firstName: 'Salah',
            midName: 'GPS',
            nameSuffixCode: 'SU4',
            namePrfxCd: 'SU4',
            preferredName: 'PFN',
            originalHireDate:'2022-01/01 08:00:00',
            terminationDate: null,
            emailId: 'test@abc.com',
            costCenter: '100060145',
            annualWorkingHours: 2080,
            annualSalary: 123561,
            currency: 'USD',
            birthDt: '2022-01/01 08:00:00',
            timeSheetSchedule: 'WS_40',
            laborLocationCode: 'DFLT',
            contractorFlag: 'Y',
            employeeStatusCode: 'A',
            sEmplTypeCd: 'R',
            annualAmount: 123561,
            salaryRateType: 'A',
            serviceAreaDescription: '115',
            serviceLineDescription: 'Cyber Infraestructure',
            nationality: 'USA',
            personalAreaCountry: 'USA',
            personalAreaCity: 'Baltimore',
            personalAreaState: 'MD',
            personalAreaStateDescription: 'Maryland',
            preferredContact: '(187) 699-8222',
            phoneDesk: '(187) 699-8222',
            standardHours: '40.0',
            wageType: 'ET3',
            activityType: 'P3',
            countryGrouping: 'US',
            organizationUnit: '3000007',
            eEGroup: 'Standard',
            eEGroupCode: 'EC1',
            employeeSubgroupCode: 'ET3',
            employeeStatusDescription: 'Active',
            managerId: '50000024',
            jobKey: '50003860',
            jobDescription: 'Consultant HC HR StratCom',
            companyCode: '1000',
            companyCodeDescription: 'CompanyCodeDescription'
        },
        {
            id: 12,
            hasErrors: 0,
            processExecutionId: 3,
            globalEmployeeId: '50003072',
            employeeId: '50003072',
            effectDt: '2022-01/01 08:00:00',
            isPartner: 'N',
            lastName: 'Neymar',
            firstName: 'Jr',
            midName: 'GPS',
            nameSuffixCode: 'SU4',
            namePrfxCd: 'SU4',
            preferredName: 'PFN',
            originalHireDate:'2022-01/01 08:00:00',
            terminationDate: null,
            emailId: 'test@abc.com',
            costCenter: '100060145',
            annualWorkingHours: 2080,
            annualSalary: 123561,
            currency: 'USD',
            birthDt: '2022-01/01 08:00:00',
            timeSheetSchedule: 'WS_40',
            laborLocationCode: 'DFLT',
            contractorFlag: 'Y',
            employeeStatusCode: 'A',
            sEmplTypeCd: 'R',
            annualAmount: 123561,
            salaryRateType: 'A',
            serviceAreaDescription: '115',
            serviceLineDescription: 'Cyber Infraestructure',
            nationality: 'USA',
            personalAreaCountry: 'USA',
            personalAreaCity: 'Baltimore',
            personalAreaState: 'MD',
            personalAreaStateDescription: 'Maryland',
            preferredContact: '(187) 699-8222',
            phoneDesk: '(187) 699-8222',
            standardHours: '40.0',
            wageType: 'ET3',
            activityType: 'P3',
            countryGrouping: 'US',
            organizationUnit: '3000007',
            eEGroup: 'Standard',
            eEGroupCode: 'EC1',
            employeeSubgroupCode: 'ET3',
            employeeStatusDescription: 'Active',
            managerId: '50000024',
            jobKey: '50003860',
            jobDescription: 'Consultant HC HR StratCom',
            companyCode: '1000',
            companyCodeDescription: 'CompanyCodeDescription'
        },
        {
            id: 13,
            hasErrors: 0,
            processExecutionId: 3,
            globalEmployeeId: '50003069',
            employeeId: '50003069',
            effectDt: '2022-01/01 08:00:00',
            isPartner: 'N',
            lastName: 'Messi',
            firstName: 'Lionel',
            midName: 'GPS',
            nameSuffixCode: 'SU4',
            namePrfxCd: 'SU4',
            preferredName: 'PFN',
            originalHireDate:'2022-01/01 08:00:00',
            terminationDate: null,
            emailId: 'test@abc.com',
            costCenter: '100060145',
            annualWorkingHours: 2080,
            annualSalary: 123561,
            currency: 'USD',
            birthDt: '2022-01/01 08:00:00',
            timeSheetSchedule: 'WS_40',
            laborLocationCode: 'DFLT',
            contractorFlag: 'Y',
            employeeStatusCode: 'A',
            sEmplTypeCd: 'R',
            annualAmount: 123561,
            salaryRateType: 'A',
            serviceAreaDescription: '115',
            serviceLineDescription: 'Cyber Infraestructure',
            nationality: 'USA',
            personalAreaCountry: 'USA',
            personalAreaCity: 'Baltimore',
            personalAreaState: 'MD',
            personalAreaStateDescription: 'Maryland',
            preferredContact: '(187) 699-8222',
            phoneDesk: '(187) 699-8222',
            standardHours: '40.0',
            wageType: 'ET3',
            activityType: 'P3',
            countryGrouping: 'US',
            organizationUnit: '3000007',
            eEGroup: 'Standard',
            eEGroupCode: 'EC1',
            employeeSubgroupCode: 'ET3',
            employeeStatusDescription: 'Active',
            managerId: '50000024',
            jobKey: '50003860',
            jobDescription: 'Consultant HC HR StratCom',
            companyCode: '1000',
            companyCodeDescription: 'CompanyCodeDescription'
        },
        {
            id: 14,
            hasErrors: 0,
            processExecutionId: 3,
            globalEmployeeId: '50003070',
            employeeId: '50003070',
            effectDt: '2022-01/01 08:00:00',
            isPartner: 'N',
            lastName: 'Cristiano',
            firstName: 'Ronaldo',
            midName: 'GPS',
            nameSuffixCode: 'SU4',
            namePrfxCd: 'SU4',
            preferredName: 'PFN',
            originalHireDate:'2022-01/01 08:00:00',
            terminationDate: null,
            emailId: 'test@abc.com',
            costCenter: '100060145',
            annualWorkingHours: 2080,
            annualSalary: 123561,
            currency: 'USD',
            birthDt: '2022-01/01 08:00:00',
            timeSheetSchedule: 'WS_40',
            laborLocationCode: 'DFLT',
            contractorFlag: 'Y',
            employeeStatusCode: 'A',
            sEmplTypeCd: 'R',
            annualAmount: 123561,
            salaryRateType: 'A',
            serviceAreaDescription: '115',
            serviceLineDescription: 'Cyber Infraestructure',
            nationality: 'USA',
            personalAreaCountry: 'USA',
            personalAreaCity: 'Baltimore',
            personalAreaState: 'MD',
            personalAreaStateDescription: 'Maryland',
            preferredContact: '(187) 699-8222',
            phoneDesk: '(187) 699-8222',
            standardHours: '40.0',
            wageType: 'ET3',
            activityType: 'P3',
            countryGrouping: 'US',
            organizationUnit: '3000007',
            eEGroup: 'Standard',
            eEGroupCode: 'EC1',
            employeeSubgroupCode: 'ET3',
            employeeStatusDescription: 'Active',
            managerId: '50000024',
            jobKey: '50003860',
            jobDescription: 'Consultant HC HR StratCom',
            companyCode: '1000',
            companyCodeDescription: 'CompanyCodeDescription'
        },
        {
            id: 15,
            hasErrors: 0,
            processExecutionId: 3,
            globalEmployeeId: '50003071',
            employeeId: '50003071',
            effectDt: '2022-01/01 08:00:00',
            isPartner: 'N',
            lastName: 'Mo',
            firstName: 'Salah',
            midName: 'GPS',
            nameSuffixCode: 'SU4',
            namePrfxCd: 'SU4',
            preferredName: 'PFN',
            originalHireDate:'2022-01/01 08:00:00',
            terminationDate: null,
            emailId: 'test@abc.com',
            costCenter: '100060145',
            annualWorkingHours: 2080,
            annualSalary: 123561,
            currency: 'USD',
            birthDt: '2022-01/01 08:00:00',
            timeSheetSchedule: 'WS_40',
            laborLocationCode: 'DFLT',
            contractorFlag: 'Y',
            employeeStatusCode: 'A',
            sEmplTypeCd: 'R',
            annualAmount: 123561,
            salaryRateType: 'A',
            serviceAreaDescription: '115',
            serviceLineDescription: 'Cyber Infraestructure',
            nationality: 'USA',
            personalAreaCountry: 'USA',
            personalAreaCity: 'Baltimore',
            personalAreaState: 'MD',
            personalAreaStateDescription: 'Maryland',
            preferredContact: '(187) 699-8222',
            phoneDesk: '(187) 699-8222',
            standardHours: '40.0',
            wageType: 'ET3',
            activityType: 'P3',
            countryGrouping: 'US',
            organizationUnit: '3000007',
            eEGroup: 'Standard',
            eEGroupCode: 'EC1',
            employeeSubgroupCode: 'ET3',
            employeeStatusDescription: 'Active',
            managerId: '50000024',
            jobKey: '50003860',
            jobDescription: 'Consultant HC HR StratCom',
            companyCode: '1000',
            companyCodeDescription: 'CompanyCodeDescription'
        },
        {
            id: 16,
            hasErrors: 0,
            processExecutionId: 3,
            globalEmployeeId: '50003072',
            employeeId: '50003072',
            effectDt: '2022-01/01 08:00:00',
            isPartner: 'N',
            lastName: 'Neymar',
            firstName: 'Jr',
            midName: 'GPS',
            nameSuffixCode: 'SU4',
            namePrfxCd: 'SU4',
            preferredName: 'PFN',
            originalHireDate:'2022-01/01 08:00:00',
            terminationDate: null,
            emailId: 'test@abc.com',
            costCenter: '100060145',
            annualWorkingHours: 2080,
            annualSalary: 123561,
            currency: 'USD',
            birthDt: '2022-01/01 08:00:00',
            timeSheetSchedule: 'WS_40',
            laborLocationCode: 'DFLT',
            contractorFlag: 'Y',
            employeeStatusCode: 'A',
            sEmplTypeCd: 'R',
            annualAmount: 123561,
            salaryRateType: 'A',
            serviceAreaDescription: '115',
            serviceLineDescription: 'Cyber Infraestructure',
            nationality: 'USA',
            personalAreaCountry: 'USA',
            personalAreaCity: 'Baltimore',
            personalAreaState: 'MD',
            personalAreaStateDescription: 'Maryland',
            preferredContact: '(187) 699-8222',
            phoneDesk: '(187) 699-8222',
            standardHours: '40.0',
            wageType: 'ET3',
            activityType: 'P3',
            countryGrouping: 'US',
            organizationUnit: '3000007',
            eEGroup: 'Standard',
            eEGroupCode: 'EC1',
            employeeSubgroupCode: 'ET3',
            employeeStatusDescription: 'Active',
            managerId: '50000024',
            jobKey: '50003860',
            jobDescription: 'Consultant HC HR StratCom',
            companyCode: '1000',
            companyCodeDescription: 'CompanyCodeDescription'
        }
      ],
    reducers: {},
    extraReducers: {
        //[getEmployeeStagingHistorics.fulfilled]: (state, action) => action.payload,
    },
});

export default employeeStagingHistoricsSlice.reducer;