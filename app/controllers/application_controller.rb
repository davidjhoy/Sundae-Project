class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/" do
    { message: "Good luck with your project!" }.to_json
  end

  get "/sundaes" do
    Sundae.all.to_json
  end
  
  get "/flavors" do
    Flavor.all.to_json
  end
  
  post "/sundaes" do
    Sundae.create(name: params[:name], container: params[:container], topping: params[:topping], user_id: params[:user_id], flavor_id: params[:flavor_id]).to_json
  end

  
  post "/users" do

  end


  patch "/sundaes/:id" do
    update_sundae = Sundae.find(params[:id])
    update_sundae.update(name: params[:name], container: params[:container], topping: params[:topping], user_id: params[:user_id], flavor_id: params[:flavor_id]).to_json
  end

  delete "/sundaes/:id" do
    delete_sundae = Sundae.find(params[:id])
    delete_sundae.destroy
  end

end
