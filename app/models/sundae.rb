class Sundae < ActiveRecord::Base
  has_many :flavors
  has_many :users, through: :flavors
end