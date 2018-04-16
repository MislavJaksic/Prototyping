function LogicalTimer(){
  this.time = 0;
};

LogicalTimer.prototype.SetTime = function(time){
  if (time > 0){
    this.time = time;
  } else {
    this.time = 0;
  };
};

LogicalTimer.prototype.DecrementTime = function(){
  if (this.time > 0){
    this.time -= 1;
  } else {
    this.time = 0;
  };
};

LogicalTimer.prototype.GetTime = function(){
  return this.time;
};


function Pump(ID){
  this.ID = ID;
  this.components = this._CreateComponents();
  
  this.on = false;
  this.exploded = false;
  this.status = "Stopped";
  this.heat = 0;
  this.production = 0;
  
  this.max_heat = 100;
  this.min_heat = 0;
  this.explosion_treshold = 98;
  this.warning_theshold = this.explosion_treshold - 5;
  
  this.cooling_power = 5;
  
  this.components_with_timers = ["on_button", "off_button", "cool_button"];
};

Pump.prototype._CreateComponents = function(){
  var components = new Map();
  components.set("heat_display", this._CreateHeatDisplay());
  components.set("production_display", this._CreateProductionDisplay());
  components.set("status_display", this._CreateStatusDisplay());
  components.set("on_button", this._CreateOnButton());
  components.set("off_button", this._CreateOffButton());
  components.set("cool_button", this._CreateCoolButton());
  
  return components;
};

Pump.prototype._CreateHeatDisplay = function(){
  var heat_display = document.createElement('p');
  heat_display.textContent = 'Heat:';
  return heat_display;
};

Pump.prototype._CreateProductionDisplay = function(){
  var production_display = document.createElement('p');
  production_display.textContent = 'Production:';
  return production_display;
};

Pump.prototype._CreateStatusDisplay = function(){
  var status_display = document.createElement('p');
  status_display.textContent = 'Status:';
  return status_display;
};

Pump.prototype._CreateOnButton = function(){
  var on_button = document.createElement('button');
  this._PopulateButtonAttributes(on_button, "ON");
  
  on_button.addEventListener("click", this._OnButtonAction);
  
  return on_button;
};

Pump.prototype._CreateOffButton = function(){
  var off_button = document.createElement('button');
  this._PopulateButtonAttributes(off_button, "OFF");
  
  off_button.addEventListener("click", this._OffButtonAction);
  
  return off_button;
};

Pump.prototype._CreateCoolButton = function(){
  var cool_button = document.createElement('button');
  this._PopulateButtonAttributes(cool_button, "Cool");
  
  cool_button.addEventListener("click", this._CoolButtonAction);
  
  return cool_button;
};

Pump.prototype._PopulateButtonAttributes = function(button, text){
  button.type = "button";
  button.id = this.ID;
  button.textContent = text;
  
  button.timer = new LogicalTimer();
};


Pump.prototype._OnButtonAction = function(){
  var button = this;
  var pump = page_objects.get(button.id)
  
  pump._StartPump();
  
  this.timer.SetTime(5);
  this.disabled = true;
};

Pump.prototype._OffButtonAction = function(){
  var button = this;
  var pump = page_objects.get(button.id)
  
  pump._StopPump();
  
  this.timer.SetTime(5);
  this.disabled = true;
};

Pump.prototype._CoolButtonAction = function(){
  var button = this;
  var pump = page_objects.get(button.id)
  
  pump._CoolPump();
  
  this.timer.SetTime(5);
  this.disabled = true;
};


Pump.prototype._StartPump = function(){
  this.on = true;
};

Pump.prototype._StopPump = function(){
  this.on = false;
};

Pump.prototype._CoolPump = function(){
  if (this.heat > (this.cooling_power - 1)){
    this.heat -= this.cooling_power;
  } else {
    this.heat = 0;
  };
};

Pump.prototype._IncrementHeat = function(){
  if (this.heat < this.max_heat){
    this.heat += 1;
  };
};

Pump.prototype._DecrementHeat = function(){
  if (this.heat > this.min_heat){
    this.heat -= 1;
  };
};


Pump.prototype._UpdateProduction = function(){
  this.production = this._CalcProduction();
};

Pump.prototype._CalcProduction = function(){
  var production = 0.00;
  
  if (this.heat <= 60) {
    production = this._CalcLowHeatProduction();
    
  } else if ( (this.heat > 60) && (this.heat <= 90) ){
    production = this._CalcHighHeatProduction();
    
  } else {
    production = 1.00;
  };
  
  production = this._Rounding(production, 2);
  
  return production
};

Pump.prototype._CalcLowHeatProduction = function(){
  return (0.4 * (this.heat / 60));
};

Pump.prototype._CalcHighHeatProduction = function(){
  return (0.4 + 0.6 * ((this.heat - 60) / 30));
};

Pump.prototype._Rounding = function(number, precision){
  var factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
};


Pump.prototype._UpdateStatus = function(){
  if (this.exploded){
    this.status = "Exploded from overheating";
  }
  else if (this._IsOverheatingAndRunning()){
    this.status = "Danger! Pump may explode!";
  }
  else if (this.on){
    this.status = "Running";
  }
  else if (!this.on){
    this.status = "Stopped";
  }
  else {
    this.status = "ERROR";
  };
};

Pump.prototype._IsOverheatingAndRunning = function(){
  if (this.heat > this.warning_theshold){
    if (this.on){
      return true;
    };
  };
  return false;
};

Pump.prototype._UpdateIfExploded = function(){
  if (this._IsHeatOverExplosionTreshold()){
    this.exploded = true;
  };
};

Pump.prototype._IsHeatOverExplosionTreshold = function(){
  if (this.heat > this.explosion_treshold){
      return true;
    };
  return false;
};


Pump.prototype._DecrementTimers = function(){
  for (let i = 0; i < this.components_with_timers.length; i++){
    var component = this.components.get(this.components_with_timers[i]);
    component.timer.DecrementTime();
  };
};

Pump.prototype._ActOnTimers = function(){
  for (let i = 0; i < this.components_with_timers.length; i++){
    var component = this.components.get(this.components_with_timers[i]);
    var time = component.timer.GetTime();
    
    if (time < 1){
      component.disabled = false;
    };
  };
};


Pump.prototype._DisplayHeat = function(){
  var display = this.components.get("heat_display");
  display.textContent = "Heat: " + this.heat;
};

Pump.prototype._DisplayProduction = function(){
  var display = this.components.get("production_display");
  display.textContent = "Production: " + this.production;
};

Pump.prototype._DisplayStatus = function(){
  var display = this.components.get("status_display");
  display.textContent = "Status: " + this.status;
};

Pump.prototype.AddToPage = function(){
  this.components.forEach(function (component, component_key, components_map) {
    body.appendChild(component);
  });
};

Pump.prototype.Update = function(){
  if (this.on){
    this._IncrementHeat();
    
  } else {
    this._DecrementHeat();
  };
  this._UpdateIfExploded();
  this._UpdateProduction();
  this._UpdateStatus();
  
  this._DecrementTimers();
  this._ActOnTimers();
  
  this._DisplayHeat();
  this._DisplayProduction();
  this._DisplayStatus();
};


function CreatePageObjects(){
  var pump = new Pump("#1443");
  pump.AddToPage();
  
  //var another = new Pump("#5555");
  //another.AddToPage();
  
  var page_objects = new Map();
  page_objects.set("#1443", pump);
  //page_objects.set("#5555", another);
  
  return page_objects;
};

var body = document.querySelector('body');

var page_objects = CreatePageObjects();

var refresher = window.setInterval(Refresh, 500);

function Refresh(){
  page_objects.forEach(function (object, object_key, page_objects_map) {
    object.Update();
  });
  
};

























