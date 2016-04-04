var pluginJson = require(__dirname + '/plugin.json');

module.exports = function(js, component) {
    var thisPlugin = JSON.parse(JSON.stringify(pluginJson));

    _.each(app.project.settings.components, function(thisComponent) {
        if (thisComponent.name === component) {
            var jsDependencies = [];
            var jsFile = [];
            var logInclude = function(scriptName) {
                var isWhiteListed = false;
                _.each(app.cascade.whiteListedDependencies, function(depen) {
                    if (depen.name === scriptName) {
                        jsDependencies.push(scriptName);
                        isWhiteListed = true;
                    }
                });
                if (isWhiteListed === false) {
                    var path = app.project.settings.path + scriptName;
                    var scriptContent = app.fs.readFileSync(path, 'utf8');
                    jsFile.push(scriptContent);
                }
            }
            var dependencies = js.match(/(\@dependency.*[\'|\"]+)/g);
            _.each(dependencies, function(dependency) {
                dependency = dependency.replace(/\"|\'/g, "");
                dependency = dependency.split(" ")[1];
                logInclude(dependency);
            });
            jsDependencies = _.uniq(jsDependencies);
            jsFile = _.uniq(jsFile);
            finalJsFile = jsFile.join("\n\n");
            app.fs.writeFileSync(pluginJson.path + "/" + component + ".js", finalJsFile);
            var fileName = "/" + component + ".js";
            if (jsFile.length > 0) {
                jsDependencies.push(fileName);
            }
            thisPlugin.config.jsDependencies = jsDependencies;
            if (jsDependencies.length > 0) {
                for (i = 0; i < thisComponent.plugins.length; i++) {
                    if (thisComponent.plugins[i].name === thisPlugin.name) {
                        thisComponent.plugins.splice(i, 1);
                    }
                }
                thisComponent.plugins.push(thisPlugin);
            }
        }
    });
}