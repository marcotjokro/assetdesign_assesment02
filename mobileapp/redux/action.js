export function ChangePage(page){
	return {
		type:"CHANGE_PAGE",
		page:page
	}
}

export function ChangeStatus(status){
	return {
		type:"CHANGE_STATUS",
		status:status
	}
}

export function ChangeBG(bgcolor){
	return {
		type:"CHANGE_BG",
		bgcolor:bgcolor
	}
}

export function ChangeNightmode(nightmode){
	return {
		type:"CHANGE_NIGHTMODE",
		nightmode:nightmode
	}
}