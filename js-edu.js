//Solution for rsSchool Task "JS EDU" https://github.com/davojta/js-edu
/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
	focus = "family",
	knowsProgramming = true,
	config = { family: 4 }
) {
	//Total hours
	const hoursJS = 800;
	const hoursBasic = 500;
	//Knowing programming is better
	let hours;
	if (knowsProgramming) {
		hours = hoursJS;
	} else {
		hours = hoursBasic + hoursJS;
	}
	//Weeks = (Total Hours) / (Hours by Week)
	weeks = hours / config[focus];
	//Round to largest whole number
	weeks = Math.ceil(weeks);
	return weeks;
};
