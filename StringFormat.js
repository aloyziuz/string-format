module.exports = {
    /**
     * will implement format method under string prototype. 
     * usage: "{0} am cool".format("I");
     */
    ImplementFormat: function(){
        // First, checks if it isn't implemented yet.
        if (!String.prototype.format) {
            String.prototype.format = function() {
                var args = arguments;
                return this.replace(/{(\d+)}/g, function(match, number) {
                return typeof args[number] != 'undefined'
                    ? args[number]
                    : match
                ;
                });
            };
        }
    },
    
    /**
     * provides string format functionality through method call. 
     * usage: String.format("{0} {1}", "foo", "bar")
     */
    format: function(){
        var args = arguments;
        return args[0].replace(/{(\d+)}/g, function(match, number) {
        return typeof args[Number(number) + 1] != 'undefined'
            ? args[Number(number) + 1]
            : match
        ;
        });
    }
}
