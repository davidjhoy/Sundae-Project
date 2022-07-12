class Flavor < ActiveRecord::Base
  has_many :sundaes
  has_many :users, through: :sundaes
end