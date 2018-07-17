require 'pry'

class ApplicationController < Sinatra::Base

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
        author = params[:author]
        title = params[:title]
        snippet = params[:snippet]
        book = Book.create(author: author, title: title, snippet: snippet)
        redirect "books/#{book.id}"
    end

    get '/books/:id' do
        # grab the book
        @book = Book.find(params[:id])
        # display the view
        erb :show
    end


end
