require 'test_helper'

class TeamControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get team_new_url
    assert_response :success
  end

  test "should get create" do
    get team_create_url
    assert_response :success
  end

  test "should get index" do
    get team_index_url
    assert_response :success
  end

  test "should get show" do
    get team_show_url
    assert_response :success
  end

  test "should get edit" do
    get team_edit_url
    assert_response :success
  end

  test "should get update" do
    get team_update_url
    assert_response :success
  end

  test "should get destroy" do
    get team_destroy_url
    assert_response :success
  end

end
