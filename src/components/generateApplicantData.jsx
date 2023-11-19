export default function generateApplicantData() {
	const applicantData = {
	firstName: localStorage.getItem('firstName'),
    lastName: localStorage.getItem('lasttName'),
    cell: localStorage.getItem('streetAddress'),
    user_Email: localStorage.getItem('email'),
    user_Password: "Joi.string().required()",
    sector: "Joi.string().required()",
    city: localStorage.getItem('city'),
    district: "Joi.string().required()",
    province: localStorage.getItem('stateorprovince'),
    phoneNumber: "Joi.string().required()",
    DateOfBirth: localStorage.getItem('dateOfBirth'),
    id: "Joi.string().required()",
    citizenship: "Joi.string().required()",
    architecture: localStorage.getItem('architecture'),
    engineeiring: localStorage.getItem('engineering'),
    construction: localStorage.getItem('construction'),
    other: "Joi.string().required()",
    employed: "Joi.string().required()",
    company_name: "Joi.string()",
    supervisor_address: "Joi.string().required()",
    supervisor_email: "combo@gmail.com",
    highschool: localStorage.getItem('highSchool'),
    highschool_address: localStorage.getItem('highSchoolAddress'),
    highschool_diploma: "Joi.string().required()",
    highschool_graduated: localStorage.getItem('highFinish'),
    university: localStorage.getItem('uniSchool'),
    university_address: localStorage.getItem('uniSchoolAddress'),
    university_diploma: "Joi.string().required()",
    university_graduated: "Joi.string().required()",
    availability_time_from: localStorage.getItem('availFrom'),
    availability_time_to: localStorage.getItem('availTo'),
    area_excel_1: localStorage.getItem('areaexcell1'),
    area_excel_2: localStorage.getItem('areaexcell2'),
    area_excel_3: localStorage.getItem('aeaexcell3'),
    area_improve_1: localStorage.getItem('aeaimp1'),
    area_improve_2: localStorage.getItem('aeaimp2'),
    area_improve_3: localStorage.getItem('aeaimp3'),
    referal_1_company: localStorage.getItem('r1cn'),
    referal_1_company_email: localStorage.getItem('r1em'),
    referal_1_company_phone: localStorage.getItem('r1pn'),
    referal_1_company_relationship: localStorage.getItem('r1rs'),
    referal_2_company: localStorage.getItem('r2cn'),
    referal_2_company_email: localStorage.getItem('r2em'),
    referal_2_company_phone: localStorage.getItem('r2pn'),
    referal_2_company_relationship: localStorage.getItem('r2rs'),
    cv_link: localStorage.getItem('resumeorcv@primecs'),
    application_letter_link: localStorage.getItem('applicationletter@primecs'),
    payment_receipt_link: localStorage.getItem('paymentreceipt@primecs')
	}


	return applicantData
}