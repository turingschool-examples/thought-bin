require 'rails_helper'

RSpec.describe "inspirations/index", type: :view do
  before(:each) do
    assign(:inspirations, [
      Inspiration.create!(
        :name => "Name",
        :link => "Link",
        :inspired => false
      ),
      Inspiration.create!(
        :name => "Name",
        :link => "Link",
        :inspired => false
      )
    ])
  end

  it "renders a list of inspirations" do
    render
    assert_select "tr>td", :text => "Name".to_s, :count => 2
    assert_select "tr>td", :text => "Link".to_s, :count => 2
    assert_select "tr>td", :text => false.to_s, :count => 2
  end
end
