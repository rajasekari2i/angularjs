
//Customer model
var customer = function() {
    this.name;
    this.address;
    this.mobile;
    this.state;

    this.getName = function(){
        return this.name;
    }
    this.setName = function(name) {
        this.name = name;
    }
}