const initialStates = {
	page: 1,
	status: "",
	bgcolor: "white",
	nightmode: false
}

export function Page(state=initialStates, action){
	var obj = Object.assign({}, state);
	
	switch(action.type){
		case "CHANGE_STATUS":
			obj.status = action.status;
			return obj;
			
		case "CHANGE_PAGE":
			obj.page = action.page;
			return obj;
		
		case "CHANGE_BG":
			obj.bgcolor = action.bgcolor;
			return obj;
			
		case "CHANGE_NIGHTMODE":
			obj.nightmode = action.nightmode;
			return obj;
			
		default:
			return state;
	}
}