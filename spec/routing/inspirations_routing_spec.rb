require "rails_helper"

RSpec.describe InspirationsController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/inspirations").to route_to("inspirations#index")
    end

    it "routes to #new" do
      expect(:get => "/inspirations/new").to route_to("inspirations#new")
    end

    it "routes to #show" do
      expect(:get => "/inspirations/1").to route_to("inspirations#show", :id => "1")
    end

    it "routes to #edit" do
      expect(:get => "/inspirations/1/edit").to route_to("inspirations#edit", :id => "1")
    end

    it "routes to #create" do
      expect(:post => "/inspirations").to route_to("inspirations#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/inspirations/1").to route_to("inspirations#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/inspirations/1").to route_to("inspirations#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/inspirations/1").to route_to("inspirations#destroy", :id => "1")
    end

  end
end
