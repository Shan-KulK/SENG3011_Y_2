import pandas as pd

data_raw = pd.read_csv("21.02_disease_list.csv")
data_raw_given = pd.read_csv("diseases.csv")
data_raw.drop(["efo_id","number_of_associations"], axis=1, inplace=True)
df_new = data_raw.rename(columns={'disease_full_name': 'Text'})
df_new = df_new.head(940)
df_new_given = data_raw_given.rename(columns={'name': 'Text'})
df_list = []
df_list.append(df_new_given)
df_list.append(df_new)
concat_Df = pd.concat(df_list, axis = 0) 

concat_Df["Type"] = "DISEASE"
concat_Df.to_csv("final_list.csv", index= None)
print(concat_Df)