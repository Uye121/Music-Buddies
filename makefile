manage := manage.py

migration:
	python ./$(manage) makemigrations

migrate:
	python ./$(manage) migrate

start_client:
	npm run dev --prefix frontend

start_server:
	python $(manage) runserver
