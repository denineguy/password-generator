require 'sinatra'
class Password

  attr_accessor :first_word, :second_word, :password_generator

  def initialize
    @generator = []
  end
  
  def word1 
    word_split = first_word.split("")
    word_scramble = word_split.permutation(rand(2..4)).to_a[rand(20)]
  end  

  def word2
    word_split = second_word.split("")
    word_scramble = word_split.permutation(rand(2..3)).to_a[rand(20)]
  end  

  def password_generator
    @generator << [word1, rand(10), word2, "_", rand(20)].join
    @generator[0]
  end

end