function f(resolv, reject)
{
	// executam instructiuni !!!

	resolv(" :) ");
	// reject(" (: ");
}
//----------------------------------------------


function on_succes(e)
{
	console.log("Result = " + e);
}
//----------------------------------------------


function on_failure(e)
{
	console.log("Result = " + e);
}
//----------------------------------------------


function start()
{

	console.log("Before promise is created");
	var promise = new Promise(f);

	promise.then(on_succes).catch(on_failure);
	console.log("Before end of start function");

}
//-----------------------------------------------


