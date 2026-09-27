// Lightweight smoke tests. Pure logic only so they run without booting the whole renderer.
export function runSmokeTests(api) {
  const results = [];
  const check=(name,fn)=>{try{results.push({name,pass:!!fn()})}catch(error){results.push({name,pass:false,error:String(error)})}};
  check("joystick up is forward",()=>api.joystickToMove(0,-1,0).forward>0);
  check("joystick down is backward",()=>api.joystickToMove(0,1,0).forward<0);
  check("snap uses grid centers",()=>api.snap(0)===api.unit/2 && api.snap(api.unit)===api.unit*1.5);
  check("placed object faces player",()=>Number.isFinite(api.facePlayerYaw({x:0,z:0},{x:1,z:1})));
  check("jump starts upward",()=>api.jumpVelocity()>0);
  return results;
}
