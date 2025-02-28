// switch( expression ) {
// 	case value1:
// 		console.log("Hello");
// 		break;
// 	case value2:
// 		console.log("Hello2");
// 		break;
// 	default:
// 		console.log("Default");
// }

switch( 5 ) {
	case 1:
		console.log("Hello");
		break;
	case 2:
		console.log("Hello2");
		break;
	default:
		console.log("Default");
}

// if we do not use break; next cases will run 
switch( 'test2' ) {
	case 'test':
		console.log("Hello");
	case 'test2':
		console.log("Hello2");
	default:
		console.log("Default");
}