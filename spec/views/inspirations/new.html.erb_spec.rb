require 'rails_helper'

RSpec.describe "inspirations/new", type: :view do
  before(:each) do
    assign(:inspiration, Inspiration.new(
      :name => "MyString",
      :link => "MyString",
      :inspired => false
    ))
  end

  it "renders new inspiration form" do
    render

    assert_select "form[action=?][method=?]", inspirations_path, "post" do

      assert_select "input#inspiration_name[name=?]", "inspiration[name]"

      assert_select "input#inspiration_link[name=?]", "inspiration[link]"

      assert_select "input#inspiration_inspired[name=?]", "inspiration[inspired]"
    end
  end
end
