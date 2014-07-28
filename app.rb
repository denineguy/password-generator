require 'sinatra/base'
require './models/password.rb'
require 'pry'

module PasswordSinatra
  class App < Sinatra::Base

    get '/' do
      erb :index
    end

    get '/word_generator' do
       erb :word_generator 
    end

    post '/password' do
      @password = Password.new
      @password.first_word = params[:password][:first_word]
      @password.second_word = params[:password][:second_word]
      @password.password_generator = params[:password][:password_generator]
  
      erb :password
    end

    get '/password' do

      erb :word_generator
    end

  end
end