Book.destroy_all

GoogleBooks::Adapter.new("Madeline L'Engle").fetch_books
GoogleBooks::Adapter.new("Terry Pratchett").fetch_books
GoogleBooks::Adapter.new("Ursula K. Le Guin").fetch_books
GoogleBooks::Adapter.new("Isaac Asimov").fetch_books
