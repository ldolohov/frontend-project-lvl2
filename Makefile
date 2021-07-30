install:
				npm ci
publish:
				npm publish --dry-run
gendiff:
				npm link
lint:
				npx eslint .
test:
				npm test