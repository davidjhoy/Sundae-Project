class Flavor < ActiveRecord::Base
  belongs_to :user
  belongs_to :sundae
end