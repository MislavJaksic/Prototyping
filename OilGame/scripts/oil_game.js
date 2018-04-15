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
  
  on_button.addEventListener("click", this._StartPump);
  
  return on_button;
};

Pump.prototype._CreateOffButton = function(){
  var off_button = document.createElement('button');
  this._PopulateButtonAttributes(off_button, "OFF");
  
  off_button.addEventListener("click", this._StopPump);
  
  return off_button;
};

Pump.prototype._CreateCoolButton = function(){
  var cool_button = document.createElement('button');
  this._PopulateButtonAttributes(cool_button, "Cool");
  
  cool_button.addEventListener("click", this._CoolPump);
  
  return cool_button;
};

Pump.prototype._PopulateButtonAttributes = function(button, text){
  button.type = "button";
  button.id = this.ID;
  button.textContent = text;
};


Pump.prototype._StartPump = function(){
  var button = this;
  var pump = page_objects.get(button.id)
  
  pump.on = true;
};

Pump.prototype._StopPump = function(){
  var button = this;
  var pump = page_objects.get(button.id)
  
  pump.on = false;
};

Pump.prototype._CoolPump = function(){
  var button = this;
  var pump = page_objects.get(button.id)
  
  if (pump.heat > 4){
    pump.heat -= 5;
  } else {
    pump.heat = 0;
  };
};

Pump.prototype._IncreaseHeat = function(){
  if (this.heat < this.max_heat){
    this.heat += 1;
  };
};

Pump.prototype._DecreaseHeat = function(){
  if (this.heat > this.min_heat){
    this.heat -= 1;
  };
};

Pump.prototype._UpdateProduction = function(){
  this.production = this._CalculateProduction();
};

Pump.prototype._CalculateProduction = function(){
  var production = 0.0;
  
  if (this.heat <= 60) {
    production = 0.4 * (this.heat / 60);
    
  } else if ( (this.heat > 60) && (this.heat <= 90) ){
    production = 0.4 + 0.6 * ((this.heat - 60) / 30);
    
  } else {
    production = 1.0;
  };
  
  production = this._Rounding(production, 2);
  
  return production
};

Pump.prototype._Rounding = function(number, precision){
  var factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
};

Pump.prototype._UpdateStatus = function(){
  if (this.exploded){
    this.status = "Exploded from overheating";
  }
  else if (this.heat > (this.warning_theshold)){
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

Pump.prototype._UpdateIfExploded = function(){
  if (this._IsHeatOverExplisionTreshold()){
    this.exploded = true;
  };
};

Pump.prototype._IsHeatOverExplisionTreshold = function(){
  if (this.heat > this.explosion_treshold){
      return true;
    };
  return false;
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
    this._IncreaseHeat();
    
  } else {
    this._DecreaseHeat();
  };
  
  this._UpdateProduction();
  
  this._UpdateStatus();
  
  this._UpdateIfExploded();
  
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

























