const root_item    = document.querySelector(":root");
let cycle_hue_vars = ["--rnbw-color"];

const cycle_mode_focus = 0, cycle_mode_mouse = 1;

let current_hue      = 100,
	hue_translate    = 0.5,
	cycle_hue_active = 0,
	active_hue_listeners = 0,
	cycle_hue_count  = 0,
	cycle_hue_mode   = cycle_mode_mouse,
	cycle_hue_sleep  = 150;

function cycle_hue_sleep_fn(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function hsla_string(h, p, o) {
	return "hsl(" + h + "deg," + p + "%," + p + "%," + o + ")";
}

function hsl_string(h, p) {
	return "hsl(" + h + "deg," + p + "%," + p + "%)";
	@//return hsla(h, p, 1.0);
}

function hsl_rainbow(h) {
	return "hsl(" + h + "deg, 50%, 50%)";
}

function hsl_sherbet(h) {
	return "hsl(" + h + "deg, 75%, 75%)";
}

function filter_string(h) {
	return "invert(66%) sepia(32%) saturate(812%) hue-rotate(" + h + "deg) brightness(92%) contrast(92%)";
}

function iterate_hue() {
	current_hue = (current_hue+hue_translate)%360;

	root_item.style.setProperty("--rnbw-color", hsl_rainbow(current_hue));
	root_item.style.setProperty("--rnbw-color-hover", hsl_rainbow((current_hue+180)%360));

	@//root_item.style.setProperty("--rnbw-filter", filter_string(current_hue));
}

async function start_cycling_hue() {
	if(++cycle_hue_count == 1) {
		cycle_hue_active = 1;

		while(cycle_hue_active) {
			iterate_hue();

			await cycle_hue_sleep_fn(cycle_hue_sleep);
		}
	}
	--cycle_hue_count;
}

function stop_cycling_hue() {
	cycle_hue_active = 0;
}

function add_cycle_hue_listeners() {
	if(cycle_hue_mode == cycle_mode_focus) { 
		active_hue_listeners = 1;
		window.addEventListener("focus", start_cycling_hue);
		window.addEventListener("blur", stop_cycling_hue);
		@//window.onfocus = start_cycling_hue;
		@//window.onblur = stop_cycling_hue;
	}
	else if(cycle_hue_mode == cycle_mode_mouse) {
		active_hue_listeners = 1;
		document.getElementById("body").addEventListener("mouseenter", start_cycling_hue);
		document.getElementById("body").addEventListener("mouseleave", stop_cycling_hue);
		window.addEventListener("blur", stop_cycling_hue);
		@//document.getElementById("body").onmouseenter = start_cycling_hue;
		@//document.getElementById("body").onmouseleave = stop_cycling_hue;
	}
}

function remove_cycle_hue_listeners() {
	if(!active_hue_listeners) {
		alert("no active hue listeners");
		return;
	}

	else if(cycle_hue_mode == cycle_mode_focus) { 
		active_hue_listeners = 0;
		window.removeEventListener("focus", start_cycling_hue);
		window.removeEventListener("blur", stop_cycling_hue);
		@//window.removeAttribute("focus");
		@//window.removeAttribute("blur");
	}
	else if(cycle_hue_mode == cycle_mode_mouse) {
		active_hue_listeners = 0;
		document.getElementById("body").removeEventListener("mouseenter", start_cycling_hue);
		document.getElementById("body").removeEventListener("mouseleave", stop_cycling_hue);
		window.removeEventListener("blur", stop_cycling_hue);
		@//document.getElementById("body").removeAttribute("mouseenter");
		@//document.getElementById("body").removeAttribute("mouseleave");
	}
}

function set_cycle_mode(mode) {
	if(mode == cycle_hue_mode)
		alert("cycle hue mode is already '" + mode + "'");
	else if(mode == cycle_mode_focus || mode == cycle_mode_mouse) {
		remove_cycle_hue_listeners();
		cycle_hue_mode = mode;
		add_cycle_hue_listeners();
	}
	else
		alert("do not recognise cycle hue mode '" + mode + "'");
}

function cycle_hue_init() {
	iterate_hue();

	add_cycle_hue_listeners();
}
cycle_hue_init();
@//set_cycle_mode(cycle_mode_mouse);
@//set_cycle_mode(cycle_mode_focus); 
start_cycling_hue();