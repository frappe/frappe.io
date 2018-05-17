/* eslint-disable */
var fs = require("fs"),
	path = require("path");

walk('./docs/frappe', function(filepath, stats) {
    if (filepath.endsWith('.md')) {
        const filecontent = fs.readFileSync(filepath, { encoding: 'utf-8'});
        const converted = convert(filecontent);
        fs.writeFileSync(filepath, converted);
        console.log(path.basename(filepath), 'done');
    }
});

function convert(md) {
    return md.replace(/((?:^\t[^\n]*\n)+)/gm, function(match, p1, offset, string) {
        return "\n```\n" + match + "```\n";
    });
}


function walk(dir, callback) {
	fs.readdir(dir, function(err, files) {
		if (err) throw err;
		files.forEach(function(file) {
			var filepath = path.join(dir, file);
			fs.stat(filepath, function(err,stats) {
				if (stats.isDirectory()) {
					walk(filepath, callback);
				} else if (stats.isFile()) {
					callback(filepath, stats);
				}
			});
		});
	});
}
