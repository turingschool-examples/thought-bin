require 'rails_helper'

RSpec.describe "inspirations/edit", type: :view do
  before(:each) do
    @inspiration = assign(:inspiration, Inspiration.create!(
      :name => "MyString",
      :link => "MyString",
      :inspired => false
    ))
  end

  it "renders the edit inspiration form" do
    render

    assert_select "form[action=?][method=?]", inspiration_path(@inspiration), "post" do

      assert_select "input#inspiration_name[name=?]", "inspiration[name]"

      assert_select "input#inspiration_link[name=?]", "inspiration[link]"

      assert_select "input#inspiration_inspired[name=?]", "inspiration[inspired]"
    end
  end
end
