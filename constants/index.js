export const expensesCategory = {
	'': { name: 'Select', emoji: ' ' },
	education: { name: 'Education', emoji: '๐' },
	entertainment: { name: 'Entertainment', emoji: '๐ฟ' },
	bills: { name: 'Bills', emoji: '๐งพ' },
	food: { name: 'Food', emoji: '๐' },
	grocery: { name: 'Grocery', emoji: '๐' },
	order: { name: 'Online Order', emoji: '๐ฆ' },
	other: { name: 'Others', emoji: '๐คท๐ปโโ๏ธ' },
	emi: { name: 'EMI', emoji: '๐ค' },
	savings: { name: 'Savings', emoji: '๐ฐ' },
	debt: { name: 'Debt', emoji: '๐ธ' },
	loan: { name: 'Loan', emoji: '๐คซ' },
	medical: { name: 'Medical', emoji: '๐ฅ' },
	rent: { name: 'Rent', emoji: '๐ ' },
	shopping: { name: 'Shopping', emoji: '๐๏ธ' },
	travel: { name: 'Travel', emoji: 'โ๏ธ' },
};

export const expensesPaidViaList = {
	cash: { name: 'Cash', emoji: '๐ต' },
	creditcard: { name: 'Credit Card', emoji: '๐ณ' },
	debitcard: { name: 'Debit Card', emoji: '๐ณ' },
	netbanking: { name: 'Netbanking', emoji: '๐ฆ' },
	upi: { name: 'UPI', emoji: '๐ฒ' },
};

export const groupedExpensesCategory = {
	dailyessentials: {
		name: 'Essentials',
		list: {
			food: expensesCategory.food,
			grocery: expensesCategory.grocery,
			medical: expensesCategory.medical,
		},
	},
	expenses: {
		name: 'Expenses',
		list: {
			bills: expensesCategory.bills,
			education: expensesCategory.education,
			order: expensesCategory.order,
			rent: expensesCategory.rent,
		},
	},
	leisure: {
		name: 'Leisure',
		list: {
			entertainment: expensesCategory.entertainment,
			shopping: expensesCategory.shopping,
			travel: expensesCategory.travel,
		},
	},
	payments: {
		name: 'Payments',
		list: {
			emi: expensesCategory.emi,
			savings: expensesCategory.savings,
			debt: expensesCategory.debt,
			loan: expensesCategory.loan,
		},
	},
};

export const incomeCategory = {
	'': 'Select',
	ads: 'Ads',
	other: 'Other',
	salary: 'Salary',
	youtube: 'Youtube',
};

export const investmentCategory = {
	'': 'Select',
	crypto: 'Crypto Currency',
	indianstock: 'Indian Stock',
	mutualfunds: 'Mutual Funds',
	other: 'Other',
	usstock: 'US Stock',
};

export const datePattern = 'd{2}-d{2}-d{4}';
export const dateFormatStr = 'yyyy-MM-dd';

export const payingKey = {
	monthly: 'monthly',
	yearly: 'yearly',
};

export const subscriptionPayment = {
	[payingKey.monthly]: 'Month',
	[payingKey.yearly]: 'Year',
};

export const siteUrls = {
	app: 'https://app.expense.fyi',
	home: 'expense.fyi',
	signup: 'https://app.expense.fyi/signup',
	signin: 'https://app.expense.fyi/signin',
	local: 'localhost:3000',
	appLocal: 'http://app.localhost:3000',
	localSignup: `http://app.localhost:3000/signup`,
	localSignin: `http://app.localhost:3000/signin`,
	subdomain: '.expense.fyi',
	subdomainLocal: '.localhost:3000',
	githubUrl: 'https://github.com/gokulkrishh/expense.fyi',
	twitterUrl: 'https://twitter.com/gokul_i',
};

const originalPriceMonthly = 400;
const originalPriceYearly = 50;
const discountPercentage = 40;

export const tiers = {
	monthly: { basic: 0, premium: (originalPriceMonthly / 100) * discountPercentage, og: originalPriceMonthly },
	yearly: { basic: 0, premium: (originalPriceYearly / 100) * discountPercentage, og: originalPriceYearly },
};

export const paymentOptions = { currency: 'USD', locale: 'en' };

export const tierNames = {
	basic: {
		key: 'basic',
		name: 'Basic',
		usageLimit: 100,
	},
	premium: {
		key: 'premium',
		name: 'Premium',
		usageLimit: 2500,
	},
	expired: {
		key: 'expired',
		name: 'Expired',
	},
};

export const siteName = 'Expense.fyi';

export const logo = `https://${siteUrls.home}/static/icons/logo.png`;

export const basicPlanUsageLimit = 100;
export const premiumPlanUsageLimit = 2500;

export const sentFromEmailId = 'Gokul from Expense.fyi <hello@expense.fyi>';

export const shortcuts = {
	sidebar: {
		overview: { path: '/', shortcut: 'o' },
		income: { path: '/income', shortcut: 'i' },
		expenses: { path: '/expenses', shortcut: 'e' },
		subscriptions: { path: '/subscriptions', shortcut: 's' },
		investments: { path: '/investments', shortcut: 'v' },
	},
	expenses: { add: { shortcut: 'a' } },
	income: { add: { shortcut: 'a' } },
	subscriptions: { add: { shortcut: 'a' } },
	investments: { add: { shortcut: 'a' } },
	overview: {
		feedback: { shortcut: 'f' },
	},
};
