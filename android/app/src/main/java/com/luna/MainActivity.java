package com.luna;

import com.facebook.react.ReactActivity;
import android.content.Intent; // <--- import new ismail
import android.content.res.Configuration; // <--- import new ismail

public class MainActivity extends ReactActivity {
   /**
    *  Implement onConfigurationChanged new ismail
    */
  @Override
  public void onConfigurationChanged(Configuration newConfig) {
    super.onConfigurationChanged(newConfig);
    Intent intent = new Intent("onConfigurationChanged");
    intent.putExtra("newConfig", newConfig);
    this.sendBroadcast(intent);
  }
    /**
     * Returns the name of the main component registered from JavaScript. This is used to schedule
     * rendering of the component.
     */
  @Override
  protected String getMainComponentName() {
    return "Luna";
  }
}
