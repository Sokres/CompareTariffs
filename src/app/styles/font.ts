import localFont from 'next/font/local';

const CaviarDreams = localFont({
	variable: '--my-font',
	src: [
		{
			path: '../fonts/CaviarDreams.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../fonts/Caviar_Dreams_Bold.woff2',
			weight: '700',
			style: 'normal',
		},
	],
});

export { CaviarDreams };
