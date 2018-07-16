class App
  def call(environment_hash)
    status_code = 200
    header = {}
    body = ['<h1>Hello World</h1>'] # or {}

    return [status_code, header, body]
  end
end
