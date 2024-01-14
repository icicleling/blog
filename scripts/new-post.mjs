import { DateTime } from "luxon";
import fs from "node:fs";
import path from "node:path";
import { exit } from "node:process";

const [args_title] = process.argv.slice(2);

if (!args_title) {
	console.log("No title");
	exit(0);
}

const date = DateTime.now();

const dir_path = path.resolve(process.cwd(), "content/blog", String(date.year));

if (!fs.existsSync(dir_path)) fs.mkdirSync(dir_path);

const file_path = path.resolve(
	dir_path,
	`${date.toFormat("LLdd")}-${args_title}.md`
);

const file_content = `\
---
title: ${args_title}
date: ${date.toFormat("yyyy-LL-dd hh:mm:ss")}
tags:
  - unknown
---

`;

fs.writeFile(file_path, file_content, (err) => {
	if (err) {
		console.log(err);
		return;
	}
});
