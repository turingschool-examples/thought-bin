require 'rails_helper'

RSpec.describe "Inspirations", type: :request do
  describe "GET /inspirations" do
    it "works! (now write some real specs)" do
      get inspirations_path
      expect(response).to have_http_status(200)
    end
  end
end
