class User < ActiveRecord::Base
  has_many :flavors
  has_many :sundaes, through: :flavors
end