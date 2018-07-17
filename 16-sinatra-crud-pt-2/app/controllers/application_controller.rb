require 'pry'

class ApplicationController < Sinatra::Base

    set :method_override, true
    set :views, 'app/views'

    get '/' do
      erb :home
    end


    get '/books' do 
        @books = Book.all
        erb :index
    end

    get '/books/new' do
        # load blank book form
        erb :new
    end

    post '/books' do
        # create new book
        book = Book.create(book_params(params))
        redirect "books/#{book.id}"
    end

    get '/books/:id' do
        # grab the book
        @book = Book.find(params[:id])
        # display the view
        erb :show
    end

    get '/books/:id/edit' do 
        @book = Book.find(params[:id])
        erb :edit
    end

    put '/books/:id' do
        book = Book.find(params[:id])
        book.update(book_params(params))
        redirect "/books/#{book.id}"
    end

    delete '/books/:id' do
        book = Book.find(params[:id])
        book.destroy
        redirect "/books"
    end

    get '/test/:phrase/:number' do
        phrase = params[:phrase]
        number = params[:number].to_i
        output = []
        number.times do |i|
            output << phrase
        end
        @output = output.join(" ")
        erb :test
    end

    private

    def book_params(params)
        author = params[:author]
        title = params[:title]
        snippet = params[:snippet]

        return_params = {
            "author": author,
            "title": title,
            "snippet": snippet
        }
    end
end
