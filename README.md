# language-generator-seed

Project for developing programming languages in JavaScript with PEGjs.

## Install

Simply clone this project from Github to your machine typing in your console:

`$ git clone https://github.com/allnulled/language-generator-seed.git`

## Workflow

Basically, the project is prepared for you:

##### 1. To start watching changes.

Simply running:

`$ npm run start`

...or:

`$ npm run watch`

##### 2. To start creating grammars under `src/grammars`.

Once you change, create or delete any file under that folder, the project will automatically build the language again, and execute the tests.

## Commands

It comes with the commands:

	- **test**: it uses `mocha` and `chai`. The default behaviour is to read the files under `test/samples/input`, use the generated parser to take the output, and compare that output with the contents of the same file, but in the folder of `test/samples/output`.
	- **watch**: it listens for changes under the `src/grammars/*` files. Automatically, it will rebuild the parser and execute the tests.
	- **build**: it will take all the files under `src/grammars/*` and concatenate them into 1 file, at `src/language.pegjs`. Then, it will use `pegjs` to build that parser.

To run the commands, you only need to run:

	- `$ npm run test`

	- `$ npm run watch`

	- `$ npm run build`

## Files

It comes also with:

	- a minimal example of language: `hello world!`.
	- a minimal test of that language: the files at `test/samples/input` and `test/samples/output`.

## License

Strictly `WTFL`. So, fuck off bitches, ain't got no job, ain't got no manner to get one, but I do not expect none to pay me a dollar: instead, you can take this project, change a comma, and say that it was yours. I do not give a shit. This planet is for suckers.

## Contribute

Just, do your own branch.

## Issues

Mmmmmmeh, as I do not get a job (I reside in Spain), I am not into this. But I will be glad that you show interest in something that I did.


