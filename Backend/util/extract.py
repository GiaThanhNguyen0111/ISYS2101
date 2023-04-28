import json;
import pandas as pd
pd.options.display.max_rows = 1
# recipe_id = 240488
# recipe_name = "Foolproof Rosemary Chicken Wings"
# ingredietns = "chicken wings^sprigs rosemary^head garlic^olive oil^lemon pepper^seasoned salt"
# image_url = "https://images.media-allrecipes.com/userphotos/720x405/3852182.jpg"
# cooking_directions = '''{'directions': u"Prep\n20 m\nCook\n40 m\nReady In\n1 h\nPreuheat an oven to 350 degrees F (175 degrees C).\nArrange the chicken wings, rosemary, and garlic cloves on a broiler-proof baking sheet, making sure the chicken pieces are not touching. Drizzle the olive oil over the chicken and garlic. Season the wings on all sides with the lemon pepper and seasoned salt.\nBake in the preheated oven until chicken meat is no longer pink at the bone and the juices run clear, 35 to 40 minutes, turning the wings once about halfway through the cooking time. An instant-read thermometer inserted into the thickest part of a wing should read at least 160 degrees F (70 degrees C).\nTake the baking sheet from the oven and set the oven's broiler to High. Remove the garlic and rosemary from the sheet and set aside. Turn the wings again.\nBroil the wings until golden brown, about 5 minutes. Garnish with the rosemary sprigs and garlic to serve."}'''
# nutritions = '''"{u'niacin': {u'hasCompleteData': True, u'name': u'Niacin Equivalents', u'amount': 10.06679, u'percentDailyValue': u'77', u'displayValue': u'10', u'unit': u'mg'}, u'sugars': {u'hasCompleteData': False, u'name': u'Sugars', u'amount': 0.2361299, u'percentDailyValue': u'0', u'displayValue': u'0.2', u'unit': u'g'}, u'sodium': {u'hasCompleteData': True, u'name': u'Sodium', u'amount': 762.805, u'percentDailyValue': u'31', u'displayValue': u'763', u'unit': u'mg'}, u'carbohydrates': {u'hasCompleteData': True, u'name': u'Carbohydrates', u'amount': 6.071931, u'percentDailyValue': u'2', u'displayValue': u'6.1', u'unit': u'g'}, u'vitaminB6': {u'hasCompleteData': True, u'name': u'Vitamin B6', u'amount': 0.5538, u'percentDailyValue': u'35', u'displayValue': u'< 1', u'unit': u'mg'}, u'calories': {u'hasCompleteData': True, u'name': u'Calories', u'amount': 335.1655, u'percentDailyValue': u'17', u'displayValue': u'335', u'unit': u'kcal'}, u'thiamin': {u'hasCompleteData': False, u'name': u'Thiamin', u'amount': 0.06496, u'percentDailyValue': u'6', u'displayValue': u'< 1', u'unit': u'mg'}, u'fat': {u'hasCompleteData': True, u'name': u'Fat', u'amount': 23.62519, u'percentDailyValue': u'36', u'displayValue': u'23.6', u'unit': u'g'}, u'folate': {u'hasCompleteData': True, u'name': u'Folate', u'amount': 6.907802, u'percentDailyValue': u'4', u'displayValue': u'7', u'unit': u'mcg'}, u'caloriesFromFat': {u'hasCompleteData': True, u'name': u'Calories from Fat', u'amount': 212.6267, u'percentDailyValue': u'-', u'displayValue': u'213', u'unit': u'kcal'}, u'calcium': {u'hasCompleteData': True, u'name': u'Calcium', u'amount': 60.08832, u'percentDailyValue': u'8', u'displayValue': u'60', u'unit': u'mg'}, u'fiber': {u'hasCompleteData': True, u'name': u'Dietary Fiber', u'amount': 0.8866814, u'percentDailyValue': u'4', u'displayValue': u'0.9', u'unit': u'g'}, u'magnesium': {u'hasCompleteData': True, u'name': u'Magnesium', u'amount': 24.21298, u'percentDailyValue': u'9', u'displayValue': u'24', u'unit': u'mg'}, u'iron': {u'hasCompleteData': True, u'name': u'Iron', u'amount': 1.704567, u'percentDailyValue': u'17', u'displayValue': u'2', u'unit': u'mg'}, u'cholesterol': {u'hasCompleteData': True, u'name': u'Cholesterol', u'amount': 71.4, u'percentDailyValue': u'24', u'displayValue': u'71', u'unit': u'mg'}, u'protein': {u'hasCompleteData': True, u'name': u'Protein', u'amount': 23.91265, u'percentDailyValue': u'48', u'displayValue': u'23.9', u'unit': u'g'}, u'vitaminA': {u'hasCompleteData': True, u'name': u'Vitamin A - IU', u'amount': 359.364, u'percentDailyValue': u'7', u'displayValue': u'359', u'unit': u'IU'}, u'potassium': {u'hasCompleteData': True, u'name': u'Potassium', u'amount': 249.1827, u'percentDailyValue': u'7', u'displayValue': u'249', u'unit': u'mg'}, u'saturatedFat': {u'hasCompleteData': True, u'name': u'Saturated Fat', u'amount': 5.683611, u'percentDailyValue': u'28', u'displayValue': u'5.7', u'unit': u'g'}, u'vitaminC': {u'hasCompleteData': True, u'name': u'Vitamin C', u'amount': 5.307448, u'percentDailyValue': u'9', u'displayValue': u'5', u'unit': u'mg'}}'''


def extractedIngredients(ingredients):
    ingredientsArr = ingredients.split('^')
    return ingredientsArr


def extractedCookingDirections(cooking_direction):
    newString = cooking_direction.replace('u','', 1)   # replace the firts "u" (unicode)# replace the "" in value to ''''''
    direction = eval(newString)
    finalOutput = direction['directions']

    return finalOutput

def extractNutritions(nutritions):
    deletedChar = 'u'
    newString = ""
    for i in range(0, len(nutritions)):
        if not (nutritions[i] == deletedChar and nutritions[i+1] == '\''):
            newString += nutritions[i]
    newStr2 = newString.replace('\"', "",1)
    nutrition = eval(newStr2)
        
    return nutrition

def toJSON(recipe_id,recipe_name, ingredients, image_url, cooking_direction, nutritions):
    dict_object = {
        'id': recipe_id,
        'name': recipe_name,
        'ingredients': extractedIngredients(ingredients),
        'image_url': image_url,
        'cooking_directions': extractedCookingDirections(cooking_direction),
        'nutritions': extractNutritions(nutritions) 
    }

    json_object = json.dumps(dict_object, indent=4)

    return json_object



def readFile(filename):
    df = pd.read_csv(filename)
    return df



def csv_to_JSON(filename):
    lines = readFile(filename)
    recipeList = []
    for index, record in lines.iterrows():
        recipe_id = record['recipe_id']
        recipe_name = record['recipe_name']
        image_url = str(record['image_url'])
        ingredients = record['ingredients']
        cooking_directions = record['cooking_directions']
        nutritions = record['nutritions']
        recipe = toJSON(recipe_id,recipe_name, ingredients, image_url, cooking_directions, nutritions)
        recipeList.append(recipe)

    return recipeList


def writeFile(filename):
    recipeList = csv_to_JSON('D:\Extract files\core-data_recipe.csv')
    file = open(filename, 'a')

    for recipe in recipeList:
        file.write(recipe+ ",\n")


writeFile('D:/Extract files/recipes.json')
